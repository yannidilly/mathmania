FROM node:20.14.0-slim

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "start"]