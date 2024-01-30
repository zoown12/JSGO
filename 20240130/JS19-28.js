function Person(name){
    this.name = name;
}

Person.prototype.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
};

const me = new Person('Lee');
const you = new Person('KIM');

me.sayHello();
you.sayHello();