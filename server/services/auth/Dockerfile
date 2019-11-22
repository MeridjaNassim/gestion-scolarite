FROM node:12

WORKDIR /usr/src/auth

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm","start"]