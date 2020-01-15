FROM node:10-alpine

COPY ./reverseproxyjs/package*.json ./

RUN npm install

COPY ./reverseproxyjs ./

EXPOSE 8080

CMD [ "npm", "start", "app.js" ]
