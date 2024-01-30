function add(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('인수는 모두 같은 값을 가져야됩니다.');
    }

    return x+y;
}

console.log(add(2,3));
//console.log(add(2));
//console.log(add('a','b'));