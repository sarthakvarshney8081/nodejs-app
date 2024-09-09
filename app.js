const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const app = express();
const port = 3000;

// Passport Config
require('./config/passportConfig')(passport);

// DB Config
mongoose.connect('mongodb://mongo:27017/nodejs-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// EJS
app.set('view engine', 'ejs');

// Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));

// Start Server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
