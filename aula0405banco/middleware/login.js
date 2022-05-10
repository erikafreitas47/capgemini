var jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
    try {
        const decode = jwt.verify(request.body.token, process.env.JWTKEY);
        request.usuario = decode
        next()
    } catch (error) {
        return response.status(401).send({message: "Falha na autenticação."});
    }
}