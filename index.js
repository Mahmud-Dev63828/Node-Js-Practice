const terminalInput = process.argv;
const path = require('path')
const fs = require('fs')
const {log} = require('console')
const [, , command, folderName, fileName, fileValue] = terminalInput


switch (command) {
    case 'addFolder':{
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
      break
    }
    case 'addFile':{

   const outTargetedPath = path.join(__dirname, folderName, `${fileName}.txt`)
       const   isExistFile = fs.existsSync(outTargetedPath)

       if(isExistFile){
     return   log('the file is already have , try another')
       }else{

      

      fs.writeFile(outTargetedPath, fileValue, (err)=>{
        if(err){
          log('error to make file')
        }else{
          log(`${fileName}.txt created`)
        }
      })

       }

    


        break
    }
    case 'readFile':{
          const targetPath = path.join(__dirname, folderName, `${fileName}.txt`)
          const   isExistFile = fs.existsSync(targetPath)
          if(isExistFile){
              fs.readFile(targetPath, 'utf-8', (err, data)=>{
                if(err){
                return  log('error to read file', err)
                }else{
                  log(data)
                }
              })
          } else {
            log('this file fill is not exist in this directory ')
          }
      break;
    }
    case 'deleteFolder':{
       const outTargetedPath = path.join(__dirname, folderName)
       const   isExistFile = fs.existsSync(outTargetedPath)
       if (isExistFile  ){
      fs.rm(outTargetedPath , {recursive : true, force : true} , (err)=>{
        if(err){

          log('failed to delete folder',)
        }else {


            log(`${folderName} deleted`)

        }
      })
   
    
       }

      break;
    }
    case 'deleteFile': {
         const outTargetedPath = path.join(__dirname, folderName, `${fileName}.txt`)
       const   isExistFile = fs.existsSync(outTargetedPath)
       if (isExistFile  ){
      fs.unlink(outTargetedPath , (err)=>{
        if(err){

          log('failed to delete folder',)
        }else {


            log(`${fileName} deleted`)

        }
      })
   
    
       }
    

      break;
    }
        

}
