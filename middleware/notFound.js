function notFound(req,res,next){
     res.status(404)
        
        res.json(
            {
            error: "Not Found",
            message: 'Post not found'
            }
        );
}

module.exports= notFound
