noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
diference=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  poseNet=ml5.poseNet(video,plumon);
  poseNet.on("pose",vaso)
    
     
     
  }
  
  function plumon(){
console.log("cinta")
}
  
function vaso(results) {
if(results.length>0) {
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
diference=floor(leftWristX-rightWristX);
}
}

  function draw() {
  background('#969A97');
  
    document.getElementById("square_side").innerHTML = "El alto y ancho del cuadrado será: " +diference +"px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,diference);
  }
  