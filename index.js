const terminalInput = process.argv;
const path = require('path')
const fs = require('fs')
const {log} = require('console')
const [, , command, folderName, fileName, fileValue] = terminalInput

console.log(command,folderName,fileName,fileValue);

switch (command) {
    case 'addFolder':{
      const   isExistFolder = fs.existsSync('node')
      if (isExistFolder){
        log('this folder is already exist . try another')
      } else {

          fs.mkdir('node', (err)=>{
           if(err){
               log('error to make directory',err)
           }
          })
      }
    }
        

}
