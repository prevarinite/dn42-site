FROM node:20-alpine

WORKDIR /app
COPY . .

RUN npm install --production
RUN npm run build

CMD ["npx", "http-server", "./public"]
