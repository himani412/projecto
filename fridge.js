function preload(){
    img = loadImage('fridge.jpg');
}
function setup(){
    canvas= createCanvas(600,400);
    canvas.center();
    objectDetecter = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects ";

}
function modelLoaded(){
    console.log("ModelLoaded!");
    status= true;
    
}
function gotresult(error,results){
    if(error){  
        console.log(error);
    }
    console.log(results);
    objects=results;

}