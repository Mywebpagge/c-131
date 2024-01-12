function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
img = "";
status = ""; 
objects = [];

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}


function preload(){
    img = loadImage('dog_cat.jpg')
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image, video, (img, 0, 0, 380, 380);
    if(status !="")
    
    {
        r = random(225);
        g = random(255);
        b = random(225);

        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + object.length;

            fill(r,g,b);
    percent =floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

    fill(r,g,b);
    text("Cat",320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320);

        }
    
    
    }
}