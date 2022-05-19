status = "";
object = [];

function start()
{
 canvas =  createCanvas(500,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(500, 300);

}

function start()
{
    object_detect = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    name = document.getElementById("object_name").value;
}

function modelloaded()
{
    console.log("modelloaded");
    status = true;
}

function draw()
{
    image(video, 0, 0, 500, 300);
}