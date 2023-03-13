let g=0;//global variable
function increment(){
    g+=2;
    console.log("g is: "+g);
    let f=1;
    console.log("value of f: "+f);
}
increment();
increment();
g++; 
console.log("updated value: "+g);
//console.log("updated value: "+f);

//hoisting
sum=a+b;
console.log(sum); //NaN, infinity, undefined
var a=10, b=3;

var c, d , sub; //declaration
c=1,d=3;        //initialization
sub=c+d;
console.log(sub);

//self invoking function

