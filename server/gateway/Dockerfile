FROM node:12

WORKDIR /usr/src/gateway

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","start"]