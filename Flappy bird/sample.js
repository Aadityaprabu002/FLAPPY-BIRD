var hit = false;
function setup(){
    createCanvas(500,500);
}
function draw() {
    background(0);
    fill(244);
    rect(200-50, 200-75, 100, 150);
    fill(255);
    circle(200,200,30);
    fill(255,0,0);
    circle(mouseX, mouseY, 100);

    hit = collideRectCircle(200-50, 200-75, 100, 150, mouseX, mouseY, 100);

    // Use vectors as input:
    // const mouse      = createVector(mouseX, mouseY);
    // const rect_start = createVector(200, 200);
    // const rect_size  = createVector(100, 150);
    // const radius     = 100;
    // hit = collideRectCircleVector(rect_start, rect_size, mouse, radius);

    stroke(hit ? color('red') : 0);
    print('colliding?', hit);
}