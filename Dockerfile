# Use an official Node.js image as the base
FROM node:14-alpine

# Set the working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's files
COPY . .

# Build the app
RUN npm run build

# Expose the port your app will run on (usually 3000 for React apps)
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]
