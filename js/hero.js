class Hero{
    constructor(x,y,r){
        var options={
            density:1,
            frictionAir:1
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);

    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
       
        
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}