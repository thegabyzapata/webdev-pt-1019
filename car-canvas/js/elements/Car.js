class Car {
  constructor(startPosX = 200, startPosY = 200, color = "red", keyMap = "A") {
    this.posX = startPosX;
    this.posY = startPosY;
    this.angle = 45;
    this.speed = 100; // px por segundo
    this.color = color;
    this.rotationSpeed = 0;
    this.responseToKeyMap = keyMap;
  }

  event(key, type, mapName) {
    if (this.responseToKeyMap == mapName) {
      if (key == "LEFT") {
        this.rotationSpeed = -1 * type;
      } else if (key == "RIGHT") {
        this.rotationSpeed = 1 * type;
      }
    }
  }

  update(delta) {
    let rads = (this.angle * Math.PI) / 180;
    this.posX += Math.sin(rads) * (this.speed / 1000) * delta;
    this.posY += Math.cos(rads) * (this.speed / 1000) * delta;

    if (this.posX > 500) {
      this.posX = -100;
    }
    if (this.posY > 500) {
      this.posY = -100;
    }

    this.angle -= 1 * this.rotationSpeed;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    let rads = (this.angle * Math.PI) / 180;
    ctx.translate(this.posX, this.posY);
    ctx.rotate(-rads);
    ctx.fillRect(-25, -50, 50, 100);
  }
}
