var fs = require('fs');

fs.writeFileSync('./sync.txt', '2학년 1반 20번 홍하연'); //동기

try{
    var data = fs.readFileSync('./sync.txt','utf8');
    console.log(data);
}catch(error){
    console.log('fs.readFileSync Error', error);
}