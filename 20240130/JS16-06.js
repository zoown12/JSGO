const person = {
    firstname: 'KIM',
    lastname : 'GODI',


    get fullname(){
        return '{this.firstname} {this.lastname}';
    },

    set fullname(name){
        [this.firstname, this.lastname]  = name.split(' ');

    }
};

console.log(person.firstname + '  ' + person.lastname);

person.fullname = 'KIM GODI';
console.log(person);

console.log(person.fullname);

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstname');
console.log(descriptor);

descriptor  = Object.getOwnPropertyDescriptor(person, 'fullname');
console.log(descriptor);