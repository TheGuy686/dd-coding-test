FROM redis:7.2-alpine

WORKDIR /redis

COPY redis.conf /usr/local/etc/redis/redis.conf

COPY . .

RUN chmod +x init.sh

CMD ./init.sh > out.log