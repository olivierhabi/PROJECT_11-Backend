import Joi from "joi";
import "@babel/polyfill";

const validateMessage = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      phone: Joi.string()
        .trim()
        .min(3)
        .max(50)
        .required(),
      sender: Joi.string()
        .trim()
        .min(3)
        .max(50)
        .required(),
      message: Joi.string()
        .trim()
        .min(3)
        .max(1024)
        .required()
    });
    const { value, error } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res
        .status(400)
        .send({ status: 400, message: error.details[0].message });
    }
    next();
  }
};

export default validateMessage;
