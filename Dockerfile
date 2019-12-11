FROM alpine:3.10
LABEL maintainer="Feast It"

COPY ./ /app/
WORKDIR /app

RUN /sbin/apk add --no-cache openssl-dev \
    curl \
    nodejs-npm \
    nodejs-current \
    openssl \
    ca-certificates \
    && npm install

EXPOSE 8000
CMD ["npm", "start"]
