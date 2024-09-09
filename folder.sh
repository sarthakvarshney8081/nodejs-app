#!/bin/bash

# Define the folder structure
mkdir -p nodejs-app/{routes,config,views,models,public/css}

# Create the necessary files
touch nodejs-app/app.js
touch nodejs-app/Dockerfile
touch nodejs-app/docker-compose.yml
touch nodejs-app/package.json
touch nodejs-app/routes/index.js
touch nodejs-app/routes/user.js
touch nodejs-app/config/passportConfig.js
touch nodejs-app/views/login.ejs
touch nodejs-app/views/register.ejs
touch nodejs-app/views/dashboard.ejs
touch nodejs-app/views/layout.ejs
touch nodejs-app/models/User.js
touch nodejs-app/public/css/style.css

# Confirmation message
echo "Node.js app folder structure created successfully!"
