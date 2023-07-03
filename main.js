img = ""
function setup(){
    canvas = createCanvas(400, 400)
    canvas.center()
    
}
function preload(){
   img = loadImage("Decoração-de-sala-pequena-bonita-e-sofisticada.webp")
}
function draw(){
    image(img, 0, 0, 400, 400)
}