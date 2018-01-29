var User = require('./user.model');
var {authenticate} = require('../../middleware/authenticate');
var {ObjectId} = require('mongodb');

class UserController{
    async create(req, res) {        
        let messages = [];
        let response = {...req.body , messages};;
        const body = req.body;
        if(!body.email.value && !body.password.value){            
            response.email.validationState = response.password.validationState = 'error';            
            response.messages = ["Please Complete Form!"];
            return res.status(400).send(response);
        }
        try {                                    
            let displayname = body.email.value.split('@')[0];            
            const user = new User({email: body.email.value , password: body.password.value , profile:{displayname}});
            await user.save();
            var token = await user.generateAuthToken();            
            res.header('x-auth', token).send(user);
            res.send(user);            
        } catch (e) {
            if('error' in e)
            {
                e.errorFields.map((field) => {
                    response[field].validationState = 'error';                
                });
                response.messages = [e.error];
                response.password.value = '';                  
                res.status(400).send(response);
            }else{
                res.status(400).send(e);
            }                                     
        }
    }
    
    async me(req, res) {
        var user = req.user;
        res.send(req.user);
    }

    async login(req, res) {
        let messages = [];
        let response = {...req.body , messages};;
        const body = req.body;
        if(!body.email.value && !body.password.value){            
            response.email.validationState = response.password.validationState = 'error';            
            response.messages = ["Please Complete Form!"];
            return res.status(400).send(response);
        }
        try {                                    
            var user = await User.findByCredentials(body.email.value, body.password.value);
            var token = await user.generateAuthToken();            
            res.header('x-auth', token).send(user);
            res.send(user);            
        } catch (e) {
            if('error' in e)
            {
                e.errorFields.map((field) => {
                    response[field].validationState = 'error';                
                });
                response.messages = [e.error];
                response.password.value = '';                  
                res.status(400).send(response);
            }else{
                res.status(400).send(e);
            }                                     
        }
    }
    
    async deleteToken(req, res) {
        try {
            await req.user.removeToken(req.token);
            res.status(200).send({message : 'logout!'});
        } catch (e) {
            res.status(400).send();
        }
    }
}

module.exports = UserController;