const { log } = require('console')
const event = require('events')
const eventEmiter = new event()
const fs = require('fs');
const path = require('path');

// todo declare a event(fetch post)
const fetchPost = (post)=>{
   eventEmiter.on(post, (callback)=>{
   fetch(`https://jsonplaceholder.typicode.com/posts`).then((res)=> res.json()).then((data)=> callback(data))
})
const targetPath = path.join(__dirname, 'post.json')
eventEmiter.emit(post, (data)=>{
      fs.writeFile(targetPath, JSON.stringify(data), (err)=>{
            if(err){
                return log('error from write post data')
            }
         })
})
     return targetPath

}


module.exports = {fetchPost}
// // todo declare a event(fetch comments)
// eventEmiter.on('fetchPost', (callback)=>{
//    fetch(`https://jsonplaceholder.typicode.com/comments`).then((res)=> res.json()).then((data)=> callback(data))
// })