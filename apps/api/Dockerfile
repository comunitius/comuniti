FROM node:lts-alpine as build-stage

RUN mkdir -p /usr/be/api
WORKDIR /usr/be/api

COPY package.json /usr/be/api/package.json
COPY package-lock.json /usr/be/api/package-lock.json

RUN npm install
COPY . .

EXPOSE 3333

CMD ["npm", "run",  "nx",  "serve",  "api"]