# Use a node base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the application files into the container
COPY . .

# Install dependencies and build the application
RUN npm install
RUN npm run build

# Serve the application using a web server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose port 3000
EXPOSE 3000
