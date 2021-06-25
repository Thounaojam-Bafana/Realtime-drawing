noseX = 0;
noseY = 0;
difference = 0;
leftWristX=0;
rightWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(100,150);
    canvas = createCanvas(550,500);
    canvas.position(750,120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#ccccff");
    fill(29,12,09);
    stroke(29,12,09);
    square(noseX, noseY, difference);
    document.getElementById("square_sides").innerHTML = "Width and Height of the square is " + difference;
}
function modelLoaded(){
    console.log("Posenet is initialised!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + noseX);
        console.log("Nose Y = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("difference = "+ difference);
    }
}
