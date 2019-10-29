var fs = require('fs');

fs.writeFile('./async.txt','2학년 1반 20번 홍하연',function(err) { //비동기
    if(err) console.log(err);
});

fs.readFile('./async.txt','utf8',function(err,data){
    if(err){
        console.log('fs.readFile Error');
    }else{
        console.log(data);
    }
});