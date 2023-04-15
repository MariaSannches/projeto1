var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["352bac83-c6c4-44ed-8722-14ae9022e8f9","53dc29c5-8c29-4520-8662-57de5963183c","9292cbc9-9a5f-4d00-9d57-027f2dfaec92","4597984e-72d0-43a7-94b6-638ef1887c88","22aa880e-8569-4121-9763-7bf84a59563b"],"propsByKey":{"352bac83-c6c4-44ed-8722-14ae9022e8f9":{"name":"spike","sourceUrl":"assets/api/v1/animation-library/gamelab/tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z/category_robots/spike_bot.png","frameSize":{"x":116,"y":157},"frameCount":2,"looping":true,"frameDelay":2,"version":"tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":157},"rootRelativePath":"assets/api/v1/animation-library/gamelab/tTpE3X2vPx5y6euOte0owIR9YiTn5r5Z/category_robots/spike_bot.png"},"53dc29c5-8c29-4520-8662-57de5963183c":{"name":"gameover","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"},"9292cbc9-9a5f-4d00-9d57-027f2dfaec92":{"name":"robot","sourceUrl":"assets/api/v1/animation-library/gamelab/iPZmK970SRdNlat3QAkkmQs.k.ImGcvS/category_robots/robot_19.png","frameSize":{"x":342,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"iPZmK970SRdNlat3QAkkmQs.k.ImGcvS","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":342,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/iPZmK970SRdNlat3QAkkmQs.k.ImGcvS/category_robots/robot_19.png"},"4597984e-72d0-43a7-94b6-638ef1887c88":{"name":"roxo","sourceUrl":"assets/api/v1/animation-library/gamelab/0lJRolplCuorhSLCzhMPFOv9p2UaT61B/category_backgrounds/gradient_17.png","frameSize":{"x":400,"y":330},"frameCount":1,"looping":true,"frameDelay":2,"version":"0lJRolplCuorhSLCzhMPFOv9p2UaT61B","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":330},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0lJRolplCuorhSLCzhMPFOv9p2UaT61B/category_backgrounds/gradient_17.png"},"22aa880e-8569-4121-9763-7bf84a59563b":{"name":"planet","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var life = 10;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
   boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("robot");
  sam.scale = 0.05;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.velocityY = 5;
  car1.setAnimation("spike");
  car1.scale = 0.15
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.velocityY = 5;
  car2.setAnimation("spike");
  car2.scale = 0.15
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.velocityY = -5;
  car3.setAnimation("spike");
  car3.scale = 0.15
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  car4.velocityY = -5;
  car4.setAnimation("spike");
  car4.scale = 0.15
  
 
//adicione velocidade para fazer o carro se mover.

function draw() {
  background("pink")
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("purple");
  rect(0,120,52,140);
  fill("purple");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  createEdgeSprites();
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  sam.bounceOff(edges);
  if (keyDown("right")){
    sam.x = sam.x + 4;
  }
  if (keyDown("left")){
    sam.x = sam.x - 4;
  }
  
  if (sam.isTouching(car1)) {
    life = life -1;
    sam.x = 20;
    sam.y = 190;
  }
  if (sam.isTouching(car2)) {
    life = life -1;
    sam.x = 20;
    sam.y = 190;
  }
  if (sam.isTouching(car3)) {
    life = life -1;
    sam.x = 20;
    sam.y = 190;
  }
  if (sam.isTouching(car4)) {
    life = life -1;
    sam.x = 20;
    sam.y = 190;
  }
  if (life == 0){
    car1.velocityY = 0;
    car2.velocityY = 0;
    car3.velocityY = 0;
    car4.velocityY = 0;
    sam.velocityX = 0;
    var gameover = createSprite(200,200);
    gameover.setAnimation("gameover");
  }
  drawSprites();

// crie a função rebater, para fazer o carro rebater nos limites
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
