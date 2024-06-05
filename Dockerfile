FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app


COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the application
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "run", "start:prod" ]

# Inform Docker that the container listens on the specified port.
EXPOSE 3000
