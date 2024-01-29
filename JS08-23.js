var string  = "HELLO WORLD";
var search  = "L";
var count = 0;

for(var i = 0; i<string.length; i++){
    if(string[i] !== search)continue;
    count++;
}

console.log(count);

const regexp = new RegExp(search,'g');
console.log(string.match(regexp).length);