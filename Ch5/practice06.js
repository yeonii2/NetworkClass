// // querystring으로 넘어온 두 값(start, end)을 활용하여 두 값 사이의 합계 구하기
// var http = require('http');
// var url = require('url');
// var querystring = require('querystring');

// var server = http.createServer(function(req, res){
//   const parsedURL = url.parse(req.url);
//   console.log('parsedURL.query : ', parsedURL.query);
//   const query = querystring.parse(parsedURL.query);
//   console.log('query : ', query);

//   // start와 end에 합계를 구할 범위를 저장한다.
//   let start = parseInt(query.start);
//   let end = parseInt(query.end);
//   console.log(`start : ${start}, end : ${end}`);

//   if( !start || !end){
//     res.statusCode = 404;
//     res.end('Wrong Parameter');
//   }else{
//     var sum=0;
//     for(var i=start;i<=end;i++){
//       sum+=i;
//     }
//    res.end(`<h1>SUM : ${sum}</h1>`);
//   }
// }).listen(8080, function(){
//   console.log('8080 포트에서 대기중');
// });

/ post 방식으로 넘어온 두 값(start, end)을 활용하여 두 값 사이의 합계 구하기
var http = require('http');
var querystring=require('querystring');

var server = http.createServer(function(req, res){
  if(req.method.toLocaleLowerCase()==='post'){
    var body='';

    req.on('data',function(chunk){
      body+=chunk;
    });

    req.on('end',function(){
      var data=querystring.parse(body);
      let start = parseInt(data.start);
      let end = parseInt(data.end);
      console.log(`start : ${start}, end : ${end}`);

      if( !start || !end){
        res.statusCode = 404;
        res.end('Wrong Parameter');
      }else{
        var sum=0;
        for(var i=start;i<=end;i++){
            sum+=i;
        }
        res.end(`<h1>sum = ${sum}</h1>`);
      }
      res.writeHead(302, {'Location' : '/'});
      res.end();
    });
  }
}).listen(8080, function(){
  console.log('8080 포트에서 대기중');
});