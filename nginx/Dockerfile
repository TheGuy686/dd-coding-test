# Use the official Nginx base image
FROM nginx:latest

RUN echo "alias ls='ls --color=auto'" > /root/.bashrc

RUN apt-get update -y
RUN apt-get install -y iputils-ping

# Copy your custom configuration file to Nginx's configuration directory
COPY ./conf.d/default.conf /etc/nginx/nginx.conf

# (Optional) Copy your website files to the default Nginx directory (e.g., /usr/share/nginx/html/)
# COPY your_website_files /usr/share/nginx/html/

# Expose the Nginx port and any other ports that I need to use for the application
# backend app
EXPOSE 8000 
# front end vue application
EXPOSE 3000
# general port forwarding of port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]