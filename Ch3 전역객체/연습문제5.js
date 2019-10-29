//practice.txt 파일에 "This file is a practice file."을 기록하고, 파일의 내용을 읽어서 콘솔에 출력하시오.
var fs = require('fs');

fs.writeFile('./practice.txt','This file is a practice file.', function(err){
    fs.readFile('./practice.txt', 'utf8', function(err, data){
        console.log(data);
   });
});

//2. 현재 디렉토리에 있는 확장자가 '.txt'인 파일의 이름들만 콘솔에 출력하시오. (path 모듈 활용)
var path = require('path');

fs.readdir('./', function(err, files){
    for(var i in files){
        if(path.extname(files[i]) == '.txt')
            console.log(files[i]);
    }
});