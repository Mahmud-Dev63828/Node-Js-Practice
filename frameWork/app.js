const { log } = require("console");
const http = require("http");

class App {
    constructor() {
     this.routes = [];
    this.middleware = [];
    }
    
  //middleware
  use(middleWarefn) {
    this.middleware.push(middleWarefn);
  }
// get method
  get(path, handelerfn) {
    this.routes.push({ method: "GET", path, handelerfn });
  }
//   post
  post(path, handelerfn) {
    this.routes.push({ method: "POST", path, handelerfn });
  }
//   listen
 ourListen(port, callback){
   const server = http.createServer((req, res)=>{
    //  middleware
    for(const mw of this.middleware ){
      return  new Promise((resolve)=>{
           mw(req, res, ()=>{
            resolve()
           })
        })
    }
    })

    server.listen(port,callback)
 }
}


module.exports = App