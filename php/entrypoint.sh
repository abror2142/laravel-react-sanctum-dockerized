#!/bin/sh
set -e

php artisan migrate:fresh --seed --force

chown -R www-data:www-data /laravel /laravel/vendor
chmod -R 775 /laravel /laravel/vendor

exec php-fpm