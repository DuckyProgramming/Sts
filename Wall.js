class wall extends entity{
	constructor(level,x,y,type,width,height){
		super(level,x,y,type,width,height);
		this.collideWith = {box:[entities.players,entities.enemies],circle:[entities.projectiles]};
		this.break = false;
		switch(this.type){
			case 3:
				this.graphics = {self:createGraphics(this.width+20,this.height+20)};
				this.graphics.self.noStroke();
				this.graphics.self.fill(0,40,0);
				this.graphics.self.beginShape();
				this.graphics.self.vertex(10,10);
				for(c=0;c<this.width/25-1;c++){
					this.graphics.self.vertex(35+c*25,random(0,10));
				}
				this.graphics.self.vertex(10+this.width,10);
				for(c=0;c<this.height/25-1;c++){
					this.graphics.self.vertex(this.width+10+random(0,10),35+c*25);
				}
				this.graphics.self.vertex(10+this.width,10+this.height);
				for(c=0;c<this.width/25-1;c++){
					this.graphics.self.vertex(this.width-15-c*25,random(this.height+10,this.height+20));
				}
				this.graphics.self.vertex(10,10+this.height);
				for(c=0;c<this.height/25-1;c++){
					this.graphics.self.vertex(random(0,10),this.height-15-c*25);
				}
				this.graphics.self.endShape();
			break;
			case 4: case 7:
				this.width/=3;
			break;
			case 8:
				this.height/=3;
			break;
			case 10:
				this.height*=2/5;
				this.position.y+=18;
			break;
			case 11:
				this.height*=3/5;
				this.position.y+=10;
			break;
			case 12: case 21:
				this.width/=4;
			break;
			case 14:
				this.mode = 0;
				this.height*=2/5;
			break;
			case 15:
				this.width/=4;
				this.height/=5;
				this.position.y+=20;
			break;
			case 16:
				this.position.y+=15;
			break;
			case 22:
				this.width/=9;
			break;
			case 23:
				this.height/=3;
				this.position.y-=10;
			break;
		}
	}
	display(){
		this.layer.noStroke();
		this.layer.translate(this.position.x,this.position.y);
		this.layer.noStroke();
		switch(this.type){
			case 1:
				this.layer.fill(200,this.fade);
				this.layer.rect(0,0,this.width,this.height);
			break;
			case 2: case 18:
				this.layer.fill(80,this.fade);
				this.layer.rect(0,0,this.width,this.height);
			break;
			case 3:
				this.layer.image(this.graphics.self,-this.width/2-10,-this.height/2-10);
			break;
			case 4:
				this.layer.fill(40,this.fade);
				this.layer.rect(-this.width/3,0,this.width/3,this.height);
				this.layer.rect(this.width/3,0,this.width/3,this.height);
			break;
			case 5:
				this.layer.stroke(120,this.fade);
				this.layer.fill(160,this.fade);
				this.layer.strokeWeight(6);
				this.layer.rect(0,0,this.width-6,this.height-6);
				this.layer.line(-this.width/2+3,-this.height/2+3,this.width/2-3,this.height/2-3);
				this.layer.line(-this.width/2+3,this.height/2-3,this.width/2-3,-this.height/2+3);
			break;
			case 6:
				this.layer.fill(40,this.fade);
				this.layer.rect(0,0,this.width,this.height);
			break;
			case 7: case 8:
				this.layer.stroke(255,this.fade/5);
				this.layer.fill(255,this.fade/10);
				this.layer.strokeWeight(4);
				this.layer.rect(0,0,this.width-4,this.height-4);
			break;
			case 10:
				this.layer.fill(160,this.fade);
				for(c=0;c<this.width/10;c++){
					this.layer.triangle(-this.width/2+c*10,this.height/2,-this.width/2+c*10+10,this.height/2,-this.width/2+c*10+5,-this.height/2);
				}
			break;
			case 11: case 12:
				this.layer.fill(95,90,100,this.fade);
				this.layer.rect(0,0,this.width,this.height);
				this.layer.fill(60,50,50,this.fade);
				for(c=0;c<this.height/10;c++){
					this.layer.rect(0,-this.height/2+5+c*10,this.width,2);
				}
			break;
			case 13:
				this.layer.fill(130,155,175,this.fade);
				this.layer.rect(0,0,this.width,this.height);
				this.layer.triangle(-this.width/2,-this.height/2,this.width/2,-this.height/2,0,-this.height/2-10);
				this.layer.triangle(-this.width/2,this.height/2,this.width/2,this.height/2,0,this.height/2+10);
			break;
			case 14:
				if(this.mode>180){
					this.layer.stroke(245,(this.mode-180)/30*this.fade);
				}
				else{
					this.layer.stroke(245,(30-this.mode)/30*this.fade);
				}
				this.layer.noFill();
				this.layer.strokeWeight(3);
				this.layer.rect(0,0,this.width,this.height);
				for(c=0;c<this.height/10-1;c++){
					this.layer.line(-this.width/2,-this.height/2+10+c*10,this.width/2,-this.height/2+10+c*10);
				}
			break;
			case 16:
				this.layer.fill(130,155,175,this.fade);
				this.layer.rect(0,0,this.width,this.height);
				this.layer.triangle(-this.width/2,-this.height/2,-this.width/2,this.height/2,-this.width/2-10,0);
				this.layer.triangle(this.width/2,-this.height/2,this.width/2,this.height/2,this.width/2+10,0);
			break;
			case 17:
				this.layer.fill(85,40,70,this.fade);
				this.layer.rect(0,0,this.width,this.height);
				this.layer.quad(-this.width/2-4,-this.height/2-4,this.width/2-4,-this.height/2+4,this.width/2+4,this.height/2+4,-this.width/2+4,this.height/2-4);
				this.layer.quad(this.width/2+4,-this.height/2-4,-this.width/2+4,-this.height/2+4,-this.width/2-4,this.height/2+4,this.width/2-4,this.height/2-4);
				this.layer.fill(95,50,80,this.fade);
				this.layer.rect(0,0,this.width-40,this.height-40);
				this.layer.quad(-this.width/2+20-4,-this.height/2+20-4,this.width/2-20-4,-this.height/2+20+4,this.width/2-20+4,this.height/2-20+4,-this.width/2+20+4,this.height/2-20-4);
				this.layer.quad(this.width/2-20+4,-this.height/2+20-4,-this.width/2+20+4,-this.height/2+20+4,-this.width/2+20-4,this.height/2-20+4,this.width/2-20-4,this.height/2-20-4);
			break;
			case 19: case 24:
				this.layer.fill(100,this.fade);
				this.layer.rect(0,0,this.width,this.height);
			break;
			case 20: case 21:
				this.layer.fill(160,125,80,this.fade);
				this.layer.rect(0,0,this.width,this.height);
				this.layer.fill(135,100,60,this.fade);
				for(c=0;c<this.height/10;c++){
					this.layer.rect(0,-this.height/2+5+c*10,this.width,2);
				}
			break;
			case 22: case 23:
				this.layer.fill(40,this.fade);
				this.layer.rect(0,0,this.width,this.height);
			break;
		}
		this.layer.translate(-this.position.x,-this.position.y);
	}
	update(){
		super.update();
		if(this.break&&this.fade>0){
			this.fade-=1/15;
		}
		if(this.type == 14&&this.mode>0){
			this.mode--;
		}
		else if(this.type == 18){
			if(this.time%200<100){
				this.position.y-=3.5;
			}
			else{
				this.position.y+=3.5;
			}
		}
		else if(this.type == 24){
			if(this.time%300<150){
				this.position.y-=2;
			}
			else{
				this.position.y+=2;
			}
		}
		if(!this.break&&this.type !== 22&&!(this.type === 14&&!(this.mode == 0||this.mode>180))){
			for(c=0;c<this.collideWith.box.length;c++){
				for(d=0;d<this.collideWith.box[c].length;d++){
					if(boxInsideBox(this,this.collideWith.box[c][d])&&(!boxInsideBox(this,this.collideWith.box[c][d].previous)||this.collideWith.box[c][d].time>5)&&!(this.type == 9&&(c == 0||this.collideWith.box[c][d].status.airborne||this.collideWith.box[c][d].life == 0))){
						if(this.type == 14&&this.mode == 0){
							this.mode = 240;
						}
						if(this.type == 15){
							if(c == 1){
								this.collideWith.box[c][d].inputs[2] = true;
							}
						}
						else if(this.type<=-200){
							if(!(!hold.win&&(-this.type)%100>stage.zone)&&c == 0){
								transition.trigger = true;
								transition.zone = (-this.type)%100;
								transition.scene = "level";
								transition.spawn = floor(-this.type/100);
							}
						}
						else if(this.type == 10){
							if(c == 0&&!transition.trigger){
								this.collideWith.box[c][d].life-=10;
								transition.trigger = true;
								transition.spawn = 0;
							}
							else if(!transition.trigger){
								this.collideWith.box[c][d].life = 0;
							}
						}
						else if(boxCollideBox(this,this.collideWith.box[c][d]) == 0){
							this.collideWith.box[c][d].position.y = this.position.y+this.height/2+this.collideWith.box[c][d].height/2;
							this.collideWith.box[c][d].velocity.y = 0;
							this.collideWith.box[c][d].sides[0] = true;
							this.bump();
						}
						else if(boxCollideBox(this,this.collideWith.box[c][d]) == 1){
							this.collideWith.box[c][d].position.y = this.position.y-this.height/2-this.collideWith.box[c][d].height/2;
							if(this.collideWith.box[c][d].timers[3]<=0){
								this.collideWith.box[c][d].velocity.y = 0;
							}
							this.collideWith.box[c][d].sides[1] = true;
							this.collideWith.box[c][d].velocity.x*=physics.friction;
							this.collideWith.box[c][d].timers[0] = 5;
							this.bump();
						}
						else if(boxCollideBox(this,this.collideWith.box[c][d]) == 2){
							this.collideWith.box[c][d].position.x = this.position.x+this.width/2+this.collideWith.box[c][d].width/2;
							this.collideWith.box[c][d].velocity.x = 0;
							this.collideWith.box[c][d].sides[2] = true;
						}
						else if(boxCollideBox(this,this.collideWith.box[c][d]) == 3){
							this.collideWith.box[c][d].position.x = this.position.x-this.width/2-this.collideWith.box[c][d].width/2;
							this.collideWith.box[c][d].velocity.x = 0;
							this.collideWith.box[c][d].sides[3] = true;
						}
					}
				}
			}
			for(c=0;c<this.collideWith.circle.length;c++){
				for(d=0;d<this.collideWith.circle[c].length;d++){
					if(circleInsideBox(this,this.collideWith.circle[c][d])&&(!circleInsideBox(this,this.collideWith.circle[c][d].previous)||this.collideWith.circle[c][d].time>5)&&this.collideWith.circle[c][d].speed != 0&&!(this.type == 7||this.type == 8||this.type == 9)){
						this.collideWith.circle[c][d].position.x = circleCollideBox(this,this.collideWith.circle[c][d]).x;
						this.collideWith.circle[c][d].position.y = circleCollideBox(this,this.collideWith.circle[c][d]).y;
						this.collideWith.circle[c][d].speed = 0;
						this.collideWith.circle[c][d].trigger = true;
						if(this.collideWith.circle[c][d].type == 2||this.collideWith.circle[c][d].type == 10){
							this.collideWith.circle[c][d].boost.explosion*=5;
							this.collideWith.circle[c][d].displayHit();
							splashZone([entities.enemies,entities.players],this.collideWith.circle[c][d].position,100,this.collideWith.circle[c][d].damage);
						}
					}
				}
			}
		}
	}
	bump(){
		if(this.type == 18){
			if(this.time%200<100){
				this.collideWith.box[c][d].velocity.y = -3.5;
			}
			else{
				this.collideWith.box[c][d].velocity.y = 3.5;
			}
		}
		else if(this.type == 24){
			if(this.time%300<150){
				this.collideWith.box[c][d].velocity.y = -2;
			}
			else{
				this.collideWith.box[c][d].velocity.y = 2;
			}
		}
	}
}
