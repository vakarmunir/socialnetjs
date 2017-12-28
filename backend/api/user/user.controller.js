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
        var user = req.user;
        res.send(req.user);
    }

    async login(req, res) {

        let response = {
            email : {value : null , validationState : null},
            password : {value : null, validationState : null},      
            messages: []
        };

        const body = req.body;
        if(!body.email && !body.password){
            response.email.value = body.email;
            response.email.validationState = 'error';
            response.password.value = body.password;
            response.password.validationState = 'error';            
            response.messages = ["Please Complete Form!"];
            return res.status(400).send(response);
        }
                
        try {                                    
            var user = await User.findByCredentials(body.email, body.password);
            var token = await user.generateAuthToken();
            token = "tttkkknnn";
            var usr = {...user};
            usr.token = token;            
            //https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Access-Control-Expose-Headers
            res.header('x-auth', token).send(usr);            
        } catch (e) {     

            e.errorFields.forEach(function(field) {                
                response[field].value = body[field];
                response[field].validationState = 'error';                
            });
            response.messages = [e.error];            
            res.status(400).send(response);
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