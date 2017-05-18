FROM keymetrics/pm2-docker-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
#RUN npm install pm2 -g

# Bundle app source
COPY . /usr/src/app

CMD ["pm2-docker", "--public", "$KEYMETRICS_PUBLIC", "--secret", "$KEYMETRICS_SECRET", "process.yml", "--watch"]
