FROM node:alpine

WORKDIR /app

COPY ["package.json", "./"]
COPY . ./

RUN yarn
ENV PATH /app/node_modules/.bin:$PATH
RUN yarn build

CMD [ "yarn", "start" ]