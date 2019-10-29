function add(a,b, callback){ //3, 5
    setTimeout(() => { //4
        callback(a+b);
    }, 1000);
}

console.log('before'); //2
add(1, 2, function(result){ //8
    console.log(result); //9
});
console.log('after'); //6

//이벤트 루프 1, 7