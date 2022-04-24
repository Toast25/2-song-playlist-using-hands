mus1="";
mus2="";

left_x="";
left_y="";

right_x="";
right_y="";
function preload(){
    mus1="Childrens-100KidsSongs-ItsyBitsySpider1.mp3";
    mus2="Baby Shark.mp3";
}
function setup() {
    canvas = createCanvas(400,400);
  canvas.center();

  video= createCapture(VIDEO);
  video.hide();

  movements=ml5.poseNet(video, modeloaded);
  movements.on("pose", got_results)
}
function draw() {
    image(video,0,0,400,400);
}
function modeloaded(){
    console.log("The Ma=odel Has Been Loaded");
}
function got_results(results) {
    if (results.length>0) {
        console.log(results);
        left_x=results[0].pose.leftWrist.x;
        left_y=results[0].pose.leftWrist.y;

        right_x=results[0].pose.rightWrist.x;
        right_y=results[0].pose.rightWrist.y;
    }
}