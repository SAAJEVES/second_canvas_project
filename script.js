const myCanvas = document.querySelector("#my-canvas");

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

window.addEventListener("resize", function() {
  myCanvas.width = window.innerWidth;
  myCanvas.height= window.innerHeight;
  canvasWidth = myCanvas.width;
  /* rectanglesArray = [];
  canvasWidth = myCanvas.width;
  numberOfRect = 10;
  x = 0;
  init();
  handleRect();
  animate(); */
})


const mC = myCanvas.getContext("2d");
let rectanglesArray = [];
let x, y, width, height, dy, color;


// Initialize a class that would create the rectangles
class Rectangle {
  constructor() {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dy = dy;
  }

  draw() {
    mC.fillStyle = this.color;
    mC.fillRect(this.x, this.y, this.width, this. height)
    mC.fill();
    
  }

  update() {
    if (this.height <= -400) {
      this.dy = -this.dy;
    }
    if (this.height >= 0) {
      this.dy = -(this.dy);
    }
    this.height -= this.dy;
  }
}

// Determine the number of rectangles. The rectangles should all be equal and also equally distributed accross the width of the canvas
let canvasWidth = myCanvas.width;
let numberOfRect = 10;
x = 0;

const init = () => {
  for (let i = 0; i < numberOfRect; i++) {
    y = myCanvas.height;
    width = canvasWidth / numberOfRect;
    height = Math.random() * 5 - 15;
    dy = Math.random() * 10 +03;
    color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    rectanglesArray.push(new Rectangle());
    x += width;
  }
}
init();
// console.log(rectanglesArray);

const handleRect = () => {
  for (let i = 0; i < rectanglesArray.length; i++) {
    rectanglesArray[i].draw();
    rectanglesArray[i].update();
  }
}
handleRect();

const animate = () => {
  // mC.clearRect(0, 0, myCanvas.width, myCanvas.height);
  mC.fillStyle = "rgba(0, 0, 0, 0.05)";
  // mC.fillStyle = `hsla(${Math.random() * 360}, 100%, 40%, 0.2)`;
  mC.fillRect(0, 0, myCanvas.width, myCanvas.height);
  handleRect();
  requestAnimationFrame(animate);
}

animate();