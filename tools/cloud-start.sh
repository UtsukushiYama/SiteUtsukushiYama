#!/usr/bin/env bash
# Restart processes retained files cannot preserve. Run from the existing checkout.
set -euo pipefail
repo_dir="$(cd "$(dirname "$0")/.." && pwd)"
runtime_dir=/workspace/runtime
export PATH="$runtime_dir/bin:$PATH"
export LD_LIBRARY_PATH="$runtime_dir/root/usr/lib/x86_64-linux-gnu"
cd "$repo_dir"
if ! "$runtime_dir/root/usr/bin/mariadb" --no-defaults --socket="$runtime_dir/mysql.sock" -uroot -e 'SELECT 1' >/dev/null 2>&1; then
  if ! test -d "$runtime_dir/db/mysql"; then
    mkdir -p "$runtime_dir/db"
    "$runtime_dir/root/usr/bin/mariadb-install-db" --no-defaults --basedir="$runtime_dir/root/usr" --datadir="$runtime_dir/db" --auth-root-authentication-method=normal --skip-test-db > "$runtime_dir/database-install.log" 2>&1
  fi
  nohup "$runtime_dir/root/usr/sbin/mariadbd" --no-defaults --basedir="$runtime_dir/root/usr" --datadir="$runtime_dir/db" --socket="$runtime_dir/mysql.sock" --pid-file="$runtime_dir/mysql.pid" --bind-address=127.0.0.1 --port=3307 --log-error="$runtime_dir/mysql.log" > "$runtime_dir/mysql-console.log" 2>&1 &
  for attempt in {1..60}; do
    if "$runtime_dir/root/usr/bin/mariadb" --no-defaults --socket="$runtime_dir/mysql.sock" -uroot -e 'SELECT 1' >/dev/null 2>&1; then break; fi
    sleep 0.5
  done
fi
"$runtime_dir/root/usr/bin/mariadb" --no-defaults --socket="$runtime_dir/mysql.sock" -uroot -e 'CREATE DATABASE IF NOT EXISTS uy_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; CREATE DATABASE IF NOT EXISTS uy_test_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;'
for database in uy_db uy_test_db; do "$runtime_dir/root/usr/bin/mariadb" --no-defaults --socket="$runtime_dir/mysql.sock" -uroot "$database" < uy_database.sql; done
# Create isolated local credentials only when a user has not already configured them.
if ! test -f config/local.php; then php tools/cloud-database.php; fi
mkdir -p storage
if ! curl --silent --fail http://127.0.0.1:8080/api/check-session.php >/dev/null; then
  nohup php -S 127.0.0.1:8080 tools/dev-router.php > "$runtime_dir/site.log" 2>&1 &
fi
for attempt in {1..30}; do
  if curl --silent --fail http://127.0.0.1:8080/api/check-session.php >/dev/null; then break; fi
  sleep 0.3
 done
php -r '$data=json_decode(file_get_contents("http://127.0.0.1:8080/api/stories.php"),true,32,JSON_THROW_ON_ERROR);if(empty($data["success"]) || empty($data["data"]["stories"]))exit(1);echo "Site e stories respondendo.\n";'
