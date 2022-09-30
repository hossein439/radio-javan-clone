// Middleware
const authControllerPolicy = require('./policies/authControllerPolicy') ;

// Controller
const songsController      = require('./controller/songsController');
const authController       = require('./controller/authController');

module.exports = (app) => {
    app.post('/register', authControllerPolicy.register, authController.register);
    app.post('/login',    authController.login);

    // Song Routes
    app.get   ('/songs',     songsController.index);
    app.post  ('/songs',     songsController.post);
    app.get   ('/songs/:id' ,songsController.view);
    app.patch ('/songs/:id' ,songsController.edit);
    app.delete('/songs/:id' ,songsController.delete);
}