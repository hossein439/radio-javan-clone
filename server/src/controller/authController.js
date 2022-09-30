const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcryptjs');

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign({user}, config.authentication.jwtScreet, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            const user = new User(req.body);
            const token = user.generateAuthToken();
            // user.save();
            // const userJson = user.toJSON();
            const one = Object.keys(req.body);
            
            res.send({
                user,
                token: user.tokens
            })
        } catch(err) {
            res.status(400).send({
                error: err,
            })
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({email});
            const isMatch = bcrypt.compare(password, user.password);
            const token = user.generateAuthToken();
            console.log(token)
            // const userJson = user.toJSON();

            if(!user){
                throw ('User Not Found');
            } 
            if(!isMatch) {
                throw ('Your password incorrct');
            }
            res.send({
                user,
                token: user.tokens
            })
        } catch(err) { 
            res.status(404).send({
                error: 'Your password or email is incorrect'
            })
        }
    },

    async logout (req, res) {
        try {

        } catch(err){
            res.status(500).send(err)
        }
    }
}