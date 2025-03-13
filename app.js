const express = require("express");
const app = express()
const cors = require("cors")
const port = 3000;
const postrouter = require("./routers/postsRouter")
const notFound = require("./middleware/notFound")
const errorHandler = require("./middleware/errorHandler")

app.use(express.static('public'));
app.use(express.json());

app.use(cors({
    origin : 'http://localhost:5173' 
}))

app.use('/api/posts', postrouter)


app.use(errorHandler)
app.use(notFound);
app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`);  
     
})  