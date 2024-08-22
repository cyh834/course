FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json tsconfig.json /app/
RUN corepack enable && npm ci


EXPOSE 8080