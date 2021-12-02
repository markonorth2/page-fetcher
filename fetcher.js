const request = require("request");
const fs = require("fs");
let arg = process.argv.slice(2);
let info;
  request(arg[0], (error, response, body) => {
  console.log("error:", error); 
  console.log("statusCode:", response && response.statusCode); 
  console.log("body:", body); 
  info = error + response + response.statusCode + body;
  fs.writeFile(arg[1], info, err => {
    if (err) {
      console.error(err)
      return
    }
    
  })
});