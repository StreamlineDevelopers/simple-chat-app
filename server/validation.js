const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const validation = Joi.object({
        firstName: Joi.string().max(255).required(),
        lastName: Joi.string().max(255).required(),
        email: Joi.string().max(255).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().min(6).required(),
        isActive: Joi.boolean()
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

const changePassValidation = (data) => {
    const validation = Joi.object({
        currentPassword: Joi.string().min(6).required().label('Current Password'),
        newPassword: Joi.string().min(6).required().label('New Password'),
        confirmNewPassword: Joi.any().equal(Joi.ref('newPassword'))
            .required()
            .label('Confirm New Password')
            .messages({ 'any.only': '{{#label}} does not match' })
    })

    return validation.validate(data);
} // validation for changing password

//export functions to use
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.changePassValidation = changePassValidation;