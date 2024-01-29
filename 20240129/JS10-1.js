var perosn = {
    name: 'KIM',
    sayHello :function(){
        console.log('Hello' + '${this.name}');
    }
}
console.log(perosn);
console.log(typeof perosn);

var person  ={
    FirstName : 'kim',
    LastName : 'Leed'
}

console.log(person);


var obj ={};
var key = 'hello';

obj[key] = 'world';

console.log(obj);