const fs=require('fs');
const path=require('path');

//mkdir 
// const path_name=path.join(__dirname,'demo');
// fs.mkdir(path_name,(error)=>{
//   if (error) throw error ;
//   console.log('created directory....');
// })

//// mkdir using recursive 

// const path_name=path.join(__dirname,'demo','test');
// fs.mkdir(path_name,{recursive:true},(error)=>{
//   if (error) throw error ;
//   console.log('created directory....');
// })

///readdir

// const path_name=path.join(__dirname,);
// fs.readdir(path_name,(error,data)=>{
//   if (error) throw error ;
//   for (const datas of data){
//     console.log(datas)}
// })


//rmdir

// const path_name=path.join(__dirname,'demo','test');

// fs.rmdir(path_name,(error)=>{
//     if (error) throw error;
//     console.log('removed');
// })

/// writeFile

// const path_name=path.join(__dirname,'demo','test');

// fs.writeFile(`${path_name}\\readme.txt`,'hello world',(error)=>{
//     if (error) throw error;
// })

// readFile

// const path_name=path.join(__dirname,'demo','test');

// fs.readFile(`${path_name}\\readme.txt`,'utf-8',(error,data)=>{
//     if (error) throw error;
//     console.log(data);
// })

//append file 

// const path_name=path.join(__dirname,'demo','test');

// fs.appendFile(`${path_name}\\readme.txt`,'\nfor new line',(error)=>{
//     if (error) throw error;
//     console.log('append')
// })

//copyfile
// const path_name=path.join(__dirname,'demo','test');

// fs.copyFile(`${path_name}\\readme.txt`,'./info.txt',(error)=>{
//     if (error) throw error;
// })

// stat

const path_name=path.join(__dirname,'demo','test');

fs.stat(path_name,(error,data)=>{
    if (error) throw error;
    console.log(data);
})