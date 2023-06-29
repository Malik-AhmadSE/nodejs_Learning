const fs= require('fs');
const path=require('path');

////syncronized mkdir

const path_name=path.join(__dirname,'demo');

// fs.mkdirSync(path_name);

/// syncronized readdir

// const data =fs.readdirSync(path_name);
// for (const datas of data){
//     console.log(datas);
// }


//// rmdir syncronized

// fs.rmdirSync(path_name);

/// writeFile syncronized

// fs.writeFileSync('index.txt','hello index.js');

// readFile syncronized

// const data = fs.readFileSync('index.txt','utf-8');
// console.log(data);

// copyFile syncronized

// fs.copyFileSync('index.txt','javascript.txt');

// append file 

// fs.appendFileSync('index.txt','hello sec line');

// stat 

const data=fs.statSync(__dirname);
console.log(data);