const { ifError } = require("assert");
const { error } = require("console");

function serverError(err, req,res, next) {
    if(err){
        return res.status(500).json({
            error: true,
            message: err.message
        })
    }
}



module.exports = serverError