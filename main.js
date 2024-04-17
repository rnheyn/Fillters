function setup(){
    canvas=createCanvas(600,600)
    canvas.position(205,207)
    video=createCapture(VIDEO)
    video.hide()
    tintColor=""
}
function draw() {
    image(video,100,70,440,440)
    tint(tintColor)
    
    fill("grey")
    rect(35,20,500,25)
    fill("grey")
    rect(546,20,25,500)
    fill("Purple")
    circle(546,30,50)
    fill("grey")
    rect(35,520,500,25)
    fill("Purple")
    circle(546,520,50)
    fill("grey")
    rect(35,20,25,500)
    fill("Purple")
    circle(31,520,50)
    fill("Purple")
    circle(31,30,50)
}
function filter_tint() {
    tintColor=document.getElementById("colorname").value
}
function take_snapshot() {
    save("me.png")
}