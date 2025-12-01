const { error } = require("console");

function notFound(req,res, next) {
     return res.status(404).json({
       error: true,
       message: 'Endpoint not Found'
     })   
}

module.exports = notFound