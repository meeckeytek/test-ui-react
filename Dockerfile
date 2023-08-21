FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm build

COPY ./build .

EXPOSE 3000

CMD ["npm", "start"]