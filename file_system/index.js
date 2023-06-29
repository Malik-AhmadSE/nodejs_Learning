// const fs=require('fs/promises');
const { readdir } = require('fs').promises;
const { rmdir } = require('fs').promises;
const { writeFile,readFile} = require('fs').promises;
const { appendFile } = require('fs').promises;
const { copyFile } = require('fs').promises;
const { stat } = require('fs').promises;
const path=require('path');
// console.log(file);

// making directory using path module and file module

    // let path_name=path.join(__dirname,'demo');
    // console.log(path_name)
    // fs.mkdir(path_name)
    // .then(console.log('folder created'))
    // .catch(error =>Console.log('error'))

// add extra concept

// recursive agar koie path main aysa folder name ho jo na ho usay neglect kar dayta hay
    // let path_name=path.join(__dirname,'demo');
    // console.log(path_name)
    // fs.mkdir(path_name,{recursive:true})
    // .then(console.log('folder created'))
    // .catch(error =>Console.log('error'))


/////// reading dir 

// let path_name = path.join(__dirname, 'demo');
// console.log(path_name);
// (async () => {
// try {
//    const files = await readdir(path_name)
//   .catch(error => console.log(error))
//   for (const file of files) {
//     console.log(file);
//   }
// } catch (err) {
//   console.error(err);
// }})();


///////// Remove directory Note: directory must be empty

// (async () => {
// try {
//     await rmdir(path_name)  
//     console.log('removed');
// } catch (err) {
//   console.error(err);
// }})();


//////////// write file 

// (async ()=>{
//     try{
//         await writeFile('readme.txt','hello first file')
//     }catch(error){
//         console.log(error);
//     }
// })();

/////// read file


// (async ()=>{
//     try{
//     const data = await readFile('readme.txt','utf-8');
//     console.log(data)
//     }catch(error){
//         console.log(error);
//     }
// })();


/////// append inside file 


// (async ()=>{
//     try{
//         await appendFile('readme.txt','\nsecond line')
//     }catch(error){
//         console.log(error);
//     }
// })();

////////// copy file 

// (async ()=>{
//     try{
//         await copyFile('readme.txt','..\\info.txt')
//     }catch(error){
//         console.log(error);
//     }
// })();

///////// get file information


// (async ()=>{
//     try{
//         const data=await stat('readme.txt')
//         console.log(data)
//     }catch(error){
//         console.log(error);
//     }
// })();