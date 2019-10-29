var path = require('path');

console.log(__dirname); //디렉토리 경로
console.log(__filename); //파일 경로

console.log(path.dirname(__filename)); //디렉토리 경로
console.log(path.extname(__filename)); //확장자
console.log(path.basename(__filename)); //파일 이름
console.log(path.parse(__filename)); //분석한 내용 객체로 변환

var newPath = path.format({ root: 'C:\\',
dir: 'C:\\Users\\02101\\Desktop\\공부\\수업\\네트워크',
base: 'path.js',
ext: '.js',
name: 'path' }); //경로를 합쳐줌
console.log(newPath);

var createPath = path.join(
    __dirname,
    path.sep,
    '..',
    'Ch2',
    path.sep,
    'index.html');
console.log(createPath);