const request = require('request');
const args = process.argv.slice(2);
const fs = require('fs')

const fetcher = function (url, path) {

  request(url, (error, response, body) => {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode);  
    fs.writeFile(path, body, err => {
      if (err) {
        console.error(err)
        return 
      }
    });
  });


}

fetcher(args[0], args[1]);

