FROM php:8.1-apache

# Arguments defined in docker-compose.yml
ARG user
ARG uid

# Update system and install necessary packages
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libcurl4-gnutls-dev \
    zip \
    unzip \
    telnet \
    net-tools && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY --chown=www-data . .

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd curl opcache

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && chown -R $user:$user /home/$user
RUN composer config -g repo.packagist composer https://packagist.org
RUN composer config -g repo.packagist composer https://packagist.phpcomposer.com

RUN chmod -R 755 /var/www/html \
    && chown -R $user:$user /var/www/html

# Switch to non-root user
USER $user

RUN echo "$(pwd)"

# Install the project PHP dependencies
RUN composer install --no-interaction --prefer-dist

# Clear Laravel cache AFTER copying the Laravel application
RUN php artisan cache:clear
RUN php artisan config:clear

RUN php artisan config:cache

RUN chown $user:$user /var/www/html/docs/init-project.sh
RUN chmod 777 /var/www/html/docs/init-project.sh
RUN chmod +x /var/www/html/docs/init-project.sh

# Serve the Laravel application
CMD php artisan serve --host=0.0.0.0 --port=8000
