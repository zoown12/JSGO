function add(x,y){
    return x+y; 
}  // 함수 선언문

var result =  add(4,5);
console.log(result);

var add2 = function(x,y){
    return x+y;
}; // 함수 표현식

var result2 = add2(4,7);
console.log(result2);