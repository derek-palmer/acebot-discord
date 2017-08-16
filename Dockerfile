FROM keymetrics/pm2-docker-alpine

# Install base packages
RUN apk update
RUN apk upgrade

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Set the timezone
RUN apk add --update tzdata
ENV TZ=America/New_York

# Clean APK cache
RUN rm -rf /var/cache/apk/*

# Bundle app source
COPY . /usr/src/app

CMD ["pm2-docker", "--public", "$KEYMETRICS_PUBLIC", "--secret", "$KEYMETRICS_SECRET", "process.yml", "--watch"]
