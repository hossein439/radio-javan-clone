const Joi = require('joi');
module.exports = {
    register(req, res, next) {
        const schema = Joi.object({
            username: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$')),
        })

        const { value, error } = schema.validate(req.body);

        if (error) {
            switch (error.details[0].context.key) {
                case 'name':
                    res.status(400).send({
                        error: 'You must name must be a STRING'
                    })
                    break;
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break;
                case 'password':
                    res.status(400).send({
                        error: `
                            The password provided failed to match the following rules:
                            <br>
                            1. It must contains ONLY the following characters: lowercase, uppercase, numerics, 
                            <br>
                            2. It must at least 8 characters in length and not greater then 32 characters in length
                        `
                    })
                    break;
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        } else {
            next()
        }
    }
}