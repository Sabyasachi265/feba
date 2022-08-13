function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background('#054DFE');
}

function modelLoaded(){
    console.log("Posenet is working");
}

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
    }
}