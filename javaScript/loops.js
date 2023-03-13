let i=0;

for(i=0;i<5;i++)
{
    document.write("<br>value of i "+i);
    if(i==2)
    break;
}

i=0;
while(i<5)
{
    document.write("<br><b> while again: i is: "+i+"</b>");
    i++;
}

do{
    document.write("<br> inside do-while");
    i++;
}while(i<5)


// java script is both object oriented and procedure oriented
// in js to initialize the objects we should use constructors
//in js constructor name need not to be same as that of the class nd can use only 1 constructor. constructor overloading is not possible

class vehicle{
    constructor(wheel, brand,mileage, color){
        this.wheel=wheel ;
        this.brand= brand;
        this.mileage= mileage;
        this.color=color;
    }
    display(){
        document.write("<br> brand is "+this.brand+" color is : "+this.color);
    }//member function
}
let scooter= new vehicle(2, 'bajaj', '30kmpl', 'black');
scooter.display();
let maruti=new vehicle(4, ' maruti alto', '40kmpl',  'blue');
maruti.display();
let fname= new String('sowmya');
console.log(fname);

class jeep extends vehicle{
    constructor(speed)
    {
        super();//constructor of parent
        this.speed=speed;
    }
    display()
    {
        super.display();//refer to the parent
        document.write(" speed is : "+this.speed);
    }
}
try{
let thar =new jeep('120kmph');
thar.disp();
}
catch(error)
{
    document.write("<br>"+error);
}
let bmw= new jeep('220kmph');
bmw.display();

var person={name:'sowmya', age: 24, nation:'Indian'} //json java script object notation
console.log(person);
console.log(person.name);
document.write("<br>" + person);
document.write(" age is "+person.age);
document.write(JSON.stringify(person));


