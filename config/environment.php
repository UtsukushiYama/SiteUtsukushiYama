<?php
declare(strict_types=1);

/** Choose from server metadata; the visitor's Host header must not select credentials. */
function detectSiteEnvironment(array $server, string $sapi, string|false $override): string {
    if ($override !== false) {
        if (!in_array($override, ['development', 'production'], true)) {
            throw new RuntimeException('UY_ENV must be development or production');
        }
        return $override;
    }
    if ($sapi === 'cli') return 'development';
    if (in_array($server['SERVER_ADDR'] ?? '', ['127.0.0.1', '::1'], true)) return 'development';
    // PHP's built-in server provides its bind address as SERVER_NAME, not SERVER_ADDR.
    if ($sapi === 'cli-server' && in_array($server['SERVER_NAME'] ?? '', ['localhost', '127.0.0.1', '::1', '[::1]'], true)) {
        return 'development';
    }
    return 'production';
}
