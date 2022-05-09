const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end(`
        <h1>Welcome to my homepage</h1>
        <a href = '/about'>About us</a>
        `)
} else if(req.url === '/about'){
       res.end(`<p> Here is our short history </p>
       <a href = '/'> Back</a>
       `)
} else
    res.end(`
    <h1>Oops!</h1>
<p> We can't seem to find the page you're looking for</p>
<a href = '/'>Back Home</a>
`)    
})
server.listen(5000)