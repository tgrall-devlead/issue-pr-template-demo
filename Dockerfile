FROM node:16-buster-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]

LABEL org.opencontainers.image.authors="GitHub Actions" 
LABEL org.opencontainers.image.vendor="GitHub" 
LABEL org.opencontainers.image.licenses="MIT" 
LABEL org.opencontainers.image.title="GitHub Workshop Sample App" 
LABEL org.opencontainers.image.description="GitHub Workshop Sample Node App built using Actions"
