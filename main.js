noseX = 0;
noseY = 0;
function preload() {
  clown_nose = loadImage(
    "https://i.postimg.cc/KYH4xQ6Z/pngtree-black-moustache-png-image-6403112.png"
  );
}
function Snapshot() {
  save("Joker_filter.png");
}
function setup() {
  canvas = createCanvas(400, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  posNet = ml5.poseNet(video, modelLoaded);
  posNet.on("pose", gotPoses);
}

function draw() {
  image(video, 0, 0, 400, 300);
  // fill(255, 0, 0);
  // stroke(255, 0, 0);
  // circle(noseX, noseY, 20);
  image(clown_nose, noseX, noseY, 50, 50);
}

function modelLoaded() {
  console.log("Posenet Is Ready LOL!!");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x +20;
    noseY = results[0].pose.nose.y -10;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
}
