FROM node:12

WORKDIR /usr/src/plannification

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm","start"]