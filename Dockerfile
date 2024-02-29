# Use an official Node.js runtime as the base image
FROM node:18-alpine as build-stage

# Set the working directory in the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile --production

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vue application
RUN pnpm run build

# Use a smaller image for production
FROM nginx:alpine

# Copy the built Vue application from the build stage to the NGINX web server's public directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80
