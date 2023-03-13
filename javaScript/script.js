/*function display_age()
{

var age=prompt("enter your age");
        if(age>18){
        document.write("adult");
        }
        else{
            document.write("not adult");
        } 
}
display_age(); */

let names=['sowmya', 'sajjan', ' aparna', 'nikitha'];
let ac=['ac','cc', 10, 20]; // string is immutable similarly array also
console.log(names);
console.log(names[3]);
console.log(names.concat(ac));

function print()
{
    var a=parseInt(prompt("enter the value1"));
    var b=parseInt(prompt("enter the value2"));
    return (a+b);
}
//document.write(print());

names.fill(10,1,3);
document.write("<br>" + names);


//loops for while do while
for(let i=0;i<=names.length;i++)
{
    document.write("<br>element "+i+ " is "+names[i]);
}
names.forEach(function display(e){
    document.write("<br>"+e)
});

//call back is a function passed as a parameter to another function
/*function disp()
{
    //function body
}*/
//another way to write function in js
var output = (a,b) => {
    return(a+b);
}
document.write("<br>"+output(4,5));

document.write("<br> reversed " + names.reverse());
//document.write("<br>"+names.reverse());
names.filter((f) => {
    if(f>=100)
    document.write(f);
})

let double_names=names.map((n)=>
{
    return 2*n;
})
document.write("<br> Double "+ double_names);

// callback functions are anonymous functions

var arr=[12, 23, 34, 45, 56];
document.write("<br> shift method "+ arr.shift());
arr.push(90);
document.write("after push <br>"+arr);
document.write("<br> after pop "+ arr.pop());


