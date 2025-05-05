FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    libfreetype-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    zlib1g-dev \
    libzip-dev \
    unzip \
    npm \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install zip pdo pdo_mysql

ENV COMPOSER_ALLOW_SUPERUSER=1

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

WORKDIR /laravel

COPY ./laravel/composer.* .

RUN composer install --prefer-dist --no-dev --no-scripts --no-progress --no-interaction

COPY ./laravel .

COPY ./php/entrypoint.sh /
# RUN composer dump-autoload --optimize

ENTRYPOINT [ "sh", "/entrypoint.sh" ]