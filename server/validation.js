const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const validation = Joi.object({
        firstName: Joi.string().max(255).required(),
        lastName: Joi.string().max(255).required(),
        email: Joi.string().max(255).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().min(6).required(),
    })

    return validation.validate(data);
} // validation for register

const loginValidation = (data) => {
    const validation = Joi.object({
        email: Joi.string().max(255).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().min(6).required(),
    })

    return validation.validate(data);
} // validation for register

//export functions to use
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;