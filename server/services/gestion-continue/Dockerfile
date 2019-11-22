FROM node:12

WORKDIR /usr/src/gcontinue

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm","start"]