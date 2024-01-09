# Use the official Apache base image
# FROM httpd:latest
FROM php:7.4-apache

RUN apt-get update -y
RUN apt-get install telnet net-tools iputils-ping -y

RUN a2enmod proxy
RUN a2enmod proxy_http
RUN a2enmod rewrite

RUN chown -R www-data:www-data /var/www/html

# Expose the Apache port
EXPOSE 80

# WORKDIR /usr/app

# Start Apache when the container starts
CMD apachectl -D FOREGROUND
