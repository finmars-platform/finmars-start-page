# syntax=docker/dockerfile:1
ARG BUILDKIT_SBOM_SCAN_CONTEXT=true
ARG BUILDKIT_SBOM_SCAN_STAGE=true

# Using the latest LTS version of Node.js based on Alpine
FROM node:24-alpine

# Update and install dependencies
RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git openssh python3 make g++ curl && \
    rm -rf /var/cache/apk/*

# Set the working directory
WORKDIR /var/app

# Copy the app source code
COPY . .

# Install Node.js dependencies
RUN npm install

# Node and npm use a non-root user provided by the base Node image
# Creating a new user "finmars" for running the application
RUN adduser -D finmars

# Change to non-root privilege
USER finmars

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the app
ENTRYPOINT ["node", "./server.js"]
