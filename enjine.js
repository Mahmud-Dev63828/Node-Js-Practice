const path = require('path')
const fs = require('fs')
const {log} = require('console')

const makeAddFolder = (folderName)=>{
       const   isExistFolder = fs.existsSync(folderName)
          if (isExistFolder){
            log('this folder is already exist . try another')
          } else {
    
              fs.mkdir(folderName, (err)=>{
               if(err){
                   log('error to make directory',err)
               }
              })
          }
}

module.exports = {makeAddFolder}