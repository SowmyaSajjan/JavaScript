let array=[8,9,12,3,2,5];
for (var i = array.length - 1; i >= 0; i--){
    array.push(array[i]);
 }
 
 document.write(array);

 function display()
 {
    alert("button is clicked");
    document.getElementById('div-container').innerHTML="<h1>Clicked</h1>";
    document.getElementById('div-container').style.backgroundColor='yellow';
    document.getElementById('para').style.visibility='hidden';
 }
 function change()
 {
    document.getElementById('para').style.color='red';
 }