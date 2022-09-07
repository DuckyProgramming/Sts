class enemy extends partisan{
	constructor(layer,x,y,type,id){
		super(layer,x,y,type,entityTypes.enemy[type].width,entityTypes.enemy[type].height,entityTypes.enemy[type].life,entityTypes.enemy[type].block,entityTypes.enemy[type].damage,entityTypes.enemy[type].speed,entityTypes.enemy[type].push,entityTypes.enemy[type].parry,entityTypes.enemy[type].physics);
		this.attack.detail = entityTypes.enemy[type].attack;
		this.id = id;
		if(this.life<100){
			this.attack.detail.range*=random(0.9,1.1);
		}
		if(this.type == 46){
			this.mode = floor(random(0,2));
		}
		else if(this.type == 47){
			this.mode = floor(random(0,3));
			this.attack.want = floor(random(0,3));
			this.attack.list = [6,9,11];
			this.attack.damage = [5,25,3];
		}
		else if(this.type == 48||this.type == 51){
			this.mode = floor(random(0,3));
			this.attack.want = floor(random(0,4));
			this.attack.list = [17,18,29,30];
			this.attack.damage = [3,25,8,4];
		}
		else if(this.type == 49){
			this.mode = floor(random(0,3));
			this.attack.want = floor(random(0,3));
			this.attack.list = [39,40,41];
			this.attack.damage = [5,0,0];
		}
		else if(this.type == 52){
			this.mode = floor(random(0,3));
			this.attack.want = floor(random(0,2));
			this.attack.list = [43,44,45];
			this.attack.damage = [5,25,8];
		}
		else if(this.type == 53){
			this.mode = floor(random(0,3));
			this.attack.want = floor(random(0,3));
			this.attack.list = [46,47,48];
			this.attack.damage = [3,3,10];
		}
		else if(this.type == 54){
			this.mode = floor(random(0,3));
			this.attack.want = floor(random(0,3));
			this.attack.list = [7,49,50];
			this.attack.damage = [20,30,15];
		}
		else if(this.type == 55){
			this.mode = floor(random(0,3));
			this.attack.want = 0;
			this.attack.list = [51];
			this.attack.damage = [40];
		}
	}
	display(){
		this.layer.noStroke();
		this.layer.translate(this.position.x,this.position.y);
		switch(this.type){
			case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 18: case 19: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 35: case 36: case 37: case 38:
				this.layer.fill(160,170,180,this.fade);
				if(this.type == 0||this.type == 6||this.type == 23||this.type == 24||this.type == 29||this.type == 30){
					this.layer.stroke(80,85,90,this.fade);
					if(this.type == 29||this.type == 30){
						this.layer.strokeWeight(4);
					}
					else{
						this.layer.strokeWeight(3);
					}
					this.layer.line(5,-8,12*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.line(-5,-8,-12*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					if(this.type == 23||this.type == 24){
						this.layer.strokeWeight(2);
						this.layer.line((5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*16+cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*4)*this.anim.trigger,(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*16-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*4)*this.anim.trigger,(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*16+cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*-4)*this.anim.trigger,(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*16-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*-4)*this.anim.trigger);
						this.layer.line((-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*16+cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*4)*this.anim.trigger,(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*16-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*4)*this.anim.trigger,(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*16+cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*-4)*this.anim.trigger,(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*16-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*-4)*this.anim.trigger);
						this.layer.strokeWeight(3);
					}
					else if(this.type == 29||this.type == 30){
						this.layer.strokeWeight(3);
					}
				}
				else if(this.type == 1||this.type == 7){
					this.layer.strokeWeight(6);
					this.layer.stroke(125,225,225,this.fade*this.anim.trigger/2);
					this.layer.line(11*(1-this.anim.trigger)+(30+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-18+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(14+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(9+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
					this.layer.strokeWeight(2);
					this.layer.stroke(125,225,225,this.fade*this.anim.trigger);
					this.layer.line(11*(1-this.anim.trigger)+(30+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-18+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(14+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(9+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
					this.layer.stroke(80,85,90,this.fade);
					this.layer.strokeWeight(3);
					this.layer.line(0,-6,(22+this.anim.attack)*this.anim.direction,(-6+this.anim.class)*abs(this.anim.direction));
					this.layer.line(0,-6,(16+this.anim.attack)*this.anim.direction,(3+this.anim.class)*abs(this.anim.direction));
				}
				else if(this.type == 2||this.type == 8||this.type == 27||this.type == 28){
					this.layer.stroke(80,85,90,this.fade);
					this.layer.strokeWeight(6);
					this.layer.line(4,-8,12*(1-this.anim.trigger)+(4-sin(atan2(this.position.x+4-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+4-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.line(-4,-8,-12*(1-this.anim.trigger)+(-4-sin(atan2(this.position.x-4-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-4-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					if(this.type == 27||this.type == 28){
						this.layer.strokeWeight(1);
						this.layer.line((5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*8+cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*6)*this.anim.trigger,(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*8-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*6)*this.anim.trigger,(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*8+cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*-6)*this.anim.trigger,(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*8-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*-6)*this.anim.trigger);
						this.layer.line((-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*8+cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*6)*this.anim.trigger,(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*8-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*6)*this.anim.trigger,(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*8+cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*-6)*this.anim.trigger,(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*8-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*-6)*this.anim.trigger);
						this.layer.line((5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*12+cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*6)*this.anim.trigger,(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*12-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*6)*this.anim.trigger,(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*12+cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*-6)*this.anim.trigger,(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*12-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*-6)*this.anim.trigger);
						this.layer.line((-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*12+cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*6)*this.anim.trigger,(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*12-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*6)*this.anim.trigger,(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*12+cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*-6)*this.anim.trigger,(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*12-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*-6)*this.anim.trigger);
					}
					this.layer.strokeWeight(3);
				}
				else if(this.type == 3||this.type == 9){
					this.layer.stroke(80,85,90,this.fade);
					this.layer.strokeWeight(8);
					this.layer.line(3,-8,12*(1-this.anim.trigger)+(3-sin(atan2(this.position.x+3-this.target.position.x,this.position.y-8-this.target.position.y))*20)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+3-this.target.position.x,this.position.y-8-this.target.position.y))*20)*this.anim.trigger);
					this.layer.line(-3,-8,-12*(1-this.anim.trigger)+(-3-sin(atan2(this.position.x-3-this.target.position.x,this.position.y-8-this.target.position.y))*20)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-3-this.target.position.x,this.position.y-8-this.target.position.y))*20)*this.anim.trigger);
					this.layer.strokeWeight(3);
				}
				else if(this.type == 4||this.type == 10){
					this.layer.stroke(80,85,90,this.fade);
					this.layer.strokeWeight(3);
					this.layer.line(5,-8,12*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger);
					this.layer.line(-5,-8,-12*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x-5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger);
				}
				else if(this.type == 5||this.type == 11||this.type == 31||this.type == 32){
					this.layer.stroke(80,85,90,this.fade);
					this.layer.strokeWeight(4);
					this.layer.line(2,-8,12*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+2-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+2-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger);
					this.layer.line(-2,-8,-12*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x-2-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-2-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger);
					this.layer.strokeWeight(8);
					this.layer.line(2,-8,12*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+2-this.target.position.x,this.position.y-8-this.target.position.y))*12)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+2-this.target.position.x,this.position.y-8-this.target.position.y))*12)*this.anim.trigger);
					this.layer.line(-2,-8,-12*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x-2-this.target.position.x,this.position.y-8-this.target.position.y))*12)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-2-this.target.position.x,this.position.y-8-this.target.position.y))*12)*this.anim.trigger);
					if(this.type == 23||this.type == 26){
						this.layer.strokeWeight(2);
						this.layer.line((5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*10+cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*6)*this.anim.trigger,(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*10-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*6)*this.anim.trigger,(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*10+cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*-6)*this.anim.trigger,(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*10-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*-6)*this.anim.trigger);
						this.layer.line((-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*10+cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*6)*this.anim.trigger,(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*10-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*6)*this.anim.trigger,(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*10+cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*-6)*this.anim.trigger,(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*10-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*-6)*this.anim.trigger);
					}
					this.layer.strokeWeight(3);
				}
				else if(this.type == 18||this.type == 19){
					this.layer.strokeWeight(3);
					this.layer.stroke(60,65,70,this.fade);
					this.layer.fill(120,130,140,this.fade);
					this.layer.rect(0,-1,16+this.anim.attack,28+this.anim.attack);
					this.layer.stroke(80,85,90,this.fade);
					this.layer.fill(160,170,180,this.fade);
					this.layer.line(5,-8,12,16);
					this.layer.line(-5,-8,-12,16);
				}
				else if(this.type == 25||this.type == 26){
					this.layer.strokeWeight(6);
					this.layer.stroke(125,225,125,this.fade*this.anim.trigger/2);
					this.layer.line(11*(1-this.anim.trigger)+(30+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-18+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(14+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(9+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
					this.layer.strokeWeight(2);
					this.layer.stroke(125,225,125,this.fade*this.anim.trigger);
					this.layer.line(11*(1-this.anim.trigger)+(30+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-18+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(14+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(9+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
					this.layer.stroke(80,85,90,this.fade);
					this.layer.strokeWeight(3);
					this.layer.line(0,-6,(22+this.anim.attack)*this.anim.direction,(-6+this.anim.class)*abs(this.anim.direction));
					this.layer.line(0,-6,(16+this.anim.attack)*this.anim.direction,(3+this.anim.class)*abs(this.anim.direction));
				}
				else if(this.type == 35||this.type == 36){
					this.layer.strokeWeight(6);
					this.layer.stroke(225,125,125,this.fade*this.anim.trigger/2);
					this.layer.line(11*(1-this.anim.trigger)+(30+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-18+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(14+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(9+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
					this.layer.strokeWeight(2);
					this.layer.stroke(225,125,125,this.fade*this.anim.trigger);
					this.layer.line(11*(1-this.anim.trigger)+(30+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-18+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(14+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(9+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
					this.layer.stroke(80,85,90,this.fade);
					this.layer.strokeWeight(3);
					this.layer.line(0,-6,(22+this.anim.attack)*this.anim.direction,(-6+this.anim.class)*abs(this.anim.direction));
					this.layer.line(0,-6,(16+this.anim.attack)*this.anim.direction,(3+this.anim.class)*abs(this.anim.direction));
				}
				else if(this.type == 37||this.type == 38){
					this.layer.stroke(80,85,90,this.fade);
					this.layer.strokeWeight(8);
					this.layer.line(3,-8,12*(1-this.anim.trigger)+(3-sin(atan2(this.position.x+3-this.target.position.x,this.position.y-8-this.target.position.y))*20)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+3-this.target.position.x,this.position.y-8-this.target.position.y))*20)*this.anim.trigger);
					this.layer.line(-3,-8,-12*(1-this.anim.trigger)+(-3-sin(atan2(this.position.x-3-this.target.position.x,this.position.y-8-this.target.position.y))*20)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-3-this.target.position.x,this.position.y-8-this.target.position.y))*20)*this.anim.trigger);
					this.layer.line(3,-8,12*(1-this.anim.trigger)+(3-sin(atan2(this.position.x+3-this.target.position.x,this.position.y-8-this.target.position.y))*20)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+3-this.target.position.x,this.position.y-8-this.target.position.y)-10)*20)*this.anim.trigger);
					this.layer.line(-3,-8,-12*(1-this.anim.trigger)+(-3-sin(atan2(this.position.x-3-this.target.position.x,this.position.y-8-this.target.position.y))*20)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-3-this.target.position.x,this.position.y-8-this.target.position.y)-10)*20)*this.anim.trigger);
					this.layer.line(3,-8,12*(1-this.anim.trigger)+(3-sin(atan2(this.position.x+3-this.target.position.x,this.position.y-8-this.target.position.y))*20)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+3-this.target.position.x,this.position.y-8-this.target.position.y)+10)*20)*this.anim.trigger);
					this.layer.line(-3,-8,-12*(1-this.anim.trigger)+(-3-sin(atan2(this.position.x-3-this.target.position.x,this.position.y-8-this.target.position.y))*20)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-3-this.target.position.x,this.position.y-8-this.target.position.y)+10)*20)*this.anim.trigger);
					this.layer.strokeWeight(3);
				}
				this.layer.line(sin(this.rate*3)-3-sin(sin(this.rate*3)*15)*32,cos(sin(this.rate*3)*15)*32,sin(this.rate*3)-3,0);
				this.layer.line(-sin(this.rate*3)+3-sin(sin(this.rate*3)*-15)*32,cos(sin(this.rate*3)*-15)*32,-sin(this.rate*3)+3,0);
				this.layer.rect(0,-1,10,22);
				this.layer.ellipse(0,-22,24,24);
				if(this.type == 2||this.type == 8||this.type == 27||this.type == 28){
					this.layer.stroke(50,50,200,this.fade);
				}
				else{
					this.layer.stroke(200,50,50,this.fade);
				}
				this.layer.strokeWeight(3.6);
				this.layer.point(max(-4+this.anim.direction*7,-11),-23);
				this.layer.point(min(4+this.anim.direction*7,11),-23);
				if(this.type == 0||this.type == 2||this.type == 3||this.type == 4||this.type == 5||this.type == 6||this.type == 8||this.type == 9||this.type == 10||this.type == 11||this.type == 23||this.type == 24||this.type == 29||this.type == 30||this.type == 31||this.type == 32||this.type == 37||this.type == 38){
					this.layer.stroke(0,200,0,this.fade);
					this.layer.strokeWeight(this.anim.attack/3);
					this.layer.point(max(-4+this.anim.direction*7,-11),-23);
					this.layer.point(min(4+this.anim.direction*7,11),-23);
				}
				if(this.type == 6||this.type == 7||this.type == 8||this.type == 9||this.type == 10||this.type == 11||this.type == 19||this.type == 24||this.type == 26||this.type == 28||this.type == 30||this.type == 32||this.type == 36||this.type == 38){
					this.layer.stroke(200,200,50,this.fade);
					this.layer.strokeWeight(6);
					this.layer.point(2,-6);
				}
			break;
			case 12:
				this.layer.noStroke();
				this.layer.strokeWeight(3);
				this.layer.stroke(100,this.fade);
				this.layer.line(5*this.anim.direction,-8,12*(1-this.anim.trigger)+(5*this.anim.direction-sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
				this.layer.line(3,10,6+sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.line(-3,10,-6-sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.stroke(40,this.fade);
				this.layer.translate(5*this.anim.direction,-8);
				this.layer.rotate(-atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
				this.layer.line(-2*this.anim.direction,-24,-2*this.anim.direction,-36);
				this.layer.line(-2*this.anim.direction,-24,4*this.anim.direction,-24);
				this.layer.rotate(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
				this.layer.translate(-5*this.anim.direction,8);
				this.layer.strokeWeight(0.5);
				this.layer.noStroke();
				this.layer.fill(100,this.fade);
				this.layer.ellipse(0,-2,16,36);
				this.layer.fill(60,this.fade);
				this.layer.rect(0,-2,16,2);
				this.layer.noStroke();
				this.layer.fill(255,230,145,this.fade);
				this.layer.ellipse(0,-27,24,24);
				this.layer.stroke(0,this.fade);
				this.layer.strokeWeight(3);
				this.layer.point(max(-9,-4+this.anim.direction*6),-26);
				this.layer.point(min(9,4+this.anim.direction*6),-26);
				this.layer.stroke(50,50,200,this.fade);
				this.layer.strokeWeight(4);
				this.layer.point(2,-10);
			break;
			case 13: case 21: case 22: case 33: case 34:
				this.layer.noStroke();
				this.layer.strokeWeight(3);
				this.layer.stroke(85,135,195,this.fade);
				this.layer.line(5*this.anim.direction,-8,12*(1-this.anim.trigger)+(5*this.anim.direction-sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
				this.layer.stroke(65,86,86,this.fade);
				this.layer.line(3,10,6+sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.line(-3,10,-6-sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.stroke(40,this.fade);
				if(this.anim.trigger>0){
					this.layer.translate(5*this.anim.direction,-8);
					this.layer.scale(this.anim.trigger);
					this.layer.rotate(-atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
					if(this.type == 34){
						this.layer.line(1*this.anim.direction,-28,1*this.anim.direction,-31);
						this.layer.line(-2*this.anim.direction,-20,4*this.anim.direction,-20);
						this.layer.line(-2*this.anim.direction,-24,4*this.anim.direction,-24);
						this.layer.strokeWeight(6);
						this.layer.line(-2*this.anim.direction,-20,-2*this.anim.direction,-36);
					}
					else if(this.type == 33){
						this.layer.strokeWeight(4);
						this.layer.line(-2*this.anim.direction,-24,-2*this.anim.direction,-40);
						this.layer.line(-3*this.anim.direction,-32,-3*this.anim.direction,-36);
						this.layer.line(-2*this.anim.direction,-24,4*this.anim.direction,-24);
					}
					else if(this.type == 22){
						this.layer.line(-2*this.anim.direction,-24,4*this.anim.direction,-24);
						this.layer.line(-2*this.anim.direction,-30,4*this.anim.direction,-30);
						this.layer.line(-2*this.anim.direction,-36,4*this.anim.direction,-36);
						this.layer.fill(40,this.fade);
						this.layer.noStroke();
						this.layer.rect(-5*this.anim.direction,-24,8,48);
						this.layer.strokeWeight(6);
						this.layer.stroke(this.anim.attack*15,0,0,this.fade);
						this.layer.point(-5*this.anim.direction,-18);
					}
					else if(this.type == 21){
						this.layer.line(-2*this.anim.direction,-24,-2*this.anim.direction,-48);
						this.layer.line(-3*this.anim.direction,-40,-3*this.anim.direction,-44);
						this.layer.line(-2*this.anim.direction,-32,1*this.anim.direction,-32);
						this.layer.line(-2*this.anim.direction,-40,2*this.anim.direction,-40);
						this.layer.line(-3*this.anim.direction,-32,-3*this.anim.direction,-36);
						this.layer.line(-2*this.anim.direction,-24,4*this.anim.direction,-24);
					}
					else{
						this.layer.line(-2*this.anim.direction,-24,-2*this.anim.direction,-40);
						this.layer.line(-3*this.anim.direction,-32,-3*this.anim.direction,-36);
						this.layer.line(-2*this.anim.direction,-24,4*this.anim.direction,-24);
					}
					this.layer.rotate(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
					this.layer.scale(1/this.anim.trigger);
					this.layer.translate(-5*this.anim.direction,8);
				}
				this.layer.noStroke();
				this.layer.fill(95,105,110,this.fade);
				this.layer.ellipse(0,-2,16,36);
				this.layer.fill(30,25,0,this.fade);
				this.layer.rect(-6,-2,4,2);
				this.layer.rect(0,-2,4,2);
				this.layer.rect(6,-2,4,2);
				this.layer.noStroke();
				this.layer.fill(255,230,145,this.fade);
				this.layer.ellipse(0,-27,24,24);
				this.layer.stroke(0,this.fade);
				this.layer.strokeWeight(3);
				this.layer.point(max(-9,-4+this.anim.direction*6),-26);
				this.layer.point(min(9,4+this.anim.direction*6),-26);
				this.layer.fill(80,85,90,this.fade);
				this.layer.noStroke();
				this.layer.arc(0,-27,30,30,-180,0);
				this.layer.fill(65,130,140,this.fade/2);
				this.layer.rect(max(-9,-4+this.anim.direction*6)/2+min(9,4+this.anim.direction*6)/2,-25,16,4);
			break;
			case 14:
				this.layer.noStroke();
				this.layer.strokeWeight(3);
				this.layer.stroke(0,this.fade);
				this.layer.line(5*this.anim.direction,-8,12*(1-this.anim.trigger)+(5*this.anim.direction-sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
				this.layer.line(3,10,6+sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.line(-3,10,-6-sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.stroke(40,this.fade);
				this.layer.strokeWeight(5);
				this.layer.translate(5*this.anim.direction,-8);
				this.layer.rotate(-atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
				this.layer.line(-2*this.anim.direction,-24,-2*this.anim.direction,-48);
				this.layer.line(-2*this.anim.direction,-24,4*this.anim.direction,-24);
				this.layer.rotate(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
				this.layer.translate(-5*this.anim.direction,8);
				this.layer.strokeWeight(0.5);
				this.layer.noStroke();
				this.layer.fill(0,this.fade);
				this.layer.ellipse(0,-2,16,36);
				this.layer.ellipse(0,-27,24,24);
				this.layer.stroke(255,this.fade);
				this.layer.strokeWeight(3);
				this.layer.point(max(-9,-4+this.anim.direction*6),-26);
				this.layer.point(min(9,4+this.anim.direction*6),-26);
			break;
			case 15:
				this.layer.noStroke();
				this.layer.strokeWeight(3);
				this.layer.stroke(185,180,165,this.fade);
				this.layer.line(5*this.anim.direction,-8,12*(1-this.anim.trigger)+(5*this.anim.direction-sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
				this.layer.line(3,10,6+sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.line(-3,10,-6-sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.stroke(40,this.fade);
				this.layer.translate(5*this.anim.direction,-8);
				this.layer.rotate(-atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
				this.layer.line(-2*this.anim.direction,-24,-2*this.anim.direction,-36);
				this.layer.line(-2*this.anim.direction,-24,4*this.anim.direction,-24);
				this.layer.rotate(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
				this.layer.translate(-5*this.anim.direction,8);
				this.layer.strokeWeight(0.5);
				this.layer.noStroke();
				this.layer.fill(185,180,165,this.fade);
				this.layer.ellipse(0,-2,16,36);
				this.layer.fill(10,10,10,this.fade);
				this.layer.rect(0,-2,16,2);
				this.layer.noStroke();
				this.layer.fill(255,230,145,this.fade);
				this.layer.ellipse(0,-27,24,24);
				this.layer.stroke(0,this.fade);
				this.layer.strokeWeight(3);
				this.layer.point(max(-9,-4+this.anim.direction*6),-26);
				this.layer.point(min(9,4+this.anim.direction*6),-26);
				this.layer.stroke(50,50,200,this.fade);
				this.layer.strokeWeight(4);
				this.layer.point(2,-10);
				this.layer.fill(120,135,95,this.fade);
				this.layer.noStroke();
				this.layer.arc(0,-27,30,30,-180,0);
				this.layer.fill(10,this.fade/2);
				this.layer.rect(max(-9,-4+this.anim.direction*6)/2+min(9,4+this.anim.direction*6)/2,-25,16,4);
			break;
			case 16: case 17: case 20: case 42:
				if(this.type == 42){
					this.layer.fill(120,130,140,this.fade);
					this.layer.stroke(60,65,70,this.fade);
				}
				else{
					this.layer.fill(160,170,180,this.fade);
					this.layer.stroke(80,85,90,this.fade);
				}
				this.layer.strokeWeight(3);
				if(this.type == 20){
					this.layer.rect(0,0,36,24,5);
					this.layer.line(6,12,9-sin(-3+sin(this.rate*12)*15)*3,15);
					this.layer.line(-6,12,-9-sin(-3+sin(this.rate*12)*15)*3,15);
					this.layer.line(6,12,9+sin(-3+sin(this.rate*12)*15)*3,15);
					this.layer.line(-6,12,-9+sin(-3+sin(this.rate*12)*15)*3,15);
				}
				this.layer.ellipse(0,0,20,20);
				if(this.type == 16||this.type == 42){
					for(e=0;e<6;e++){
						this.layer.line(sin(e*60)*10,cos(e*60)*10,sin(e*60)*15,cos(e*60)*15);
					}
				}
				this.layer.stroke(this.anim.trigger*200,this.anim.trigger*50,this.anim.trigger*50,this.fade);
				this.layer.strokeWeight(3.6);
				this.layer.point(0,0);
				this.layer.stroke(0,200,0,this.fade);
				this.layer.strokeWeight(this.anim.attack/3);
				this.layer.point(0,0);
			break;
			case 39: case 40: case 43: case 44: case 45:
				this.layer.fill(60,70,80,this.fade);
				if(this.type == 45){
					this.layer.strokeWeight(9);
					this.layer.stroke(175,75,175,this.fade*this.anim.trigger/2);
					this.layer.point(22*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger);
					this.layer.point(22*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger);
					this.layer.strokeWeight(5);
					this.layer.stroke(175,75,175,this.fade*this.anim.trigger);
					this.layer.point(22*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger);
					this.layer.point(22*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger);
					this.layer.stroke(30,35,40,this.fade);
					this.layer.strokeWeight(4);
					this.layer.line(2,-8,12*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+2-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+2-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger);
					this.layer.line(-2,-8,-12*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x-2-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-2-this.target.position.x,this.position.y-8-this.target.position.y))*22)*this.anim.trigger);
					this.layer.strokeWeight(8);
					this.layer.line(2,-8,12*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+2-this.target.position.x,this.position.y-8-this.target.position.y))*12)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+2-this.target.position.x,this.position.y-8-this.target.position.y))*12)*this.anim.trigger);
					this.layer.line(-2,-8,-12*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x-2-this.target.position.x,this.position.y-8-this.target.position.y))*12)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-2-this.target.position.x,this.position.y-8-this.target.position.y))*12)*this.anim.trigger);
					this.layer.strokeWeight(3);
				}
				else if(this.type == 44){
					this.layer.strokeWeight(9);
					this.layer.stroke(175,75,175,this.fade*this.anim.trigger/2);
					this.layer.point(32*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger);
					this.layer.point(32*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger);
					this.layer.strokeWeight(5);
					this.layer.stroke(175,75,175,this.fade*this.anim.trigger);
					this.layer.point(32*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger);
					this.layer.point(32*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger);
					this.layer.stroke(30,35,40,this.fade);
					this.layer.strokeWeight(4);
					this.layer.line(5,-8,12*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger);
					this.layer.line(-5,-8,-12*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x-5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-5-this.target.position.x,this.position.y-8-this.target.position.y))*32)*this.anim.trigger);
					this.layer.strokeWeight(3);
				}
				else if(this.type == 43){
					this.layer.strokeWeight(9);
					this.layer.stroke(175,75,175,this.fade*this.anim.trigger/2);
					this.layer.point(24*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.point(24*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.strokeWeight(5);
					this.layer.stroke(175,75,175,this.fade*this.anim.trigger);
					this.layer.point(24*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.point(24*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.stroke(30,35,40,this.fade);
					this.layer.strokeWeight(6);
					this.layer.line(4,-8,12*(1-this.anim.trigger)+(4-sin(atan2(this.position.x+4-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+4-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.line(-4,-8,-12*(1-this.anim.trigger)+(-4-sin(atan2(this.position.x-4-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-4-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.strokeWeight(3);
				}
				else if(this.type == 40){
					this.layer.strokeWeight(9);
					this.layer.stroke(175,75,175,this.fade*this.anim.trigger/2);
					this.layer.point(24*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.point(24*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.strokeWeight(5);
					this.layer.stroke(175,75,175,this.fade*this.anim.trigger);
					this.layer.point(24*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.point(24*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.stroke(30,35,40,this.fade);
					this.layer.strokeWeight(4);
					this.layer.line(5,-8,12*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.line(-5,-8,-12*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
					this.layer.strokeWeight(3);
				}
				else if(this.type == 39){
					this.layer.strokeWeight(6);
					this.layer.stroke(175,75,175,this.fade*this.anim.trigger/2);
					this.layer.line(11*(1-this.anim.trigger)+(30+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-18+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(14+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(9+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
					this.layer.strokeWeight(2);
					this.layer.stroke(175,75,175,this.fade*this.anim.trigger);
					this.layer.line(11*(1-this.anim.trigger)+(30+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-18+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(14+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(9+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
					this.layer.stroke(30,35,40,this.fade);
					this.layer.strokeWeight(3);
					this.layer.line(0,-6,(22+this.anim.attack)*this.anim.direction,(-6+this.anim.class)*abs(this.anim.direction));
					this.layer.line(0,-6,(16+this.anim.attack)*this.anim.direction,(3+this.anim.class)*abs(this.anim.direction));
				}
				this.layer.line(sin(this.rate*3)-3-sin(sin(this.rate*3)*15)*32,cos(sin(this.rate*3)*15)*32,sin(this.rate*3)-3,0);
				this.layer.line(-sin(this.rate*3)+3-sin(sin(this.rate*3)*-15)*32,cos(sin(this.rate*3)*-15)*32,-sin(this.rate*3)+3,0);
				this.layer.rect(0,-1,10,22);
				this.layer.ellipse(0,-22,24,24);
				this.layer.stroke(200,50,50,this.fade);
				this.layer.strokeWeight(3.6);
				this.layer.point(max(-4+this.anim.direction*7,-11),-23);
				this.layer.point(min(4+this.anim.direction*7,11),-23);
				this.layer.stroke(100,0,0,this.fade);
				this.layer.strokeWeight(6);
				this.layer.point(2,-6);
				if(this.type == 40||this.type == 43||this.type == 44||this.type == 45){
					this.layer.stroke(255,50,50,this.fade);
					this.layer.strokeWeight(this.anim.attack/3);
					this.layer.point(max(-4+this.anim.direction*7,-11),-23);
					this.layer.point(min(4+this.anim.direction*7,11),-23);
				}
			break;
			case 41:
				this.layer.noStroke();
				this.layer.strokeWeight(3);
				this.layer.stroke(225,this.fade);
				this.layer.line(5*this.anim.direction,-8,12*(1-this.anim.trigger)+(5*this.anim.direction-sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
				this.layer.line(3,10,6+sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.line(-3,10,-6-sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.stroke(40,this.fade);
				this.layer.translate(5*this.anim.direction,-8);
				this.layer.rotate(-atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
				this.layer.line(-2*this.anim.direction,-24,-2*this.anim.direction,-36);
				this.layer.line(-2*this.anim.direction,-24,4*this.anim.direction,-24);
				this.layer.rotate(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
				this.layer.translate(-5*this.anim.direction,8);
				this.layer.strokeWeight(0.5);
				this.layer.noStroke();
				this.layer.fill(225,this.fade);
				this.layer.ellipse(0,-2,16,36);
				this.layer.fill(135,this.fade);
				this.layer.rect(0,-2,16,2);
				this.layer.noStroke();
				this.layer.fill(255,230,145,this.fade);
				this.layer.ellipse(0,-27,24,24);
				this.layer.stroke(0,this.fade);
				this.layer.strokeWeight(3);
				this.layer.point(max(-9,-4+this.anim.direction*6),-26);
				this.layer.point(min(9,4+this.anim.direction*6),-26);
				this.layer.strokeWeight(1);
				this.layer.fill(255,this.fade/4);
				this.layer.ellipse(max(-9,-4+this.anim.direction*6),-25,5,3);
				this.layer.ellipse(min(9,4+this.anim.direction*6),-25,5,3);
				this.layer.line(max(-9,-4+this.anim.direction*6)+2.5,-25,min(9,4+this.anim.direction*6)-2.5,-25);
				this.layer.stroke(50,200,200,this.fade);
				this.layer.strokeWeight(4);
				this.layer.point(2,-10);
			break;
			case 46:
				this.layer.noStroke();
				this.layer.strokeWeight(3);
				this.layer.stroke(100,this.fade);
				this.layer.line(-6,-10,-20,-50);
				this.layer.line(6,-10,20,-50);
				this.layer.line(3,10,6+sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.line(-3,10,-6-sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.strokeWeight(0.5);
				this.layer.noStroke();
				this.layer.fill(100,this.fade);
				this.layer.ellipse(0,-2,16,36);
				this.layer.fill(60,this.fade);
				this.layer.rect(0,-2,16,2);
				this.layer.noStroke();
				this.layer.fill(255,230,145,this.fade);
				this.layer.ellipse(0,-27,24,24);
				this.layer.stroke(0,this.fade);
				this.layer.strokeWeight(3);
				this.layer.point(max(-9,-4+this.anim.direction*6),-26);
				this.layer.point(min(9,4+this.anim.direction*6),-26);
				this.layer.stroke(50,50,200,this.fade);
				this.layer.strokeWeight(4);
				this.layer.point(2,-10);
			break;
			case 47:
				this.layer.fill(160,190,220,this.fade);
				this.layer.stroke(80,95,110,this.fade);
				this.layer.strokeWeight(4);
				this.layer.line(5,-8,12*(1-this.anim.trigger)+(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
				this.layer.line(-5,-8,-12*(1-this.anim.trigger)+(-5-sin(atan2(this.position.x-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x-5-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
				this.layer.strokeWeight(2);
				this.layer.line((5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*16+cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*4)*this.anim.trigger,(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*16-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*4)*this.anim.trigger,(5-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*16+cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*-4)*this.anim.trigger,(-8-cos(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*16-sin(atan2(this.position.x+5-this.target.position.x,this.position.y-8-this.target.position.y))*-4)*this.anim.trigger);
				this.layer.line((-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*16+cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*4)*this.anim.trigger,(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*16-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*4)*this.anim.trigger,(-5-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*16+cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*-4)*this.anim.trigger,(-8-cos(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*16-sin(atan2(this.position.x+-5-this.target.position.x,this.position.y-8-this.target.position.y))*-4)*this.anim.trigger);
				this.layer.strokeWeight(3);
				this.layer.line(sin(this.rate*3)-3-sin(sin(this.rate*3)*15)*32,cos(sin(this.rate*3)*15)*32,sin(this.rate*3)-3,0);
				this.layer.line(-sin(this.rate*3)+3-sin(sin(this.rate*3)*-15)*32,cos(sin(this.rate*3)*-15)*32,-sin(this.rate*3)+3,0);
				this.layer.rect(0,-1,10,22);
				this.layer.ellipse(0,-22,24,24);
				this.layer.stroke(200,50,200,this.fade);
				this.layer.strokeWeight(3.6);
				this.layer.point(max(-4+this.anim.direction*7,-11),-23);
				this.layer.point(min(4+this.anim.direction*7,11),-23);
				this.layer.stroke(255,150,255,this.fade);
				this.layer.strokeWeight(this.anim.attack/3);
				this.layer.point(max(-4+this.anim.direction*7,-11),-23);
				this.layer.point(min(4+this.anim.direction*7,11),-23);
				this.layer.stroke(100,0,100,this.fade);
				this.layer.strokeWeight(6);
				this.layer.point(2,-6);
			break;
			case 48:
				this.layer.noStroke();
				this.layer.strokeWeight(3);
				this.layer.stroke(140,this.fade);
				this.layer.line(5*this.anim.direction,-8,12*(1-this.anim.trigger)+(5*this.anim.direction-sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
				this.layer.line(3,10,6+sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.line(-3,10,-6-sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.stroke(40,this.fade);
				if(this.anim.trigger>0){
					this.layer.translate(5*this.anim.direction,-8);
					this.layer.scale(this.anim.trigger);
					this.layer.rotate(-atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
					this.layer.line(-3*this.anim.direction,-24,-3*this.anim.direction,-48);
					this.layer.line(-1*this.anim.direction,-24,-1*this.anim.direction,-48);
					this.layer.line(-4*this.anim.direction,-32,-4*this.anim.direction,-36);
					this.layer.line(-3*this.anim.direction,-24,4*this.anim.direction,-24);
					this.layer.line(-3*this.anim.direction,-32,2*this.anim.direction,-32);
					this.layer.line(-3*this.anim.direction,-40,2*this.anim.direction,-40);
					this.layer.rotate(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
					this.layer.scale(1/this.anim.trigger);
					this.layer.translate(-5*this.anim.direction,8);
				}
				this.layer.noStroke();
				this.layer.fill(150,this.fade);
				this.layer.ellipse(0,-2,16,36);
				this.layer.fill(100,this.fade);
				this.layer.rect(-6,-2,4,2);
				this.layer.rect(0,-2,4,2);
				this.layer.rect(6,-2,4,2);
				this.layer.noStroke();
				this.layer.fill(255,230,145,this.fade);
				this.layer.ellipse(0,-27,24,24);
				this.layer.stroke(0,this.fade);
				this.layer.strokeWeight(3);
				this.layer.point(max(-9,-4+this.anim.direction*6),-26);
				this.layer.point(min(9,4+this.anim.direction*6),-26);
				this.layer.fill(120,this.fade);
				this.layer.noStroke();
				this.layer.arc(0,-27,30,30,-180,0);
				this.layer.fill(200,this.fade);
				this.layer.rect(max(-9,-4+this.anim.direction*6)/2+min(9,4+this.anim.direction*6)/2,-25,16,4);
			break;
			case 49:
				this.layer.noStroke();
				this.layer.strokeWeight(3);
				this.layer.stroke(15,this.fade);
				this.layer.line(5*this.anim.direction,-8,12*(1-this.anim.trigger)+(5*this.anim.direction-sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
				this.layer.line(3,10,6+sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.line(-3,10,-6-sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.stroke(40,this.fade);
				if(this.anim.trigger>0){
					this.layer.translate(5*this.anim.direction,-8);
					this.layer.scale(this.anim.trigger);
					this.layer.rotate(-atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
					this.layer.line(-3*this.anim.direction,-24,-3*this.anim.direction,-32);
					this.layer.line(-1*this.anim.direction,-24,-1*this.anim.direction,-32);
					this.layer.line(-3*this.anim.direction,-24,4*this.anim.direction,-24);
					this.layer.rotate(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
					this.layer.scale(1/this.anim.trigger);
					this.layer.translate(-5*this.anim.direction,8);
				}
				this.layer.noStroke();
				this.layer.fill(20,this.fade);
				this.layer.ellipse(0,-2,16,36);
				this.layer.fill(60,this.fade);
				this.layer.rect(-6,-2,4,2);
				this.layer.rect(0,-2,4,2);
				this.layer.rect(6,-2,4,2);
				this.layer.noStroke();
				this.layer.fill(255,230,145,this.fade);
				this.layer.ellipse(0,-27,24,24);
				this.layer.stroke(0,this.fade);
				this.layer.strokeWeight(3);
				this.layer.point(max(-9,-4+this.anim.direction*6),-26);
				this.layer.point(min(9,4+this.anim.direction*6),-26);
				this.layer.stroke(120,this.fade);
				this.layer.strokeWeight(2);
				this.layer.line(this.anim.direction*4,-23,this.anim.direction*4-5,-22);
				this.layer.line(this.anim.direction*4,-23,this.anim.direction*4+5,-22);
				this.layer.fill(40,this.fade);
				this.layer.noStroke();
				this.layer.arc(0,-27,30,30,-180,0);
			break;
			case 50:
				this.layer.scale(5/4);
				this.layer.fill(60,70,80,this.fade);
				this.layer.scale(10/9);
				this.layer.strokeWeight(8);
				this.layer.stroke(175,75,175,this.fade*this.anim.trigger/2);
				this.layer.line(11*(1-this.anim.trigger)+(30+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-18+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(14+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(9+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
				this.layer.strokeWeight(3);
				this.layer.stroke(175,75,175,this.fade*this.anim.trigger);
				this.layer.line(11*(1-this.anim.trigger)+(30+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-18+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(14+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(9+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
				this.layer.stroke(30,35,40,this.fade);
				this.layer.strokeWeight(3);
				this.layer.line(0,-6,(22+this.anim.attack)*this.anim.direction,(-6+this.anim.class)*abs(this.anim.direction));
				this.layer.line(0,-6,(16+this.anim.attack)*this.anim.direction,(3+this.anim.class)*abs(this.anim.direction));
				this.layer.scale(9/10);
				this.layer.line(sin(this.rate*3)-3-sin(sin(this.rate*3)*15)*32,cos(sin(this.rate*3)*15)*32,sin(this.rate*3)-3,0);
				this.layer.line(-sin(this.rate*3)+3-sin(sin(this.rate*3)*-15)*32,cos(sin(this.rate*3)*-15)*32,-sin(this.rate*3)+3,0);
				this.layer.rect(0,-1,10,22);
				this.layer.ellipse(0,-22,24,24);
				this.layer.stroke(200,50,50,this.fade);
				this.layer.strokeWeight(3.6);
				this.layer.point(max(-4+this.anim.direction*7,-11),-23);
				this.layer.point(min(4+this.anim.direction*7,11),-23);
				this.layer.stroke(100,0,0,this.fade);
				this.layer.strokeWeight(6);
				this.layer.point(2,-6);
				this.layer.scale(4/5);
			break;
			case 51:
				this.layer.noStroke();
				this.layer.strokeWeight(3);
				this.layer.stroke(180,150,120,this.fade);
				this.layer.line(5*this.anim.direction,-8,12*(1-this.anim.trigger)+(5*this.anim.direction-sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger,16*(1-this.anim.trigger)+(-8-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24)*this.anim.trigger);
				this.layer.line(3,10,6+sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.line(-3,10,-6-sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.stroke(40,this.fade);
				if(this.anim.trigger>0){
					this.layer.translate(5*this.anim.direction,-8);
					this.layer.scale(this.anim.trigger);
					this.layer.rotate(-atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
					this.layer.line(-3*this.anim.direction,-24,-3*this.anim.direction,-48);
					this.layer.line(-1*this.anim.direction,-24,-1*this.anim.direction,-48);
					this.layer.line(-4*this.anim.direction,-32,-4*this.anim.direction,-36);
					this.layer.line(-3*this.anim.direction,-24,4*this.anim.direction,-24);
					this.layer.line(-3*this.anim.direction,-32,2*this.anim.direction,-32);
					this.layer.line(-3*this.anim.direction,-40,2*this.anim.direction,-40);
					this.layer.rotate(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y));
					this.layer.scale(1/this.anim.trigger);
					this.layer.translate(-5*this.anim.direction,8);
				}
				this.layer.noStroke();
				this.layer.fill(90,this.fade);
				this.layer.rect(0,-2,20,20,3);
				this.layer.fill(255,170,0,this.fade/2);
				this.layer.triangle(-7,8,7,8,0,8-abs(this.velocity.x)*4);
				this.layer.fill(165,135,105,this.fade);
				this.layer.ellipse(0,-2,16,36);
				this.layer.fill(60,50,40,this.fade);
				this.layer.rect(-6,-2,4,2);
				this.layer.rect(0,-2,4,2);
				this.layer.rect(6,-2,4,2);
				this.layer.noStroke();
				this.layer.fill(255,230,145,this.fade);
				this.layer.ellipse(0,-27,24,24);
				this.layer.stroke(0,this.fade);
				this.layer.strokeWeight(3);
				this.layer.point(max(-9,-4+this.anim.direction*6),-26);
				this.layer.point(min(9,4+this.anim.direction*6),-26);
				this.layer.fill(120,this.fade);
				this.layer.noStroke();
				this.layer.arc(0,-27,30,30,-180,0);
				this.layer.fill(200,this.fade);
				this.layer.rect(max(-9,-4+this.anim.direction*6)/2+min(9,4+this.anim.direction*6)/2,-25,16,4);
			break;
			case 52:
				this.layer.stroke(180,this.fade);
				this.layer.fill(120,this.fade);
				this.layer.strokeWeight(4);
				this.layer.rect(0,-50,100,100);
				this.layer.quad(-30,0,-15,0,-25+sin(this.rate*8)*20,120,-40+sin(this.rate*8)*20,120);
				this.layer.quad(30,0,15,0,25-sin(this.rate*8)*20,120,40-sin(this.rate*8)*20,120);
				this.layer.ellipse(0,-30,45,45);
				this.layer.ellipse(0,-30,30,30);
				this.layer.fill(200,this.fade);
				this.layer.rect(0,-75,75,25,5);
				this.layer.stroke(this.anim.trigger*200,this.anim.trigger*50,this.anim.trigger*50,this.fade);
				this.layer.strokeWeight(10.8);
				this.layer.point(0,-30);
				this.layer.stroke(0,200,0,this.fade);
				this.layer.strokeWeight(this.anim.attack);
				this.layer.point(0,-30);
			break;
			case 53:
				this.layer.fill(160,170,180,this.fade);
				this.layer.stroke(80,85,90,this.fade);
				this.layer.strokeWeight(4);
				this.layer.line(sin(this.rate*3)-3-sin(sin(this.rate*3)*15)*48,cos(sin(this.rate*3)*15)*48,sin(this.rate*3)-3,0);
				this.layer.line(-sin(this.rate*3)+3-sin(sin(this.rate*3)*-15)*48,cos(sin(this.rate*3)*-15)*48,-sin(this.rate*3)+3,0);
				this.layer.rect(0,-18,30,60,5);
				this.layer.rect(this.anim.direction*3,-18,15,30,5);
				this.layer.stroke(200,200,50,this.fade);
				this.layer.strokeWeight(3.6);
				this.layer.point(this.anim.direction*3,-24);
				this.layer.point(this.anim.direction*3,-12);
				this.layer.stroke(0,200,0,this.fade);
				this.layer.strokeWeight(this.anim.attack/3);
				this.layer.point(this.anim.direction*3,-24);
				this.layer.point(this.anim.direction*3,-12);
			break;
			case 54:
				this.layer.fill(30,35,40,this.fade);
				this.layer.scale(10/9);
				this.layer.strokeWeight(10);
				this.layer.stroke(125,255,255,this.fade*this.anim.trigger/2);
				this.layer.line(11*(1-this.anim.trigger)+(30+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-18+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(14+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(9+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
				this.layer.strokeWeight(4);
				this.layer.stroke(125,255,255,this.fade*this.anim.trigger);
				this.layer.line(11*(1-this.anim.trigger)+(30+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-18+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(14+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(9+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
				this.layer.stroke(15,20,25,this.fade);
				this.layer.strokeWeight(3);
				this.layer.line(0,-6,(22+this.anim.attack)*this.anim.direction,(-6+this.anim.class)*abs(this.anim.direction));
				this.layer.line(0,-6,(16+this.anim.attack)*this.anim.direction,(3+this.anim.class)*abs(this.anim.direction));
				this.layer.scale(9/10);
				this.layer.line(sin(this.rate*3)-3-sin(sin(this.rate*3)*15)*32,cos(sin(this.rate*3)*15)*32,sin(this.rate*3)-3,0);
				this.layer.line(-sin(this.rate*3)+3-sin(sin(this.rate*3)*-15)*32,cos(sin(this.rate*3)*-15)*32,-sin(this.rate*3)+3,0);
				this.layer.rect(0,-1,10,22);
				this.layer.ellipse(0,-22,24,24);
				this.layer.stroke(100,250,250,this.fade);
				this.layer.strokeWeight(3.6);
				this.layer.point(max(-4+this.anim.direction*7,-11),-23);
				this.layer.point(min(4+this.anim.direction*7,11),-23);
				this.layer.stroke(0,100,150,this.fade);
				this.layer.strokeWeight(6);
				this.layer.point(2,-6);
			break;
			case 55:
				this.layer.noStroke();
				this.layer.strokeWeight(3);
				this.layer.stroke(240,this.fade);
				this.layer.line(3,10,6+sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.line(-3,10,-6-sin(-3+sin(this.rate*12)*15)*10,48);
				this.layer.strokeWeight(2);
				this.layer.stroke(160,170,180,this.fade*this.anim.trigger);
				this.layer.line(11*(1-this.anim.trigger)+(38+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-30+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(18+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(3+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
				this.layer.strokeWeight(3);		
				this.layer.stroke(125,70,80,this.fade*this.anim.trigger);
				this.layer.line(11*(1-this.anim.trigger)+(18+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(3+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(16+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(6+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
				this.layer.stroke(240,this.fade);
				this.layer.line(5*(1-this.anim.trigger),-6,11*(1-this.anim.trigger)+(22+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-6+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
				this.layer.line(-5*(1-this.anim.trigger),-6,-11*(1-this.anim.trigger)+(16+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(3+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
				this.layer.noStroke();
				this.layer.fill(225,this.fade);
				this.layer.ellipse(0,-2,16,36);
				this.layer.fill(200,this.fade);
				this.layer.rect(0,-2,16,2);
				this.layer.noStroke();
				this.layer.fill(255,230,145,this.fade);
				this.layer.ellipse(0,-27,24,24);
				this.layer.stroke(0,this.fade);
				this.layer.strokeWeight(3);
				this.layer.point(max(-9,-4+this.anim.direction*6),-26);
				this.layer.point(min(9,4+this.anim.direction*6),-26);
				this.layer.stroke(255,255,100,this.fade);
				this.layer.strokeWeight(4);
				this.layer.point(2,-10);
			break;
		}
		this.layer.translate(-this.position.x,-this.position.y);
	}
	update(){
		super.update();
		for(c=0;c<min(entities.players.length,1);c++){
			this.target.position = entities.players[c].position;
		}
		this.inputs[0] = false;
		this.inputs[1] = false;
		if(dist(this.position.x,this.position.y,this.target.position.x,this.target.position.y)<max(this.attack.detail.range+300,150)){
			this.status.active = true;
		}
		if(this.position.y == stage.edge.y||this.sides[0]&&this.sides[1]||this.sides[2]&&this.sides[3]){
			this.life = 0;
		}
		this.sides = [false,false,false,false];
		if(this.life<=0){
			levelDetail[stage.zone].enemy[this.id] = 1;
			if(this.fade<=0){
				if(this.type == 52){
					entities.enemies.push(new enemy(this.layer,this.position.x,this.position.y,15,0));
				}
				this.remove = true;
			}
		}
		if(this.status.active||this.type == 46||this.type == 54||this.type == 55){
			switch(this.type){
				case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: case 18: case 19: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 43: case 44: case 45: case 50: case 55:
 					if(this.type == 12||this.type == 13||this.type == 14){
						this.attack.trigger = true;
					}
					if(this.type == 14&&this.timers[1]<895){
						this.fade = min(this.fade,constrain(abs(this.velocity.x+this.velocity.y)-1,0,1));
					}
					if(dist(this.position.x,this.position.y,this.target.position.x,this.target.position.y)<this.attack.detail.range&&this.attack.detail.stop){
						this.velocity.x*=this.attack.detail.speed;
						if(this.attack.timer<=0){
							this.attack.trigger = true;
						}
						if(this.anim.trigger>=1&&this.attack.timer == 0&&floor(random(0,30)) == 0){
							this.attack.timer = entityTypes.attack[this.attack.detail.class].time;
							this.attack.class = this.attack.detail.class;
						}
					}
					if(dist(this.position.x,this.position.y,this.target.position.x,this.target.position.y)<this.attack.detail.range&&!this.attack.detail.stop){
						if(this.attack.timer<=0){
							this.attack.trigger = true;
						}
						if(this.anim.trigger>=1&&this.attack.timer == 0&&floor(random(0,30)) == 0){
							this.attack.timer = entityTypes.attack[this.attack.detail.class].time;
							this.attack.class = this.attack.detail.class;
						}
					}
					else{
						this.attack.trigger = true;
						if(this.target.position.x<this.position.x&&dist(this.position.x,this.position.y,this.target.position.x,this.target.position.y)>min(40,this.attack.detail.range)){
							this.inputs[0] = true;
						}
						else if(this.target.position.x>this.position.x&&dist(this.position.x,this.position.y,this.target.position.x,this.target.position.y)>min(40,this.attack.detail.range)){
							this.inputs[1] = true;
						}
					}
					if(this.target.position.x<this.position.x){
						this.target.anim.direction = -1;
					}
					if(this.target.position.x>this.position.x){
						this.target.anim.direction = 1;
					}
				break;
				case 16: case 20: case 42:
					if(this.type == 20){
						if(this.time%120<30||this.time%120>=90){
							this.inputs[0] = true;
						}
						else{
							this.inputs[1] = true;
						}
					}
					if(dist(this.position.x,this.position.y,this.target.position.x,this.target.position.y)<this.attack.detail.range&&this.attack.detail.stop){
						if(this.attack.timer == 0){
							this.attack.trigger = true;
						}
						if(this.anim.trigger>=1&&this.attack.timer == 0){
							this.attack.timer = entityTypes.attack[this.attack.detail.class].time;
							this.attack.class = this.attack.detail.class;
						}
					}
				break;
				case 46:
					if(floor(random(0,15)) == 0){
						this.mode = 1-this.mode;
					}
					this.inputs[this.mode] = true;
				break;
				case 47: case 48: case 49: case 50: case 51: case 52: case 53: case 54:
					this.status.active = true;
					if(floor(random(0,15)) == 0){
						this.mode = floor(random(0,3));
					}
					if(floor(random(0,120)) == 0&&this.type !== 52){
						this.inputs[2] = true;
					}
					if(floor(random(0,60)) == 0){
						this.attack.want = floor(random(0,this.attack.list.length));
					}
					if(this.type == 48){
						this.attack.trigger = true;
					}
					if(this.type == 54){
						if(this.attack.want<=1){
							this.attack.detail.range = 50;
						}
						else{
							this.attack.detail.range = 600;
						}
					}
					if(dist(this.target.position.x,this.target.position.y,this.position.x,this.position.y)<this.attack.detail.range){
						if(this.mode !== 2){
							this.inputs[this.mode] = true;
						}
						if(this.attack.timer<=0){
							this.attack.trigger = true;
						}
						if(this.anim.trigger>=1&&this.attack.timer == 0&&(floor(random(0,30)) == 0||this.type == 54)&&this.time%300<180){
							this.damage = this.attack.damage[this.attack.want];
							this.attack.timer = entityTypes.attack[this.attack.list[this.attack.want]].time;
							this.attack.class = this.attack.list[this.attack.want];
						}
						if(this.type == 54){
							this.velocity.x*=0.8;
						}
					}
					else{
						if(this.target.position.x<this.position.x&&dist(this.position.x,this.position.y,this.target.position.x,this.target.position.y)>min(40,this.attack.detail.range)){
							this.inputs[0] = true;
						}
						else if(this.target.position.x>this.position.x&&dist(this.position.x,this.position.y,this.target.position.x,this.target.position.y)>min(40,this.attack.detail.range)){
							this.inputs[1] = true;
						}
					}
					if(this.target.position.x<this.position.x){
						this.target.anim.direction = -1;
					}
					if(this.target.position.x>this.position.x){
						this.target.anim.direction = 1;
					}
					if(this.position.x<=0){
						this.mode = 1;
					}
					else if(this.position.x>=stage.edge.x){
						this.mode = 0;
					}
					if(this.type == 51&&this.position.y>150&&this.time%300<180){
						this.inputs[2] = true;
					}
				break;
			}
		}
	}
}
