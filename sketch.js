var rect,m_rect;
function setup() {
  createCanvas(windowWidth,windowHeight);
  m_rect = createSprite(400, 200, 100, 50);
  rect = createSprite(200,200,50,50);
  m_rect.debug = true;
  rect.debug = true;
  m_rect.shapeColor = "green";
  rect.shapeColor = "green";
}

function draw() {
  background("grey");  
  m_rect.x = mouseX;
  m_rect.y = mouseY;
  if(m_rect.x - rect.x < m_rect.width/2+rect.width/2  &&  rect.x - m_rect.x   < m_rect.width/2+rect.width/2
    && rect.y - m_rect.y < m_rect.height/2+rect.height/2&& m_rect.y - rect.y < m_rect.height/2+rect.height/2 ){
    //m_rect.shapeColor = rgb(random(1,85),random(86,170),random(171,255));
    m_rect.shapeColor = "red";
    rect.shapeColor = "red";
  }else{
    m_rect.shapeColor = "green";
    rect.shapeColor = "green";
  }
    drawSprites();
}