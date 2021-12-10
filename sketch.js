var gameState = 1,x,y,a,b,c;

function setup() {
  createCanvas(windowWidth,windowHeight);

  a = createInput("");
  b = createButton("set");
  c = createButton("reset");

  a.position((width/2)-50,(height/2)-10);
  b.position((width/2)-50,(height/2)+20);
  c.position((width/2)-50,(height/2)+70);

}

function draw() {
  background(0);

  if(gameState===1) {
    a.show();
    b.show();
    c.hide();

    b.mousePressed(()=>{
      x = (int(a.value()))-1;
      y = int(a.value());
      gameState = 2;
    });
  }
  
  if(gameState===2){
    a.hide();
    b.hide();
    c.show();

    c.mousePressed(()=>{
      x = 0;
      y = 0;
      gameState = 1;
    });

    noStroke();
    fill(255);
    text(y,width/2,height/2);
    
    if(x!==0) {
      y = x*y;
      x-=1;
    }
  }
}