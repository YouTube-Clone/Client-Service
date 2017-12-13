FROM node:carbon

WORKDIR /app

COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm install --only=production

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]