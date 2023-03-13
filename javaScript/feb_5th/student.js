let two_arr=[[1,1,1],[1,1,0],[1,0,0]];

for(let i=0; i<3;i++){
    for(let j=0;j<3;j++){
        if(i+j<3)
        {
        document.write(1);
        }
        else{
            document.write(0);
        }
    }
    document.write("<br>");
}
document.write("<br>");

/*0*0       0,1
***   1,0 1,1 1,2
0*0       2,1*/



for(let i=0; i<3; i++)
{
    for(let j=0;j<3;j++){
        if(i==1 || j==1)
        {
            document.write("*");
        }
        else{
            document.write(0);
        }
    }
    document.write("<br>");
}