window.setInterval(()=>{
    var myForm = document.getElementById('myForm');
    // var text = document.getElementById('mc');



    var canvas = document.getElementById('mC');
    var ctx = canvas.getContext('2d');

    canvas.width = myForm.elements['input-width'].value;
    canvas.height = myForm.elements['input-height'].value;


   


    var changeColor = myForm.elements['input-circle-color'].value;
    var circleColor = "" + changeColor;
    



var x = myForm.elements['input-circle-x'].value;
var y = myForm.elements['input-circle-y'].value;
var radius = myForm.elements['input-circle-radius'].value;

 
if(document.getElementById("setCircle").checked === true){
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle =circleColor;
    ctx.fill();
}


    
    

    


}, 1000);