class Monster{
    constructor(x,y,width,height){
      var options ={ isStatic: false,
        density: 1,
        frictionAir: 1
    }
      this.image=loadImage("Monster-01.png")
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
      World.add(world, this.body);
    }
  }
  