/// creating server using http module 

const http=require('http');

const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plaintext');
    res.end('First server ');
});
const PORT=process.env.port || 8000;
const HOST='localhost';

server.listen(PORT,HOST,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});