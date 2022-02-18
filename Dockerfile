FROM node:17
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
EXPOSE 8081
CMD ["npm", "run", "start"]