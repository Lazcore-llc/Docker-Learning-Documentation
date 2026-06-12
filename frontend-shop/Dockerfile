FROM node:alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["node", "App.js"]
#CMD ["npm", "start"]