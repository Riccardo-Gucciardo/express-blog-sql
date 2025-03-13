function errorHandler(error,req,res,next){
    res.status(500)
        
        res.json(
            {
            error: "internal server error",
            message: error.message
            }
        );
}

module.exports= errorHandler