process.addListener('exit', function(){ //addListener=on 기능이 완전히 똑같기 때문에 타이핑 수가 적은 on을 사용
    console.log('process.addListener');
});

process.on('exit', function(){
    console.log('process.on');
});

process.once('exit', function(){ //한 번만 실행됨
    console.log('process.once');
}); //다 하고 나서 더 이상 할 것이 없으면 exit가 실행되서 콘솔창에 글씨가 출력된다

process.emit('exit'); //callback은 호출한 한 곳에서만 실행이 되지만 이벤트는 emit을 하는 순간 여기저기에 있던 모든 이름이 같은 이벤트들이 다 실행된다

  