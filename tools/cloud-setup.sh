#!/usr/bin/env bash
# Install locally, preserving the repository, checksums and system packages.
set -euo pipefail
repo_dir="$(cd "$(dirname "$0")/.." && pwd)"
runtime_dir=/workspace/runtime
mkdir -p "$runtime_dir/bin"
if ! "$runtime_dir/bin/php" -r 'exit(extension_loaded("mysqli") ? 0 : 1);' >/dev/null 2>&1; then
  if ! test -f /etc/debian_version; then
    echo 'This cloud bootstrap needs Debian. For other systems, install PHP 8.1+ with mysqli and MySQL.' >&2
    exit 1
  fi
  mkdir -p "$runtime_dir/apt/lists/partial" "$runtime_dir/apt/cache/archives/partial" "$runtime_dir/apt/empty"
  cat > "$runtime_dir/apt/sources.list" <<'SOURCES'
deb https://deb.debian.org/debian trixie main
deb https://deb.debian.org/debian-security trixie-security main
SOURCES
  cat > "$runtime_dir/apt/apt.conf" <<'CONFIG'
Dir::Etc::parts "/workspace/runtime/apt/empty";
Dir::Etc::sourcelist "/workspace/runtime/apt/sources.list";
Dir::Etc::sourceparts "/workspace/runtime/apt/empty";
Dir::State::lists "/workspace/runtime/apt/lists";
Dir::Cache "/workspace/runtime/apt/cache";
APT::Sandbox::User "agent";
CONFIG
  export APT_CONFIG="$runtime_dir/apt/apt.conf"
  /usr/bin/apt-get update
  (cd "$runtime_dir" && /usr/bin/apt-get download php8.4-cli php8.4-common php8.4-mysql php8.4-opcache php8.4-readline mariadb-server-core mariadb-client-core libaio1t64 liburing2 libnuma1 libsodium23 libargon2-1)
  for package in "$runtime_dir"/*.deb; do dpkg-deb -x "$package" "$runtime_dir/root"; done
  cat > "$runtime_dir/php.ini" <<'CONFIG'
extension_dir=/workspace/runtime/root/usr/lib/php/20240924
extension=mysqlnd
extension=mysqli
session.save_path=/workspace/runtime
log_errors=On
display_errors=Off
CONFIG
  cat > "$runtime_dir/bin/php" <<'PHP'
#!/bin/sh
export LD_LIBRARY_PATH=/workspace/runtime/root/usr/lib/x86_64-linux-gnu
exec /workspace/runtime/root/usr/bin/php8.4 -c /workspace/runtime/php.ini "$@"
PHP
  chmod +x "$runtime_dir/bin/php"
fi
export PATH="$runtime_dir/bin:$PATH"
php -r 'if(!extension_loaded("mysqli"))exit(1);'
cd "$repo_dir"
npm ci --cache /workspace/npm-cache
npm run vendor
npm run check
