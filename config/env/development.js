module.exports = {
    //mongoUri: 'mongodb://localhost/myFirstNode',
    // or use 
     mongoUri: 'mongodb://admin:password@localhost:27017/testdb1',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '287523093932-svu4t8h9batiabkk0cho4021ul0p7qbl.apps.googleusercontent.com',
        clientSecret: '2h73RFBqmFKHWr3gsn6v4rxz',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
 }
}