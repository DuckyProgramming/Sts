class player extends partisan{
	constructor(layer,x,y,type){
		super(layer,x,y,type,18,81,100,50,15+type*5,3,0.5,0,0);
		this.fades = {outside:1,damageTaken:1};
		this.memoryB.push({position:{x:this.position.x,y:this.position.y},anim:{direction:this.anim.direction},rate:this.rate});
	}
	display(){
		this.layer.translate(this.position.x,this.position.y);
		if(this.type == -1){
			this.layer.strokeWeight(3);
			this.layer.stroke(180,110,120,this.fade*this.fades.outside);
			for(c=3;c<this.memory.length-1;c++){
				this.layer.line((this.memory[c].position.x-this.position.x)*(1-abs(this.velocity.x)/20),this.memory[c].position.y-this.position.y+(this.memory.length-c)-40+c*4,(this.memory[c+1].position.x-this.position.x)*(1-abs(this.velocity.x)/20),this.memory[c+1].position.y-this.position.y+(this.memory.length-c-1)-36+c*4);
			}
			for(d=0;d<5;d++){
				this.layer.stroke(135,150+d*12,195+d*8,this.fade*this.fades.outside);
				for(c=0;c<this.memory.length-1;c++){
					for(g=0;g<4;g++){
						if(c>=d+g*2){
							this.layer.line((this.memory[c].position.x-this.position.x)*(1-abs(this.velocity.x)/20),this.memory[c].position.y-this.position.y+(this.memory.length-c)*(g+1)*(d+1)-8+d*4,(this.memory[c+1].position.x-this.position.x)*(1-abs(this.velocity.x)/20),this.memory[c+1].position.y-this.position.y+(this.memory.length-c-1)*(g+1)*(d+1)-8+d*4);
						}
					}
				}
			}
			this.layer.noStroke();
			this.layer.fill(50,25,40,this.fade);
			this.layer.triangle(-10,-27,10,-27,-this.anim.direction*24,12);
			this.layer.fill(90,40,50,this.fade);
			this.layer.triangle(cos(this.anim.direction*30)*14,-sin(this.anim.direction*30)*14-27,cos(this.anim.direction*30)*-14,-sin(this.anim.direction*30)*-14-27,0,-9);
			this.layer.fill(165,160,185,this.fade*this.fades.outside);
			if(this.anim.direction<0){
				this.layer.quad(-6,-18,6,-18,14-this.anim.direction*7,16+this.anim.direction*3,-14-this.anim.direction*16,16-this.anim.direction*3);
			}
			else{
				this.layer.quad(-6,-18,6,-18,14-this.anim.direction*16,16+this.anim.direction*3,-14-this.anim.direction*7,16-this.anim.direction*3);
			}
			this.layer.strokeWeight(2);
			this.layer.stroke(160,170,180,this.fade*this.anim.trigger);
			this.layer.line(11*(1-this.anim.trigger)+(38+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-30+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(18+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(3+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
			this.layer.strokeWeight(3);		
			this.layer.stroke(150,160,196,this.fade*this.fades.damageTaken);
			this.layer.line(3+sin(-3+sin(this.rate*4)*15)*30,10+cos(-3+sin(this.rate*4)*15)*30,3+sin(-3+sin(this.rate*4)*15)*31,10+cos(-3+sin(this.rate*4)*15)*31);
			this.layer.line(-3-sin(-3+sin(this.rate*4)*15)*30,10+cos(-3+sin(this.rate*4)*15)*30,-3-sin(-3+sin(this.rate*4)*15)*31,10+cos(-3+sin(this.rate*4)*15)*31);		
			this.layer.stroke(125,70,80,this.fade*this.anim.trigger);
			this.layer.line(11*(1-this.anim.trigger)+(18+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(3+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(16+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(6+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
			this.layer.stroke(250,200,175,this.fade);
			this.layer.line(5*(1-this.anim.trigger),-6,11*(1-this.anim.trigger)+(22+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-6+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
			this.layer.line(-5*(1-this.anim.trigger),-6,-11*(1-this.anim.trigger)+(16+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(3+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
			this.layer.line(3,10,3+sin(-3+sin(this.rate*4)*15)*30,10+cos(-3+sin(this.rate*4)*15)*30);
			this.layer.strokeWeight(0.5);
			this.layer.stroke(95,55,65,this.fade*this.fades.damageTaken);
			this.layer.line(3+sin(-3+sin(this.rate*4)*15)*29.5+sin(87+sin(this.rate*4)*15)*1.5,10+cos(-3+sin(this.rate*4)*15)*29.5+cos(87+sin(this.rate*4)*15)*1.5,3+sin(-3+sin(this.rate*4)*15)*31.25,10+cos(-3+sin(this.rate*4)*15)*31.25);
			this.layer.line(3+sin(-3+sin(this.rate*4)*15)*29.5-sin(87+sin(this.rate*4)*15)*1.5,10+cos(-3+sin(this.rate*4)*15)*29.5-cos(87+sin(this.rate*4)*15)*1.5,3+sin(-3+sin(this.rate*4)*15)*31.25,10+cos(-3+sin(this.rate*4)*15)*31.25);
			this.layer.strokeWeight(3);
			this.layer.stroke(250,200,175,this.fade);
			this.layer.line(-3,10,-3-sin(-3+sin(this.rate*4)*15)*30,10+cos(-3+sin(this.rate*4)*15)*30);
			this.layer.strokeWeight(1);
			this.layer.stroke(165,100,100,this.fade*this.fades.outside);
			this.layer.line(-3-sin(-3+sin(this.rate*4)*15)*6-cos(-3+sin(this.rate*4)*15)*2,10+cos(-3+sin(this.rate*4)*15)*6-sin(-3+sin(this.rate*4)*15)*2,-3-sin(-3+sin(this.rate*4)*15)*6+cos(-3+sin(this.rate*4)*15)*2,10+cos(-3+sin(this.rate*4)*15)*6+sin(-3+sin(this.rate*4)*15)*2);
			this.layer.strokeWeight(0.5);
			this.layer.stroke(95,55,65,this.fade*this.fades.damageTaken);
			this.layer.line(-3-sin(-3+sin(this.rate*4)*15)*29.5-sin(87+sin(this.rate*4)*15)*1.5,10+cos(-3+sin(this.rate*4)*15)*29.5+cos(87+sin(this.rate*4)*15)*1.5,-3-sin(-3+sin(this.rate*4)*15)*31.25,10+cos(-3+sin(this.rate*4)*15)*31.25);
			this.layer.line(-3-sin(-3+sin(this.rate*4)*15)*29.5+sin(87+sin(this.rate*4)*15)*1.5,10+cos(-3+sin(this.rate*4)*15)*29.5-cos(87+sin(this.rate*4)*15)*1.5,-3-sin(-3+sin(this.rate*4)*15)*31.25,10+cos(-3+sin(this.rate*4)*15)*31.25);
			this.layer.noStroke();
			this.layer.fill(255,210,195,this.fade);
			this.layer.ellipse(0,-4,14,32);
			this.layer.fill(250,195,170,this.fade);
			this.layer.ellipse(-4+this.anim.direction,-9,8,8);
			this.layer.ellipse(4+this.anim.direction,-9,8,8);
			this.layer.stroke(0,this.fade);
			this.layer.strokeWeight(1);
			this.layer.point(-4+this.anim.direction*3,-8);
			this.layer.point(4+this.anim.direction*3,-8);
			this.layer.point(this.anim.direction*3,2);
			this.layer.stroke(245,180,145,this.fade);
			this.layer.line(0,11.5,0,10);
			this.layer.noStroke();
			this.layer.fill(90,70,85,this.fade*this.fades.outside);
			this.layer.quad(-6,-18,6,-18,9,12,-9,12);
			this.layer.fill(100,80,95,this.fade*this.fades.outside);
			this.layer.quad(-2,-18,2,-18,3-this.anim.direction*3,12,-3-this.anim.direction*3,12);
			this.layer.fill(90,70,85,this.fade*this.fades.outside);
			this.layer.ellipse(-3+this.anim.direction,-9,10,10);
			this.layer.ellipse(3+this.anim.direction,-9,10,10);
			this.layer.fill(185,120,130,this.fade*this.fades.outside);
			if(this.anim.direction<=0&&this.anim.direction>=-0.1){
				this.layer.quad(-6,-18,-4+this.anim.direction*20,-18,-12+this.anim.direction*4,17.5+this.anim.direction*3,-14-this.anim.direction*16,16-this.anim.direction*3);
			}
			if(this.anim.direction>=0&&this.anim.direction<=0.1){
				this.layer.quad(4+this.anim.direction*20,-18,6,-18,14-this.anim.direction*16,16+this.anim.direction*3,12+this.anim.direction*4,17.5-this.anim.direction*3);
			}
			if(this.anim.direction<0){
				this.layer.quad(3+this.anim.direction*4,-18,6,-18,14-this.anim.direction*7,16+this.anim.direction*3,12+this.anim.direction*4,17.5-this.anim.direction*3);
			}
			if(this.anim.direction>0){
				this.layer.quad(-6,-18,-3+this.anim.direction*4,-18,-12+this.anim.direction*4,17.5+this.anim.direction*3,-14-this.anim.direction*7,16-this.anim.direction*3);
			}
			this.layer.fill(255,215,190,this.fade);
			this.layer.ellipse(0,-27,24,24);
			this.layer.translate(0,-27);
			this.layer.rotate(-this.anim.direction*30);
			this.layer.fill(185,100,100,this.fade);
			this.layer.triangle(0,-12,-8,-8,-8,-16);
			this.layer.triangle(0,-12,8,-8,8,-16);
			this.layer.fill(90,40,50,this.fade);
			this.layer.arc(0,0,28,28,-180,0);
			this.layer.fill(255,215,190,this.fade);
			this.layer.arc(0,0.5,24,9,-180,0);
			this.layer.rotate(this.anim.direction*30);
			this.layer.translate(0,27);
			this.layer.stroke(195,165,160,this.fade);
			this.layer.strokeWeight(4);
			this.layer.point(max(-9,-4+this.anim.direction*6),-26);
			this.layer.point(min(9,4+this.anim.direction*6),-26);
			this.layer.stroke(140,80,90,this.fade);
			this.layer.strokeWeight(3);
			this.layer.point(max(-9.5,-3.5+this.anim.direction*6+min(0,this.anim.direction)),-25.5);
			this.layer.point(min(9.5,3.5+this.anim.direction*6+max(0,this.anim.direction)),-25.5);
		}
		else if(this.type == -2){
			this.layer.translate(0,9);
			this.layer.strokeWeight(3);
			this.layer.stroke(110,180,120,this.fade*this.fades.outside);
			for(c=3;c<this.memory.length-1;c++){
				this.layer.line((this.memory[c].position.x-this.position.x)*(1-abs(this.velocity.x)/20),this.memory[c].position.y-this.position.y+(this.memory.length-c)-40+c*4,(this.memory[c+1].position.x-this.position.x)*(1-abs(this.velocity.x)/20),this.memory[c+1].position.y-this.position.y+(this.memory.length-c-1)-36+c*4);
			}
			for(d=0;d<5;d++){
				this.layer.stroke(135,195+d*8,150+d*12,this.fade*this.fades.outside);
				for(c=0;c<this.memory.length-1;c++){
					for(g=0;g<4;g++){
						if(c>=d+g*2){
							this.layer.line((this.memory[c].position.x-this.position.x)*(1-abs(this.velocity.x)/20),this.memory[c].position.y-this.position.y+(this.memory.length-c)*(g+1)*(d+1)-8+d*4,(this.memory[c+1].position.x-this.position.x)*(1-abs(this.velocity.x)/20),this.memory[c+1].position.y-this.position.y+(this.memory.length-c-1)*(g+1)*(d+1)-8+d*4);
						}
					}
				}
			}
			this.layer.noStroke();
			this.layer.fill(25,50,40,this.fade);
			this.layer.triangle(-10,-24,10,-24,-this.anim.direction*24,9);
			this.layer.fill(40,90,50,this.fade);
			this.layer.triangle(cos(this.anim.direction*30)*14,-sin(this.anim.direction*30)*14-24,cos(this.anim.direction*30)*-14,-sin(this.anim.direction*30)*-14-24,0,-9);
			this.layer.scale(0.8);
			this.layer.fill(160,185,165,this.fade*this.fades.outside);
			if(this.anim.direction<0){
				this.layer.quad(-6,-18,6,-18,14-this.anim.direction*7,16+this.anim.direction*3,-14-this.anim.direction*16,16-this.anim.direction*3);
			}
			else{
				this.layer.quad(-6,-18,6,-18,14-this.anim.direction*16,16+this.anim.direction*3,-14-this.anim.direction*7,16-this.anim.direction*3);
			}
			this.layer.strokeWeight(2);
			this.layer.stroke(160,170,180,this.fade*this.anim.trigger);
			this.layer.line(11*(1-this.anim.trigger)+(38+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-30+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(18+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(3+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
			this.layer.strokeWeight(3);		
			this.layer.stroke(150,160,196,this.fade*this.fades.damageTaken);
			this.layer.line(3+sin(-3+sin(this.rate*4)*15)*30,10+cos(-3+sin(this.rate*4)*15)*30,3+sin(-3+sin(this.rate*4)*15)*31,10+cos(-3+sin(this.rate*4)*15)*31);
			this.layer.line(-3-sin(-3+sin(this.rate*4)*15)*30,10+cos(-3+sin(this.rate*4)*15)*30,-3-sin(-3+sin(this.rate*4)*15)*31,10+cos(-3+sin(this.rate*4)*15)*31);		
			this.layer.stroke(125,70,80,this.fade*this.anim.trigger);
			this.layer.line(11*(1-this.anim.trigger)+(18+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(3+this.anim.class)*this.anim.trigger*abs(this.anim.direction),-11*(1-this.anim.trigger)+(16+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(6+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
			this.layer.stroke(250,200,175,this.fade);
			this.layer.line(5*(1-this.anim.trigger),-6,11*(1-this.anim.trigger)+(22+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(-6+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
			this.layer.line(-5*(1-this.anim.trigger),-6,-11*(1-this.anim.trigger)+(16+this.anim.attack)*this.anim.trigger*this.anim.direction,18*(1-this.anim.trigger)+(3+this.anim.class)*this.anim.trigger*abs(this.anim.direction));
			this.layer.line(3,10,3+sin(-3+sin(this.rate*4)*15)*30,10+cos(-3+sin(this.rate*4)*15)*30);
			this.layer.strokeWeight(0.5);
			this.layer.stroke(55,95,65,this.fade*this.fades.damageTaken);
			this.layer.line(3+sin(-3+sin(this.rate*4)*15)*29.5+sin(87+sin(this.rate*4)*15)*1.5,10+cos(-3+sin(this.rate*4)*15)*29.5+cos(87+sin(this.rate*4)*15)*1.5,3+sin(-3+sin(this.rate*4)*15)*31.25,10+cos(-3+sin(this.rate*4)*15)*31.25);
			this.layer.line(3+sin(-3+sin(this.rate*4)*15)*29.5-sin(87+sin(this.rate*4)*15)*1.5,10+cos(-3+sin(this.rate*4)*15)*29.5-cos(87+sin(this.rate*4)*15)*1.5,3+sin(-3+sin(this.rate*4)*15)*31.25,10+cos(-3+sin(this.rate*4)*15)*31.25);
			this.layer.strokeWeight(3);
			this.layer.stroke(250,200,175,this.fade);
			this.layer.line(-3,10,-3-sin(-3+sin(this.rate*4)*15)*30,10+cos(-3+sin(this.rate*4)*15)*30);
			this.layer.strokeWeight(1);
			this.layer.stroke(100,165,100,this.fade*this.fades.outside);
			this.layer.line(-3-sin(-3+sin(this.rate*4)*15)*6-cos(-3+sin(this.rate*4)*15)*2,10+cos(-3+sin(this.rate*4)*15)*6-sin(-3+sin(this.rate*4)*15)*2,-3-sin(-3+sin(this.rate*4)*15)*6+cos(-3+sin(this.rate*4)*15)*2,10+cos(-3+sin(this.rate*4)*15)*6+sin(-3+sin(this.rate*4)*15)*2);
			this.layer.strokeWeight(0.5);
			this.layer.stroke(55,95,65,this.fade*this.fades.damageTaken);
			this.layer.line(-3-sin(-3+sin(this.rate*4)*15)*29.5-sin(87+sin(this.rate*4)*15)*1.5,10+cos(-3+sin(this.rate*4)*15)*29.5+cos(87+sin(this.rate*4)*15)*1.5,-3-sin(-3+sin(this.rate*4)*15)*31.25,10+cos(-3+sin(this.rate*4)*15)*31.25);
			this.layer.line(-3-sin(-3+sin(this.rate*4)*15)*29.5+sin(87+sin(this.rate*4)*15)*1.5,10+cos(-3+sin(this.rate*4)*15)*29.5-cos(87+sin(this.rate*4)*15)*1.5,-3-sin(-3+sin(this.rate*4)*15)*31.25,10+cos(-3+sin(this.rate*4)*15)*31.25);
			this.layer.noStroke();
			this.layer.fill(255,210,195,this.fade);
			this.layer.ellipse(0,-4,14,32);
			this.layer.fill(250,195,170,this.fade);
			this.layer.ellipse(-4+this.anim.direction,-9,8,8);
			this.layer.ellipse(4+this.anim.direction,-9,8,8);
			this.layer.stroke(0,this.fade);
			this.layer.strokeWeight(1);
			this.layer.point(-4+this.anim.direction*3,-8);
			this.layer.point(4+this.anim.direction*3,-8);
			this.layer.point(this.anim.direction*3,2);
			this.layer.stroke(245,180,145,this.fade);
			this.layer.line(0,11.5,0,10);
			this.layer.noStroke();
			this.layer.fill(70,90,85,this.fade*this.fades.outside);
			this.layer.quad(-6,-18,6,-18,9,12,-9,12);
			this.layer.fill(80,100,95,this.fade*this.fades.outside);
			this.layer.quad(-2,-18,2,-18,3-this.anim.direction*3,12,-3-this.anim.direction*3,12);
			this.layer.fill(70,90,85,this.fade*this.fades.outside);
			this.layer.ellipse(-3+this.anim.direction,-9,10,10);
			this.layer.ellipse(3+this.anim.direction,-9,10,10);
			this.layer.fill(120,185,130,this.fade*this.fades.outside);
			if(this.anim.direction<=0&&this.anim.direction>=-0.1){
				this.layer.quad(-6,-18,-4+this.anim.direction*20,-18,-12+this.anim.direction*4,17.5+this.anim.direction*3,-14-this.anim.direction*16,16-this.anim.direction*3);
			}
			if(this.anim.direction>=0&&this.anim.direction<=0.1){
				this.layer.quad(4+this.anim.direction*20,-18,6,-18,14-this.anim.direction*16,16+this.anim.direction*3,12+this.anim.direction*4,17.5-this.anim.direction*3);
			}
			if(this.anim.direction<0){
				this.layer.quad(3+this.anim.direction*4,-18,6,-18,14-this.anim.direction*7,16+this.anim.direction*3,12+this.anim.direction*4,17.5-this.anim.direction*3);
			}
			if(this.anim.direction>0){
				this.layer.quad(-6,-18,-3+this.anim.direction*4,-18,-12+this.anim.direction*4,17.5+this.anim.direction*3,-14-this.anim.direction*7,16-this.anim.direction*3);
			}
			this.layer.scale(1.25);
			this.layer.fill(255,215,190,this.fade);
			this.layer.ellipse(0,-24,24,24);
			this.layer.translate(0,-24);
			this.layer.rotate(-this.anim.direction*30);
			this.layer.fill(100,185,100,this.fade);
			this.layer.triangle(0,-12,-8,-8,-8,-16);
			this.layer.triangle(0,-12,8,-8,8,-16);
			this.layer.fill(40,90,50,this.fade);
			this.layer.arc(0,0,28,28,-180,0);
			this.layer.fill(255,215,190,this.fade);
			this.layer.arc(0,0.5,24,9,-180,0);
			this.layer.rotate(this.anim.direction*30);
			this.layer.translate(0,24);
			this.layer.stroke(160,195,165,this.fade);
			this.layer.strokeWeight(4);
			this.layer.point(max(-9,-4+this.anim.direction*6),-23);
			this.layer.point(min(9,4+this.anim.direction*6),-23);
			this.layer.stroke(80,140,90,this.fade);
			this.layer.strokeWeight(3);
			this.layer.point(max(-9.5,-3.5+this.anim.direction*6+min(0,this.anim.direction)),-22.5);
			this.layer.point(min(9.5,3.5+this.anim.direction*6+max(0,this.anim.direction)),-22.5);
			this.layer.translate(0,-9);
		}
		this.layer.translate(-this.position.x,-this.position.y);
	}
	update(){
		if(this.type == -1){
			stage.focus.x = this.position.x;
			stage.focus.y = this.position.y;
		}
		super.update();
		if(this.type == -1){
			for(e=0;e<4;e++){
				if(inputs.keys[e]||inputs.specialKeys[e]){
					this.inputs[e] = true;
				}
				else{
					this.inputs[e] = false;
				}
			}
		}
		else{
			this.position.x = entities.players[0].memoryB[0].position.x;
			this.position.y = entities.players[0].memoryB[0].position.y;
			this.anim.trigger = entities.players[0].memory[0].anim.trigger;
			this.anim.direction = entities.players[0].memoryB[0].anim.direction;
			this.rate = entities.players[0].memoryB[0].rate;
			if(entities.players[0].memory[0].collect.attack == -1||entities.players[0].memory[0].collect.attack == -2){
				this.attack.timer = 12;
				this.attack.class = entities.players[0].memory[0].collect.attack;
			}
			else if(entities.players[0].memory[0].collect.attack == -3){
				this.attack.timer = 36;
				this.attack.class = entities.players[0].memory[0].collect.attack;
			}
		}
		if(this.inputs[0]){
			this.target.anim.direction = -1;
		}
		if(this.inputs[1]){
			this.target.anim.direction = 1;
		}
		if(this.life<this.base.life&&this.fades.damageTaken>0){
			this.fades.damageTaken-=0.1;
		}
		if(this.timers[2] == 0){
			this.block = min(this.block+this.base.block/900,this.base.block);
			this.collect.block = this.block;
		}
		if((this.position.y == stage.edge.y||this.sides[0]&&this.sides[1]||this.sides[2]&&this.sides[3])&&!transition.trigger){
			this.life-=10;
			transition.trigger = true;
			transition.spawn = 0;
		}
		this.sides = [false,false,false,false];
		if(this.life<=0){
			transition.trigger = true;
			transition.spawn = -1;
		}
	}
}
