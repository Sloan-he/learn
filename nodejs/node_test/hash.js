const crypto = require('crypto');
const hash = crypto.createHash('sha1');
 
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));