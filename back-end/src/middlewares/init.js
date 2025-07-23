const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const addUser = require('./addUser');

module.exports = [
  cors(),
  morgan('dev'),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  addUser,
  cookieSession({
    name: 'session',
    keys: ['123'],
    domain: 'example.com', // Set to your domain
    expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour expiration
    httpOnly: true,
    path: '/',
    secure: true, // Ensure cookies are sent over HTTPS
  }),
  cookieParser(),
];
