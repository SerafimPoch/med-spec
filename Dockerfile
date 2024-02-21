# Используйте официальный образ node.js как основу
FROM node:20-alpine

# Установите рабочий каталог в контейнере
WORKDIR /app

# Копируйте файлы 'package.json' и 'package-lock.json' (или 'yarn.lock') в рабочий каталог
COPY package*.json ./

# Установите зависимости проекта, используя npm или yarn
RUN yarn

# Копируйте исходный код приложения в рабочий каталог
COPY . .

# Соберите приложение для production
RUN yarn build

# Определите порт, который будет прослушивать runtime
EXPOSE 3000

# Запускайте приложение с помощью npm или yarn
CMD ["yarn", "start"]
