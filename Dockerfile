FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER root
CMD ["npm", "start"]
RUN apk add --no-cache sqlite
WORKDIR /app
CMD ["sqlite3", "database.db"]

