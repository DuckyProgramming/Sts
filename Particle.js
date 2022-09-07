class particle extends entity{
	constructor(layer,x,y,type,direction,size,speed,color){
		super(layer,x,y,type,0,0);
		this.direction = direction;
		this.size = size;
		this.speed = speed;
		this.color = color;
		switch(this.type){
			case 0:
				this.sizeAnimation = 1;
				this.fade = 1;
			break;
			case 1: case 2:
				this.sizeAnimation = 0.01;
				this.fade = 1;
			break;
		}
	}
	display(){
		this.layer.noStroke();
		this.layer.translate(this.position.x,this.position.y);
		this.layer.rotate(this.direction);
		this.layer.scale(this.size*this.sizeAnimation);
		switch(this.type){
			case 0: case 2:
				this.layer.fill(this.color[0],this.color[1],this.color[2],this.fade);
				this.layer.ellipse(0,0,1,1);
			break;
			case 1:
				this.layer.noStroke();
				this.layer.fill(255,150,0,this.fade);
				this.layer.ellipse(0,0,12,12);
				this.layer.fill(255,100,0,this.fade);
				this.layer.ellipse(0,0,8,8);
				this.layer.ellipse(255,50,0,this.fade);
				this.layer.ellipse(0,0,4,4);
			break;
			case 2:
				this.layer.noStroke();
				this.layer.fill(250,this.fade);
				this.layer.ellipse(0,0,12,12);
				this.layer.fill(225,this.fade);
				this.layer.ellipse(0,0,8,8);
				this.layer.ellipse(200,this.fade);
				this.layer.ellipse(0,0,4,4);
			break;
		}
		this.layer.scale(1/this.size/this.sizeAnimation);
		this.layer.rotate(-this.direction);
		this.layer.translate(-this.position.x,-this.position.y);
	}
	update(){
		super.update();
		switch(this.type){
			case 0:
				this.sizeAnimation = max(this.sizeAnimation-this.speed*0.01,0.01);
				this.fade-=this.speed*0.01;
				if(this.fade<=0){
					this.remove = true;
				}
			break;
			case 1: case 2:
				this.sizeAnimation+=this.speed*0.1;
				this.fade-=this.speed*0.1;
				if(this.fade<=0){
					this.remove = true;
				}
			break;
		}
	}
}
