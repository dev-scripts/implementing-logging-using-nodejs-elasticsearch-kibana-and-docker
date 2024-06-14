# Introduction
Project to implement logging using Node.js, Elasticsearch, Kibana and Docker.

## Project Setup

1. **Clone the Repository:**
   Open a terminal and run the following command to clone the project repository:

   ```bash
   git clone https://github.com/dev-scripts/implementing-logging-using-nodejs-elasticsearch-kibana-and-docker.git
   ```

2. **Navigate to the Project Directory:**
   Change into the project directory using the following command:

   ```bash
   cd implementing-logging-using-nodejs-elasticsearch-kibana-and-docker
   ```

3. **Running the Project Locally:**

Run the project using belwo command:
```
docker compose up
```

 Above command will take few minutes to build the docker images and run the containers. Once, docker containers are up and running, following containers endpoint should be accessable via browser.
 
1. Node App URL: `http://localhost:3002/`
2. Elasticsearch: `http://localhost:9300/`
3. Kibana: `http://localhost:5701/`

Blog post: 
https://www.prakashbhandari.com.np/posts/implementing-logging-using-node-js-elasticsearch-kibana-and-docker/
