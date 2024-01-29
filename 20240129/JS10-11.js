var circle  = {

    radius : 5,

    getDiameter : function (){
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());


var person = {

    name : 'KIM',

    getAge : function (){
        console.log("25");
    }
};

console.log(person.getAge());
console.log(person);