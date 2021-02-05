class Ground {

    constructor(x,y,width,height){
    
    
        var options={
            restitution:0.4,
            isStatic:true,
        }
    this.body=Bodies.rectangle(x,y,width-50,height,options);
    World.add(world,this.body);
    
    
    this.width=width;
    this.height=height;
    
    }
    
    display(){
        
    push ();
    fill("green")
    noStroke()
    translate(this.body.position.x,this.body.position.y);
    rotate (this.body.angle);
    rect (0,0,this.width,this.height);
    pop ();
    
    }

}    