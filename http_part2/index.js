const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method)
    // res.setHeader('Content-Type','text/plaintext');
    res.writeHead(200,'besk of luck',{'Content-Type':'text/plaintext'})
    res.end('hello create server')
})
const PORT=process.env.port || 8000;
const HOST='localhost';
server.listen(PORT,HOST,()=>{
    console.log(`server running at http://localhost:${PORT}`);

})