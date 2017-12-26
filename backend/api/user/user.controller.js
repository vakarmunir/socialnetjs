var User = require('./user.model');
var {authenticate} = require('../../middleware/authenticate');
var {ObjectId} = require('mongodb');

class UserController{
    async create(req, res) {
        try {
            const body = req.body;
            const user = new User(body);
            await user.save();
            const token = await user.generateAuthToken();
            res.header('x-auth', token).send(user);
        } catch (e) {
            res.status(400).send(e);
        }
    }
    
    async me(req, res) {
        res.send(req.user);
    }

    async login(req, res) {
        try {
            const body = req.body;            
            var user = await User.findByCredentials(body.email, body.password).then(a => {
                console.log("goooo ", a );
            });                        
            const token = await user.generateAuthToken();            
            res.header('x-auth', token).send(user);
        } catch (e) {
            res.status(400).send(e);            
        }
    }
    
    async deleteToken(req, res) {
        try {
            await req.user.removeToken(req.token);
            res.status(200).send();
        } catch (e) {
            res.status(400).send();
        }
    }
}

module.exports = UserController;