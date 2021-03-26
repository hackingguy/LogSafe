const Joi = require('joi');


function customErrors(name,limit){
  return {
    'string.base': `${name} is invalid`,
    'string.empty': `${name} cannot be empty`,
    'string.min': `${name} must have ${limit} characters`,
    'string.invalid:': `${name} is invalid`,
    'any.required': `${name} is required`
  }
}
  

const validateLogin = Joi.object({
  email:Joi.string().email().min(5).max(40).required().messages(customErrors("Email",5)),
  password:Joi.string().min(6).max(50).required().messages(customErrors("Password",8))
});
  
const validateRegister = Joi.object({
  name:Joi.string().min(3).max(30).required().messages(customErrors("Name",3)),
  email:Joi.string().email().min(5).max(40).required().messages(customErrors("Email",5)),
  password:Joi.string().min(6).max(50).required().messages(customErrors("Password",8))
});

const validateEmail = Joi.object({
  email:Joi.string().email().min(5).max(40).required().messages(customErrors("Email",5))
})

module.exports = {
    validateLogin,
    validateRegister,
    validateEmail
}