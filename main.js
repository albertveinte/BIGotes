noseX = 0;
noseY = 0;

function preload(){//precarga de cosas

}

function setup(){//configuraciones 
    canvas = createCanvas(250,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("posicion x = "+ results[0].pose.nose.x);
    console.log("posicion y = "+ results[0].pose.nose.y);
}
}

function draw(){//dibujos
image(video, 0, 0, 300, 300);
}

function tomar_foto(){
    save("bigote100%real.png");
}

function modelLoaded(){
    console.log("poseNet inicializado");
}