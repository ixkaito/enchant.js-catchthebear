enchant();

window.onload = function() {

  var core = new Core(320, 320);
  core.preload('chara1.png');
  core.fps = 15;

  core.onload = function() {

    var bear = new Sprite(32, 32);
    bear.x = rand(320);
    bear.y = rand(320);
    bear.frame = 0;
    bear.image = core.assets['chara1.png'];

    core.rootScene.addChild(bear);

  };

  core.start();

};

function rand(n) {
  return Math.floor(Math.random() * (n+1));
}
