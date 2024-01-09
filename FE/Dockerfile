# FE Dockerfile
FROM node:latest

RUN echo "alias ls='ls --color=auto'" >> /root/.bashrc

# Set the working directory inside the container
WORKDIR /usr/src/web

# Copy the contents of the FE directory into the container
COPY . .

RUN apt-get update 
RUN apt-get install telnet net-tools -y

# Install dependencies and build the frontend
RUN npm install

# Expose the Frontend port
# EXPOSE 3000

# Run the frontend application
CMD [ "npm", "run", "dev" ]