// const terminalInput = process.argv;
// const path = require('path')
// const fs = require('fs')
// const {log} = require('console');
// const { makeAddFolder } = require('./enjine');
// const [, , command, folderName, fileName, fileValue] = terminalInput


// switch (command) {
//     case 'addFolder':{
//      makeAddFolder(folderName)
//       break
//     }
//     case 'addFile':{

//    const outTargetedPath = path.join(__dirname, folderName, `${fileName}.txt`)
//        const   isExistFile = fs.existsSync(outTargetedPath)

//        if(isExistFile){
//      return   log('the file is already have , try another')
//        }else{

      

//       fs.writeFile(outTargetedPath, fileValue, (err)=>{
//         if(err){
//           log('error to make file')
//         }else{
//           log(`${fileName}.txt created`)
//         }
//       })

//        }

    


//         break
//     }
//     case 'readFile':{
//           const targetPath = path.join(__dirname, folderName, `${fileName}.txt`)
//           const   isExistFile = fs.existsSync(targetPath)
//           if(isExistFile){
//               fs.readFile(targetPath, 'utf-8', (err, data)=>{
//                 if(err){
//                 return  log('error to read file', err)
//                 }else{
//                   log(data)
//                 }
//               })
//           } else {
//             log('this file fill is not exist in this directory ')
//           }
//       break;
//     }
//     case 'deleteFolder':{
//        const outTargetedPath = path.join(__dirname, folderName)
//        const   isExistFile = fs.existsSync(outTargetedPath)
//        if (isExistFile  ){
//       fs.rm(outTargetedPath , {recursive : true, force : true} , (err)=>{
//         if(err){

//           log('failed to delete folder',)
//         }else {


//             log(`${folderName} deleted`)

//         }
//       })
   
    
//        }

//       break;
//     }
//     case 'deleteFile': {
//          const outTargetedPath = path.join(__dirname, folderName, `${fileName}.txt`)
//        const   isExistFile = fs.existsSync(outTargetedPath)
//        if (isExistFile  ){
//       fs.unlink(outTargetedPath , (err)=>{
//         if(err){

//           log('failed to delete folder',)
//         }else {


//             log(`${fileName} deleted`)

//         }
//       })
   
    
//        }
    

//       break;
//     }
        

// }


// ! url
// const {log} = require('console')
// const {URL} = require('url')
// const ourUrl = new URL('http://localhost:300/login?user=mern2303&mahmud=ke#about') 
// ourUrl.searchParams.append('batch', 'mern202')
// ourUrl.searchParams.delete('user')
// log(ourUrl.searchParams)
// log(ourUrl.searchParams.has('batch'))
// getall method ta dekhte hobe

// ! HTTP
const { log } = require('console')
const url = require('url')
const http = require('http');
const fs = require('fs');
const path = require('path');
const event = require('events');
const { fetchPost } = require('./event');
const eventEmiter = new event()




const server = http.createServer((req, res) => {
  if(req.url == '/post'){
   const path = fetchPost('post')
   fs.readFile(path, 'utf-8', (err,data)=>{
    if(err){
        return log(err)
    }
   res.end(data)
   })
 
    //   eventEmiter.emit('fetchPost', (data)=>{
    //      const targetPath = path.join(__dirname, 'post.json')
    //      fs.writeFile(targetPath, JSON.stringify(data), (err)=>{
    //         if(err){
    //             return log('error from write post data')
    //         }
    //      })
    //      fs.readFile(targetPath, 'utf-8', (err, data)=>{
    //         res.end(data)
    //      })
    //   })
  }
});

server.listen(4000, () => {
    console.log(`Server is running at: http://localhost:4000`);
});