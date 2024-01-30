var add = (function() {
    var a = 10;
    return function (x,y){
        return x+y+a;
    };
}());  // 더하기

console.log(add(1,2));

var sub = (function(){
    var b = 10;
    return function(x,y){
        return b-(x+y);
    }
}());

console.log(sub(3,4));

var mul = (function(){
    var c = 3;
    return function(x,y){
        return c * (x+y);
    }
}());

console.log(mul(1,2));

var div = (function(){
    var d = 2;
    return function(x,y){
        return (x+y) / d;
    }
}());
console.log(div(3,3));