FROM ubuntu:16.04
RUN  apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    curl \
    python-software-properties 

# install node.js
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install nodejs -y

RUN apt install libpng-dev -y
RUN npm update

WORKDIR /var/www/html/code
COPY ./package.json ./
# install dependencies
RUN npm install

#copy code 
COPY ./ ./
CMD [ "npm", "run", "build:prod" ]