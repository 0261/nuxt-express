const router = require('express').Router();
//required middleware\\
const bodyParser = require('body-parser').json(); // For POST
const session = require('express-session'); // Session
const passport = require('passport'); // Passport
const models = require("../../models"); // require Users Table
const cookieParser = require('cookie-parser'); // Cookies

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
}); // CORS

router.use(cookieParser()); // Cookies
router.use(bodyParser) // Parsing Post Data
router.use(session({ // Activate Session
    secret: 'goal',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000,
    }
}));
require('../../config/passport.js')(passport, models.user); // PASSPORT Init
router.use(passport.initialize()); // Passport Start
router.use(passport.session()); // Connect Session
//Sync Database
models.sequelize.sync().then(function () {

}).catch(function (err) {
    console.log(err);
});
////////////////////////

// # Authenticate
const auth = require('./auth/auth.routes');
router.use('/auth', auth);
// ################


// Check Secure! 05-18
module.exports = router;