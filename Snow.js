class Snow{
    constructor(x,y,width,height){
    var options={
        'density':1,
        'friction':1
    }
    this.width=width;
    this.height=height;
    this.body = Bodies.rectangle(x, y, this.width,this.height, options);
   // this.r=r;
    this.image=loadImage("snow4.webp")
    World.add(world,this.body)
}
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
    push();
 // translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.width, this.height);
    pop();
  }
}