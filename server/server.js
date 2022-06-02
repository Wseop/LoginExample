const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const passportConfig = require('./passport.js');

app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({secret : 'secretcode', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session()); 

passportConfig();

app.use('/signin', require('./router/signin.js'));
app.use('/signup', require('./router/signup.js'));
app.use('/contents', require('./router/contents.js'));

app.listen(8080, () => {
    console.log("Listening on 8080");
});