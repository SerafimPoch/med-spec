FROM node:20-alpine

# Установите рабочий каталог в контейнере
WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .


RUN yarn build


EXPOSE 3000


CMD ["yarn", "start"]
