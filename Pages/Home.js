let x = 10;
let y = 5;
let name1 = 'krishna';
let name2 = 'krishna';
console.log('this is java script - krishna');
//console.log('first compare '+ x == y);
console.log('both names are equal,name1=' +name1+ " name2="+name2 + 'value =' + name1 === name2);
console.log(typeof x);
console.log(typeof krishna);

let names = ['ravi','krishna','teja'];
for (x of names) {
    console.log(x);
}
//arrays
names.pop();
for (x of names) {
    console.log("after removing last " + x);
}
names.shift();
for (x of names) {
    console.log("after removing last " + x);
}
names.push('names');
names.splice(1,2,'extra','ganguly');
console.log(names);

let country = ['india','australia'];
console.log(names.concat(country));