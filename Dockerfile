# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose port 80 for the container
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
