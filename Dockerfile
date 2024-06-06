FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY back-end/package*.json ./

# Install dependencies
RUN npm install

# Copy the backend code to the container
COPY back-end ./

# Build the application
RUN npm run build

# Run the web service on container startup
CMD [ "npm", "run", "start:prod" ]

# Inform Docker that the container listens on the specified port
EXPOSE 3000
