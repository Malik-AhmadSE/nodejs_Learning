const http=require('http');
const fs=require('fs');
const path=require('path');
const server=http.createServer((req,res)=>{
    res.writeHead(200,'besk of luck',{'Content-Type':'text/html'})
    // if(req.url === '/'){
    //     res.end("<h1>Home Page</h1>")
    // }else if (req.url === '/about'){
    //     res.end("<h1>About Page</h1>") 
    // }
    // else{
    //     res.end("<h1>404 Error Page not found</h1>")
    // }
    //// serving html pages ////////
    let pathfile;
    if(req.url === '/'){
        pathfile=path.join(__dirname,'home.html')
        fs.readFile(pathfile,'utf-8',(error,data)=>{
            if (error) throw error;
            res.end(data);
        })
        
    }else if (req.url === '/about'){
        pathfile=path.join(__dirname,'about.html')
        fs.readFile(pathfile,'utf-8',(error,data)=>{
            if (error) throw error;
            res.end(data);
        }) 
    }
    else{
        res.end("<h1>404 Error Page not found</h1>")
    }
})
const PORT=process.env.port || 8000;
const HOST='localhost';
server.listen(PORT,HOST,()=>{
    console.log(`server running at http://localhost:${PORT}`);

})