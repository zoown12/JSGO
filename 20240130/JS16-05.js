//data property 
const person={
    name : 'LEE',
};

person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));

console.log(Object.getOwnPropertyNames(person));

console.log(Object.getOwnPropertySymbols(person));