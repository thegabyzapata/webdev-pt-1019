// Prepare canvas when DOM is loaded
window.onload = function() {
  let ctx = document.getElementById("mycanvas").getContext("2d");

  let gameObjects = [
    new Car(0, 0, "green", "A"),
    new Car(100, 100, "blue", "B")
  ];

  // Bucle de renderizado
  let past = 0;
  let delta = 0;
  function draw(elapsed) {
    delta = elapsed - past;
    past = elapsed;
    let fps = 1000 / delta;
    ctx.clearRect(0, 0, 500, 500);

    // Update game objects
    gameObjects.forEach(function(object) {
      object.update(delta);
    });

    // Draw game objects
    gameObjects.forEach(function(object) {
      ctx.save();
      object.draw(ctx);
      ctx.restore();
    });

    // Draw fps counter
    ctx.font = "20px Arial";
    ctx.fillText("FPS: " + Math.round(fps), 10, 20);
    window.requestAnimationFrame(draw);
  }

  // Listen for keyboard events
  let keyMap = {
    A: {
      UP: 87,
      DOWN: 83,
      LEFT: 65,
      RIGHT: 68
    },
    B: {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39
    }
  };

  function eventHandler(type) {
    return function(e) {
      console.log(e.keyCode);
      Object.keys(keyMap).forEach(function(mapName) {
        let km = keyMap[mapName];
        Object.keys(km).forEach(function(key) {
          let code = km[key];
          if (code == e.keyCode) {
            gameObjects.forEach(function(object) {
              console.log(key, type);
              object.event(key, type, mapName);
            });
          }
        });
      });
    };
  }

  document.addEventListener("keyup", eventHandler(0));
  document.addEventListener("keydown", eventHandler(1));

  window.requestAnimationFrame(draw);
};
