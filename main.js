function setup(){
    canvas=createCanvas(800,400);
    canvas.position(110,250);
    video= createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){    
    rect(50,50,600,10);
    rect(45,50,10,250);
    rect(45,300,600,10);
    rect(650,50,10,250);
    circle(50,50,50);
    circle(650,50,50);
    circle(50,300,50);
    circle(650,300,50);
    image("1.png",200,200,200,200);
}
function apply(){
    tint_color=document.getElementById("color_name").value ;
}
function take_snapshot(){
    save("image.png");
}