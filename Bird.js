// extends is a key word which tells this class is a child of the BaseClass
// class child_name extends parent_name
class Bird extends BaseClass{
  constructor(x, y) {
   super(x,y,50,50) ;
   this.image = loadImage("sprites/bird.png");
 };

 display(){
   this.body.position.x= mouseX;
   this.body.position.y= mouseY;
   super.display();
 }
};
