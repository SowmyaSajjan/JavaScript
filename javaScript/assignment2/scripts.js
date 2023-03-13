var arr=[12, 23, 34, 45, 56];
var abc=['sowmya', 1, 'priya', 4];
document.write(arr.concat(abc));


const fruits = [];
fruits.push("banana", "apple", "peach");
document.write("<br>"+fruits.length);
document.write("<br>"+fruits);
fruits.sort();
document.write("<br>"+fruits);


const array1 = ['a', 'b', 'c', 'd', 'e'];
document.write("<br>"+array1.copyWithin(0, 3, 4));
document.write("<br>"+array1.copyWithin(1, 3));


const arr1 = ['one', 'two', 'three'];
document.write("<br>"+'arr1:', arr1);

const reversed = arr1.reverse();
document.write("<br>"+'reversed:', reversed);


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
document.write("<br>"+animals.slice(2));
document.write("<br>"+animals.slice(2, 4));
const result = animals.filter(word=> word.length>5);
document.write("<br>"+result);
document.write("<br>"+animals.indexOf('bison'));
