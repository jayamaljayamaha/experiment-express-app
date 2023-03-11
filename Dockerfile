FROM node:16-alpine3.16 as dev
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine3.16 as prod
WORKDIR /usr/src/app
COPY package.json .
RUN npm install --only=production
COPY --from=dev /usr/src/app/build ./build
CMD ["npm", "start"]
