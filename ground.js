class Ground {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
