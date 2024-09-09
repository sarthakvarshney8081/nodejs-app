# nodejs-app
mkdir nodejs-app
cd nodejs-app
npm init -y

npm install express mongoose ejs bcryptjs express-session connect-flash passport passport-local

nodejs-app/
│
├── app.js
├── Dockerfile
├── docker-compose.yml
├── package.json
├── routes/
│   ├── index.js
│   ├── user.js
├── config/
│   ├── passportConfig.js
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   ├── dashboard.ejs
│   ├── layout.ejs
├── models/
│   ├── User.js
└── public/
    ├── css/
        ├── style.css
