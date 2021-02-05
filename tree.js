class Tree {

    constructor(x,y,width,height){
    
    
        var options={
            restitution:0.4,
            isStatic:true,
        }
    this.body=Bodies.rectangle(x,y,width-50,height,options);
    World.add(world,this.body);
    
    
    this.width=width;
    this.height=height;
    
    this.image=loadImage("Plucking mangoes/tree.png")

    }
    
    display(){
        
    push ();

    translate(this.body.position.x,this.body.position.y);
    rotate (this.body.angle);
    image (this.image,0,0,this.width,this.height);
    pop ();
    
    }

}    