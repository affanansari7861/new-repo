const http = require(`http`);

const server = http.createServer(function(req,res){
   if(req.url==="/"){
    res.end(`welcome to our homepage`)
   }else if(req.url==="/about"){
    res.end('welcome to our about page')
   }else{res.end(`<h1>oops!</h1>
   <p>we can't to seem to find your page</p>
   <a href="/">back to home</a>
   `)}
})

server.listen(5000)