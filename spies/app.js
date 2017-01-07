const db = require('./db');

module.exports.handleSignup = (email, password) => {
    console.log('Email: ', email);
    console.log('Pass: ', password);
    // check if email already exists
    // save the user to the database
    db.saveUser({email, password});
    // send the welcome email

}