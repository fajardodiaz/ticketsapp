FROM node:16-alpine

WORKDIR /code
COPY package.json package.json
RUN ["npm", "install"]
COPY . .
ENTRYPOINT ["npm", "start"]