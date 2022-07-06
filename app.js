//next line updates changes live as soon as user inputs changes
window.setInterval(()=>{

    //next line determines that we take data from the html-Form 
    var myForm = document.getElementById('myForm');



//next lines sets up the canvas
    var canvas = document.getElementById('mC');
    var ctx = canvas.getContext('2d');

    //next lines inputs the user's form data such as width and height
    canvas.width = myForm.elements['input-width'].value;
    canvas.height = myForm.elements['input-height'].value;


   

// default circle color is black
// but most probably user will make changes them
    var changeColor = myForm.elements['input-circle-color'].value;
    var circleColor = "" + changeColor;
    


//next goes location of the circle in the canvas, on x and y axis
var x = myForm.elements['input-circle-x'].value;
var y = myForm.elements['input-circle-y'].value;

//next goes size of the circle, by setting its respective radius
var radius = myForm.elements['input-circle-radius'].value;

//next goes actually if the circle appears on the canvas 
if(document.getElementById("setCircle").checked === true){
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle =circleColor;
    ctx.fill();
}; // here goes end of if.. statement  

}, 1000);  //here goes the end of the Interval, line 2
