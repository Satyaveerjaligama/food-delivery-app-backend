const validateSchema = (schema) =>async(req, res, next) => {
    try {
        await schema.validate(req.body, { abortEarly : true});
        next();
    } catch(err) {
        res.status(400).json({error: err.errors});
    }
}

module.exports = validateSchema;