# Use an openjdk base image
FROM openjdk:17-jdk-alpine

# Set the working directory
WORKDIR /app

# Copy the application jar file into the container
COPY target/fullstack-backend-0.0.1-SNAPSHOT.jar app.jar

# Expose port 8080
EXPOSE 8080

# Define the entry point to run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
