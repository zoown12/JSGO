var obj = {
    name : 'Lee',
    sayHi : function(){
        console.log('hello  ' + this.name);
    }
};

obj.sayHi();



var obj2 = {
    name : 'KIM',
    SAYHELLO() {
        console.log("HELLO TO MY WORLD" + this.name);
    }
};

obj2.SAYHELLO();

var str = 'MY NAME IS KIM';

console.log(str[0],str[2],str[3]);