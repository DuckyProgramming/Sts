class entity{
	constructor(layer,x,y,type,width,height){
		this.layer = layer;
		this.position = {x:x,y:y};
		this.width = width;
		this.height = height;
		this.time = 0;
		this.fade = 0;
		this.type = type;
		this.remove = false;
		this.base = {position:{x:this.position.x,y:this.position.y},width:this.width,height:this.height};
		this.previous = {position:{x:this.position.x,y:this.position.y},width:this.width,height:this.height};
	}
	update(){
		this.time++;
		this.previous.position.x = this.position.x;
		this.previous.position.y = this.position.y;
	}
}
class cloud extends entity{
	constructor(layer,x,y,type,speed,color,size){
		super(layer,x,y,type,100,50);
		this.speed = speed;
		this.color = color;
		this.size = size;
	}
	display(){
		this.layer.noStroke();
		this.layer.fill(this.color[0],this.color[1],this.color[2],0.8);
		this.layer.ellipse(this.position.x,this.position.y,100*this.size,50*this.size);
	}
	update(){
		super.update();
		this.position.x+=this.speed*this.size;
		if(this.position.x>this.layer.width+100){
			this.position.x = -100;
			this.position.y = random(-20,300);
			this.speed = random(2,3);
		}
	}
}
