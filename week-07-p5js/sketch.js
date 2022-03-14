let circleY =[];
let ySpeed =[];

function setup() {
  createCanvas(500, 500);
  for(let i = 0; i < 100; i++) {
    circleY[i] = random(height);
    ySpeed[i]= random(.5,2);


  }
}

function draw() {
  background(75);

  for (let i = 0; i < circleY.length; i++) {
    let circleX = width * i /circleY.length;
    circle(circleX, circleY[i], 10);

    circleY[i] += ySpeed[i];

    if (circleY[i] > height){
      circleY[i] = 0;
    }


  }

}
