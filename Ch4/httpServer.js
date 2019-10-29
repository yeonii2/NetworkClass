var http = require('http');

//1. http servr 구동 방식 1
// var server = http.createServer();

// server.on('request', function(request, response){
//     response.write('Welcome');
//     response.end(' to my server'); //클라이언트가 언제 끝나는지 알게 됨
// });

// server.on('listening', function(){
//     console.log('8080 포트에서 대기중');
// });

// server.listen(8080); //listening 이벤트가 실행하면 호출 됨

//2. http server 구동방법 2 //구동방법 1과 동일하다
// var server = http.createServer(function(req, res){
//     res.write('Welcome');
//     res.end(' to my server'); 
// }).listen(8080, function(){
//     console.log('8080 포트에서 대기중');
// });

//3. request, response 살펴보기
// var server = http.createServer(function(req, res){
//     console.log(req.headers);
//     console.log(req.method);
//     console.log(req.url);
    
//     res.statusCode=200;
//     res.statusMessage='Okey';
//     res.setHeader('Content-Type','text/html');
//     resizeTo.writeHead(200, "OKOK",{'content-Type':'text/plain','myName':'hayeon'})
//     res.end("<h1>Hello World<h1>");
// }).listen(8080, function(){
//     console.log('8080 포트에서 대기중');
// });

//4. html 코드를 응답으로 보내기
// var server = http.createServer(function(req, res){
//     res.end(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Document</title>
//     </head>
//     <body>
//         <h1>안녕하세요</h1>
//         <img src="https://pbs.twimg.com/media/DsFkB6tVsAE_H0r.jpg" alt="">
//     </body>
//     </html>`);
// }).listen(8080, function(){
//     console.log('8080포트에서 대기중');
// })

//5. 파일을 응답으로 보내기
var fs=require('fs');
var server = http.createServer(function(req, res){
    fs.readFile('./index.html',function(err, data){
        if(err){
            console.log(err);
            return;
        }
        else{
            res.end(data);
        }
    });

}).listen(8080, function(){
    console.log('8080포트에서 대기중');
})