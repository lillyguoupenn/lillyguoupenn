var drop = []
var dropNumber = 1200;
var bkgColor = 225;
var bkgTime = 0;
var opacity = 0;
function preload(){
  cat=loadImage("cat.png");
  rainbow=loadImage("rainbow.png"); // dimension: 1280 × 657
}

function setup() {
  createCanvas(windowWidth*.8, windowHeight*.7);
  for(var i = 0; i < dropNumber; i++) {
    drop[i] = new Drop();
  }
  imageMode(CENTER);

  var h2 = document.createElement('h2');
  h2.textContent = 'thanks :)';
  document.body.appendChild(h2); 
}

function draw() {
  background(bkgColor);
  noTint();
  image(cat,width/2,height-(width*0.1*0.6),width*0.1,width*0.1);
  tint(255, opacity);
  image(rainbow,width/2,height-(width*0.4106*0.45),width*0.8,width*0.4106);

  for(var i = 0; i < dropNumber; i++) {
    drop[i].show();
    drop[i].update();
  }
  
  if (dropNumber <= 0) {
    if (bkgTime >=1) {
      bkgTime = 1
    }
    else {
    bkgColor = lerpColor(color(225), color(176, 230, 247), bkgTime);
    bkgTime = bkgTime + 0.01;
    opacity = opacity + 2
    document.getElementById("title").style.color = lerpColor(color(100, 133, 166), color(176*.85, 230*.85, 247*.85), bkgTime);
    document.getElementById("body").style.background = lerpColor(color(255), color(251, 252, 204), bkgTime);
    document.querySelector('h2').style.opacity = bkgTime;

    }
  }
  else {
    bkgColor = 225;
  }
  
  cursor('umbrella_cursor.png');
}

function Drop() {
  this.x = random(0,width);
  this.y = random(0, -height);
  
  this.show = function() {
    noStroke();
    fill(135, 180, 224);
    ellipse(this.x, this.y, random(1, 3), random(1, 12));   
  }
  this.update = function() {
    this.speed = random(5, 10);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity; 
    
    var xOffset = width*0.1/2;
    
    if (this.y > mouseY && this.x >= mouseX-xOffset && this.x <= mouseX+xOffset+32) {
      this.y = random(0, -height);
      this.gravity = 0;
    }
    else if (this.y > height && (this.x < mouseX-40 || this.x > mouseX+40+32)) {
      this.y = random(0, -height);
      this.gravity = 0;
    }
    
    if (mouseX > width/2-30 && mouseX < width/2+30) {
      if (dropNumber<=0) {
        dropNumber = 0;
      }
      else {
        dropNumber = dropNumber-0.02;  
      }
    }
    else {
      dropNumber = 1200;
    }
    

  }
}