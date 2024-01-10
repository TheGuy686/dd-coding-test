# Darkside Developments Technical Test BY Ryan J Cooke

## Prerequisites

1. Please install Docker according to the official guide located at [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
2. Ensure that Node.js is installed to execute the commands specified within the "script" tag of the package.json file located in the project's root directory. Alternatively, you can directly execute the Docker command. Both commands serve the same purpose, with the 'npm run' command acting as a convenient shorthand for the underlying Docker command.

## Next Steps
If Docker has been installed successfully and you are able to confirm the installation by running the following:

## Running the App
Should you prefer utilizing the Docker command exclusively, execute the following commands from the project's root directory:

```

// Docker only
docker-compose -f ./docker-compose.yaml down; docker-compose -f docker-compose.yaml --env-file '.env' up --build

Or you can run the node variant.

/ Both of these commands must be executed from the project's root directory.
// npm command
npm run start

```bash


Finally, access the UI from the browser on [https://localhost](https://localhost 'localhost')

## Technology Stack Explanation
The preferred technologies were PHP/Laravel and VueJS for the front end. However, due to past experiences with PHP polluting the UI and leading to code complexity, I prefer separating Frontend and Backend applications to maintain straightforward code. Hence, this app uses Laravel backend, VueJS frontend, and Docker for deployment.

The Docker setup includes five different images:
1. Apache Server for content serving and web traffic
2. MySQL DB
3. PhpMyadmin for easy database and data access
4. Laravel/PHP backend
5. VueJS frontend and NodeJS

My goal was to make the running, installation, and usage of the application as easy as possible, leading to an extended Docker environment design phase and a longer timeline than initially expected.

### Other Dependencies
1. PhpMyAdmin: Accessible via [https://localhost:1100](https://localhost:1100 'localhost:1100')

## Internal Steps Done on Startup

1. The initial Database migration will be done.
2. It will run the startup process to seed the database for dev data.
3. Once the Docker process finishes, users can navigate to "[https://localhost](https://localhost 'localhost')" in a browser, opening the UI to this application.

A table allows users to edit or insert new customers.
