# Use Node.js official image as base
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port 3000 (default NestJS port)
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:prod"]