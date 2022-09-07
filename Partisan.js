class partisan extends entity{
	constructor(layer,x,y,type,width,height,life,block,damage,speed,push,parry,physics){
		super(layer,x,y,type,width,height);
		this.velocity = {x:0,y:0};
		this.previous.move = 0;
		this.inputs = [false,false,false,false];
		this.timers = [0,0,0,0,0];
		this.fade = 0;
		this.rate = 0;
		this.life = life;
		this.block = block;
		this.damage = damage;
		this.speed = speed;
		this.push = push;
		this.parry = parry;
		this.physics = physics;
		this.memory = [];
		this.memoryB = [];
		this.sides = [false,false,false,false];
		this.attack = {class:0,timer:0,trigger:0,box:{position:{x:0,y:0},width:0,height:0},count:0};
		this.status = {block:false,parry:false,vulnerable:false,active:false,airborne:false};
		this.base = {life:this.life,block:this.block,parry:this.parry};
		this.anim = {attack:0,trigger:0,class:0,direction:0};
		this.target = {position:{x:0,y:0},anim:{direction:0}};
		this.collect = {life:this.life,block:this.block,attack:0};
		this.break = {timer:0};
		this.position.y-=this.height/2;
	}
	update(){
		super.update();
		this.memory.push({position:{x:this.position.x,y:this.position.y},anim:{trigger:this.anim.trigger},collect:{attack:this.collect.attack}});
		if(abs(this.velocity.x)>0.1||abs(this.velocity.y)>0.5){
			this.memoryB.push({position:{x:this.position.x,y:this.position.y},anim:{direction:this.anim.direction},rate:this.rate});
		}
		this.collect.attack = 0;
		this.position.x+=this.velocity.x;
		this.position.y+=this.velocity.y;
		if(this.physics != 1){
			this.velocity.y+=physics.gravity;
		}
		this.velocity.x*=physics.resistance;
		this.velocity.y*=physics.resistance;
		this.rate+=this.velocity.x;
		this.position.x = constrain(this.position.x,0,stage.edge.x);
		this.position.y = constrain(this.position.y,0,stage.edge.y);
		for(e=0;e<this.timers.length;e++){
			if(this.timers[e]>0){
				this.timers[e]--;
			}
		}
		if(this.life>0&&this.fade<1&&this.attack.class !== 41){
			this.fade+=0.1;
		}
		else if(this.life<=0&&this.fade>0){
			this.fade-=0.1;
		}
		if(this.attack.trigger&&this.anim.trigger<1){
			this.anim.trigger = round(this.anim.trigger*10+1)/10;
		}
		else if(!this.attack.trigger&&this.anim.trigger>0){
			this.anim.trigger = round(this.anim.trigger*10-1)/10;
		}
		if(this.attack.trigger>=1&&this.previous.move == -1&&this.anim.direction>-1){
			this.target.anim.direction-=0.05;
		}
		if(this.attack.trigger>=1&&this.previous.move == 1&&this.anim.direction<1){
			this.target.anim.direction+=0.05;
		}
		this.status = {block:false,parry:false,vulnerable:false,active:this.status.active,airborne:this.status.airborne};
		if(this.break.timer>0&&this.life>0&&this.timers[4]<=0){
			this.break.timer--;
			this.velocity.x+=-this.anim.direction/10;
			if(this.attack.class != -3){
				this.anim.class = 0;
				this.anim.attack = 0;
				if(this.attack.timer>0||this.type>=0){
					this.attack.trigger = false;
				}
			}
			if(this.break.timer == 0){
				this.block = this.base.block;
				this.parry = this.base.parry;
				this.collect.block = this.block;
			}
			this.inputs[0] = false;
			this.inputs[1] = false;
			this.status.vulnerable = true;
		}
		if(this.attack.timer>0&&this.life>0&&this.timers[4]<=0){
			this.attack.timer = round(this.attack.timer-1);
			switch(this.attack.class){
				case -1: case -2:
					this.status.vulnerable = true;
					if(this.attack.timer>=6){
						this.anim.attack++;
						this.anim.class+=-3-this.attack.class*2;
					}
					else{
						this.anim.attack--;
						this.anim.class+=3+this.attack.class*2;
					}
					if(this.attack.timer == 6){
						this.attack.box = {position:{x:this.position.x+this.anim.direction*24,y:this.position.y-6},width:36,height:24};
						for(c=0;c<entities.enemies.length;c++){
							if(boxInsideBox(this.attack.box,entities.enemies[c])){
								if(entities.enemies[c].block>0&&side(entities.enemies[c].anim.direction) != side(this.anim.direction)&&!entities.enemies[c].status.vulnerable&&entities.enemies[c].parry<=1){
									this.block-=this.damage;
									if(this.block<=0){
										entities.enemies[c].parry = entities.enemies[c].base.parry;
									}
									entities.enemies[c].attack.timer = 36;
									entities.enemies[c].attack.class = -3;
									entities.enemies[c].anim.attack = 0;
									entities.enemies[c].anim.class = 0;
								}
								else if(entities.enemies[c].block>0&&side(entities.enemies[c].anim.direction) != side(this.anim.direction)&&!entities.enemies[c].status.vulnerable){
									entities.enemies[c].block-=this.damage;
									entities.enemies[c].parry--;
									entities.enemies[c].attack.timer = 126;
									entities.enemies[c].attack.class = -3;
									entities.enemies[c].anim.attack = 0;
									entities.enemies[c].anim.class = 0;
								}
								else{
									entities.enemies[c].life-=this.damage;
									entities.enemies[c].velocity.x+=this.anim.direction*6*entities.enemies[c].push;
									entities.enemies[c].velocity.y+=(-12-8*this.attack.class)*entities.enemies[c].push;
									entities.enemies[c].timers[3] = 1;
									entities.enemies[c].status.airborne = true;
								}
							}
						}
						for(c=0;c<entities.walls.length;c++){
							if(boxInsideBox(this.attack.box,entities.walls[c])&&!entities.walls.break&&entities.walls[c].type == 4){
								entities.walls[c].break = true;
							}
						}
					}
				break;
				case -3:
					if(this.attack.timer>=30&&this.attack.timer<36||this.attack.timer>=120){
						this.anim.attack--;
					}
					else if(this.attack.timer<12&&this.attack.timer>=6){
						this.anim.attack++;
					}
					else if(this.attack.timer<14&&this.attack.timer>=12&&inputs.keys[4]){
						this.attack.timer++;
					}
					if(this.attack.timer>=21){
						this.status.parry = true;
					}
					if(this.attack.timer>=12&&this.block>0){
						this.status.block = true;
					}
					if(this.attack.timer === 120){
						this.attack.timer = 12;
					}
				break;
				case 0: case 19: case 25:
					if(this.attack.timer>=105){
						this.anim.attack++;
					}
					else if(this.attack.timer>=90){
						this.anim.attack--;
					}
					if(this.attack.timer == 105&&this.attack.class == 25){
						entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,7,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
					}
					else if(this.attack.timer == 105||this.attack.class == 19&&this.attack.timer == 95){
						entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,0,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
						this.attack.count++;
					}
					this.status.vulnerable = true;
				break;
				case 1: case 21: case 31:
					if(this.attack.timer>=36){
						this.anim.attack-=0.25;
					}
					if(this.attack.timer>=24&&this.attack.timer<36){
						this.anim.attack++;
					}
					if(this.attack.timer>=18&&this.attack.timer<24){
						this.anim.attack--;
					}
					if(this.attack.timer>=18&&this.attack.class != 31){
						this.status.vulnerable = true;
					}
					if(this.attack.timer == 24){
						this.attack.box = {position:{x:this.position.x+this.anim.direction*24,y:this.position.y-6},width:36,height:24};
						for(c=0;c<entities.players.length;c++){
							if(boxInsideBox(this.attack.box,entities.players[c])){
								this.hit(entities.players[c]);
							}
						}
					}
				break;
				case 2: case 23:
					if(this.attack.timer>=285){
						this.anim.attack++;
					}
					else if(this.attack.timer>=120&&this.attack.timer<135){
						this.anim.attack--;
					}
					if(this.attack.timer>=150&&this.attack.timer<210&&(this.attack.timer%10 == 0||this.attack.timer%5 == 0&&this.attack.class == 23)){
						entities.projectiles.push(new projectile(this.layer,this.position.x-4*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-4*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-4*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,1,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
						this.attack.count++;
					}
					if(this.attack.timer>=120){
						this.status.vulnerable = true;
					}
				break;
				case 3: case 33:
					if(this.attack.timer>=225){
						this.anim.attack++;
					}
					else if(this.attack.timer>=210){
						this.anim.attack--;
					}
					if(this.attack.timer == 225){
						entities.projectiles.push(new projectile(this.layer,this.position.x-3*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-3*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-3*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,2,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
						if(this.attack.class == 33){
							entities.projectiles.push(new projectile(this.layer,this.position.x-3*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-3*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-3*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,2,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y)-10,this.damage,1));
							entities.projectiles.push(new projectile(this.layer,this.position.x-3*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-3*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-3*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,2,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y)+10,this.damage,1));
						}
						this.attack.count++;
					}
					this.status.vulnerable = true;
				break;
				case 4:
					if(this.attack.timer>=165){
						this.anim.attack++;
					}
					else if(this.attack.timer>=150){
						this.anim.attack--;
					}
					if(this.attack.timer == 165){
						entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,3,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
						this.attack.count++;
					}
					this.status.vulnerable = true;
				break;
				case 5: case 27:
					if(this.attack.timer>=135){
						this.anim.attack++;
					}
					else if(this.attack.timer>=120){
						this.anim.attack--;
					}
					if(this.attack.timer == 135){
						for(c=0;c<6;c++){
							entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,5,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y)+random(-5,5),this.damage,1));
							entities.projectiles[entities.projectiles.length-1].speed*=random(0.8,1.2);
						}
						this.attack.count++;
					}
					if(this.attack.timer == 135&&this.attack.class == 27){
						for(c=0;c<4;c++){
							entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,6,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y)+random(-5,5),this.damage,1));
							entities.projectiles[entities.projectiles.length-1].speed*=random(0.8,1.2);
						}
						this.attack.count++;
					}
					this.status.vulnerable = true;
				break;
				case 6: case 20: case 26:
					if(this.attack.timer>=75){
						this.anim.attack++;
					}
					else if(this.attack.timer>=60){
						this.anim.attack--;
					}
					if(this.attack.timer == 75&&this.attack.class == 26){
						entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,7,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
					}
					else if(this.attack.timer == 75||this.attack.class == 20&&this.attack.timer == 65){
						entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,0,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
						this.attack.count++;
					}
					this.status.vulnerable = true;
				break;
				case 7: case 22: case 32:
					if(this.attack.timer>=24){
						this.anim.attack-=0.25;
					}
					if(this.attack.timer>=12&&this.attack.timer<24){
						this.anim.attack++;
					}
					if(this.attack.timer>=6&&this.attack.timer<12){
						this.anim.attack--;
					}
					if(this.attack.timer>=6&&this.attack.class != 32){
						this.status.vulnerable = true;
					}
					if(this.attack.timer == 12){
						this.attack.box = {position:{x:this.position.x+this.anim.direction*18,y:this.position.y-6},width:36,height:24};
						for(c=0;c<entities.players.length;c++){
							if(boxInsideBox(this.attack.box,entities.players[c])&&side(entities.players[c].anim.direction) != side(this.anim.direction)){
								this.hit(entities.players[c]);
							}
						}
					}
				break;
				case 8: case 24: case 36:
					if(this.attack.timer>=165){
						this.anim.attack++;
					}
					else if(this.attack.timer<15){
						this.anim.attack--;
					}
					if(this.attack.timer>=30&&this.attack.timer<90&&this.attack.timer%10 == 0&&this.attack.class == 36){
						entities.projectiles.push(new projectile(this.layer,this.position.x-4*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-4*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-4*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,0,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
						this.attack.count++;
					}
					else if(this.attack.timer>=30&&this.attack.timer<90&&(this.attack.timer%10 == 0||this.attack.timer%5 == 0&&this.attack.class == 24)){
						entities.projectiles.push(new projectile(this.layer,this.position.x-4*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-4*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-4*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,1,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
						this.attack.count++;
					}
					this.status.vulnerable = true;
				break;
				case 9: case 34:
					if(this.attack.timer>=135){
						this.anim.attack++;
					}
					else if(this.attack.timer>=120){
						this.anim.attack--;
					}
					if(this.attack.timer == 135){
						entities.projectiles.push(new projectile(this.layer,this.position.x-3*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-3*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-3*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,2,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
						if(this.attack.class == 34){
							entities.projectiles.push(new projectile(this.layer,this.position.x-3*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-3*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-3*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,2,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y)-10,this.damage,1));
							entities.projectiles.push(new projectile(this.layer,this.position.x-3*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-3*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-3*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,2,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y)+10,this.damage,1));
						}
						this.attack.count++;
					}
					this.status.vulnerable = true;
				break;
				case 10: case 37:
					if(this.attack.timer>=105){
						this.anim.attack++;
					}
					else if(this.attack.timer>=90){
						this.anim.attack--;
					}
					if(this.attack.timer == 105&&this.attack.class == 37){
						entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,8,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
						this.attack.count++;
					}
					else if(this.attack.timer == 105){
						entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,3,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
						this.attack.count++;
					}
					this.status.vulnerable = true;
				break;
				case 11: case 28: case 38:
					if(this.attack.timer>=90){
						this.anim.attack++;
					}
					else if(this.attack.timer>=75){
						this.anim.attack--;
					}
					if(this.attack.timer == 90&&this.attack.class == 38){
						for(c=0;c<8;c++){
							entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,9,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y)+random(-5,5),this.damage,1));
							entities.projectiles[entities.projectiles.length-1].speed*=random(0.8,1.2);
						}
					}
					else{
						if(this.attack.timer == 90){
							for(c=0;c<6;c++){
								entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,5,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y)+random(-5,5),this.damage,1));
								entities.projectiles[entities.projectiles.length-1].speed*=random(0.8,1.2);
							}
							this.attack.count++;
						}
						if(this.attack.timer == 90&&this.attack.class == 28){
							for(c=0;c<4;c++){
								entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,6,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y)+random(-5,5),this.damage,1));
								entities.projectiles[entities.projectiles.length-1].speed*=random(0.8,1.2);
							}
						}
					}
					this.attack.count++;
					this.status.vulnerable = true;
				break;
				case 12:
					if(this.attack.timer == 60){
						entities.projectiles.push(new projectile(this.layer,this.position.x+5*this.anim.direction-sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*2*this.anim.direction,this.position.y-8-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*24+sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*2*this.anim.direction,0,-atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y),this.damage,1));
					}
					this.status.vulnerable = true;
				break;
				case 13: case 39: case 40:
					if(this.attack.timer == 30&&this.attack.class == 40){
						entities.projectiles.push(new projectile(this.layer,this.position.x-5*this.anim.direction-sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,this.position.y-6-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24+sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,10,-atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
					}
					else if(this.attack.timer == 30||this.attack.timer == 25&&this.attack.class == 13){
						entities.projectiles.push(new projectile(this.layer,this.position.x-5*this.anim.direction-sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,this.position.y-6-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24+sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,0,-atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
						if(this.attack.class == 39){
							entities.projectiles.push(new projectile(this.layer,this.position.x-5*this.anim.direction-sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,this.position.y-6-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24+sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,0,-atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y)-3,this.damage,1));
							entities.projectiles.push(new projectile(this.layer,this.position.x-5*this.anim.direction-sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,this.position.y-6-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24+sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,0,-atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y)+3,this.damage,1));
							entities.projectiles.push(new projectile(this.layer,this.position.x-5*this.anim.direction-sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,this.position.y-6-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24+sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,0,-atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y)-6,this.damage,1));
							entities.projectiles.push(new projectile(this.layer,this.position.x-5*this.anim.direction-sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,this.position.y-6-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24+sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,0,-atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y)+6,this.damage,1));
						}
					}
					this.status.vulnerable = true;
				break;
				case 14:
					if(this.attack.timer == 195){
						entities.projectiles.push(new projectile(this.layer,this.position.x-5*this.anim.direction-sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,this.position.y-6-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24+sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,4,-atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
					}
					this.status.vulnerable = true;
				break;
				case 15:
					if(this.attack.timer>=105){
						this.anim.attack++;
					}
					else if(this.attack.timer>=90){
						this.anim.attack--;
					}
					if(this.attack.timer == 105){
						entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y,0,-atan2(this.position.x-this.target.position.x,this.position.y-this.target.position.y),this.damage,1));
						this.attack.count++;
					}
					this.status.vulnerable = true;
				break;
				case 16:
					if(this.attack.timer>=6){
						this.anim.attack++;
					}
					else if(this.attack.timer>=2){
						this.anim.attack--;
					}
					this.status.block = true;
					this.status.vulnerable = true;
					if(this.attack.timer == 6){
						this.attack.box = {position:{x:this.position.x+this.anim.direction,y:this.position.y},width:36,height:36};
						for(c=0;c<entities.players.length;c++){
							if(boxInsideBox(this.attack.box,entities.players[c])){
								this.hit(entities.players[c]);
							}
						}
					}
				break;
				case 17:
					if(this.attack.timer>=135){
						this.anim.attack++;
					}
					else if(this.attack.timer<15){
						this.anim.attack--;
					}
					if(this.attack.timer>=30&&this.attack.timer<90&&this.attack.timer%10 == 0){
						entities.projectiles.push(new projectile(this.layer,this.position.x+5*this.anim.direction-sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*32-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*2*this.anim.direction,this.position.y-8-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*32+sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*2*this.anim.direction,1,-atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y)+random(-5,5),this.damage,1));
						this.attack.count++;
					}
					this.status.vulnerable = true;
				break;
				case 18:
					if(this.attack.timer>=150){
						this.anim.attack++;
					}
					else if(this.attack.timer>=135){
						this.anim.attack--;
					}
					if(this.attack.timer == 120){
						entities.projectiles.push(new projectile(this.layer,this.position.x+5*this.anim.direction-sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*32-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*2*this.anim.direction,this.position.y-8-cos(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*32+sin(atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y))*2*this.anim.direction,2,-atan2(this.position.x+5*this.anim.direction-this.target.position.x,this.position.y-8-this.target.position.y),this.damage,1));
						this.attack.count++;
					}
					this.status.vulnerable = true;
				break;
				case 29:
					if(this.attack.timer == 30||this.attack.timer == 25){
						entities.projectiles.push(new projectile(this.layer,this.position.x-5*this.anim.direction-sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,this.position.y-6-cos(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*24+sin(atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y))*2*this.anim.direction,7,-atan2(this.position.x-5*this.anim.direction-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
					}
					this.status.vulnerable = true;
				break;
				case 30:
					if(this.attack.timer>=60){
						this.anim.attack++;
					}
					else if(this.attack.timer>=45){
						this.anim.attack--;
					}
					if(this.attack.timer == 60){
						for(c=0;c<6;c++){
							entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*32,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*32,5,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y)+random(-5,5),this.damage,1));
							entities.projectiles[entities.projectiles.length-1].speed*=random(0.8,1.2);
						}
						this.attack.count++;
					}
					this.status.vulnerable = true;
				break;
				case 35:
					if(this.attack.timer>=30){
						this.anim.attack++;
					}
					else if(this.attack.timer>=15){
						this.anim.attack--;
					}
					if(this.attack.timer == 30){
						entities.projectiles.push(new projectile(this.layer,this.position.x-5*((this.attack.count%2)*2-1)-sin(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,this.position.y-6-cos(atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y))*24,7,-atan2(this.position.x-5*((this.attack.count%2)*2-1)-this.target.position.x,this.position.y-6-this.target.position.y),this.damage,1));
					}
					this.status.vulnerable = true;
				break;
				case 41:
					if(this.attack.timer>=55&&this.fade>0){
						this.fade-=0.2;
					}
					else if(this.attack.timer<5&&this.fade<1){
						this.fade+=0.2;
					}
					this.velocity.x+=this.speed*(1-this.mode*2)/5;
				break;
				case 42:
					if(this.attack.timer>=72){
						this.anim.attack-=0.25;
					}
					if(this.attack.timer>=48&&this.attack.timer<60){
						this.anim.attack+=2;
					}
					if(this.attack.timer>=36&&this.attack.timer<48){
						this.anim.attack--;
					}
					if(this.attack.timer>=36){
						this.status.vulnerable = true;
					}
					if(this.attack.timer == 48){
						this.attack.box = {position:{x:this.position.x+this.anim.direction*36,y:this.position.y-6},width:54,height:36};
						for(c=0;c<entities.players.length;c++){
							if(boxInsideBox(this.attack.box,entities.players[c])){
								this.hit(entities.players[c]);
							}
						}
					}
				break;
				case 43: case 44: case 45:
					if(this.attack.timer>=165){
						this.anim.attack++;
					}
					if((this.attack.timer == 75||this.attack.timer == 70||this.attack.timer == 65)&&this.attack.class == 43){
						entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y-35,0,atan2(this.target.position.x-this.position.x,this.position.y-35-this.target.position.y),this.damage,1));
					}
					else if(this.attack.timer == 75&&this.attack.class == 44){
						entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y-35,2,atan2(this.target.position.x-this.position.x,this.position.y-35-this.target.position.y),this.damage,1));
					}
					else if((this.attack.timer == 75||this.attack.timer == 70)&&this.attack.class == 45){
						entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y-35,4,atan2(this.target.position.x-this.position.x,this.position.y-35-this.target.position.y),this.damage,1));
					}
					if(this.attack.timer>=60&&this.attack.timer<75){
						this.anim.attack--;
					}
				break;
				case 46: case 47:
					if(this.attack.timer>=105){
						this.anim.attack++;
					}
					if((this.attack.timer>=60&&this.attack.timer<75&&this.attack.timer%3 == 0)&&this.attack.class == 46){
						entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y-12,0,atan2(this.target.position.x-this.position.x,this.position.y-12-this.target.position.y),this.damage,1));
						entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y-24,0,atan2(this.target.position.x-this.position.x,this.position.y-24-this.target.position.y),this.damage,1));
					}
					else if(this.attack.timer == 75&&this.attack.class == 47){
						for(c=0;c<6;c++){
							entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y-12,5,atan2(this.target.position.x-this.position.x,this.position.y-12-this.target.position.y)+random(-5,5),this.damage,1));
							entities.projectiles[entities.projectiles.length-1].speed*=random(0.8,1.2);
							entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y-24,5,atan2(this.target.position.x-this.position.x,this.position.y-24-this.target.position.y)+random(-5,5),this.damage,1));
							entities.projectiles[entities.projectiles.length-1].speed*=random(0.8,1.2);
						}
					}
					if(this.attack.timer>=60&&this.attack.timer<75){
						this.anim.attack--;
					}
				break;
				case 48:
					if(this.attack.timer>=45){
						this.anim.attack++;
					}
					this.velocity.x+=this.speed*(1-this.mode*2)/5;
					if(this.attack.timer == 30||this.attack.timer == 40||this.attack.timer == 20){
						this.attack.box = {position:{x:this.position.x+this.anim.direction,y:this.position.y},width:48,height:48};
						for(c=0;c<entities.players.length;c++){
							if(boxInsideBox(this.attack.box,entities.players[c])){
								this.hit(entities.players[c]);
							}
						}
					}
					if(this.attack.timer<15){
						this.anim.attack--;
					}
				break;
				case 49:
					if(this.attack.timer>=36){
						this.anim.attack-=0.25;
					}
					if(this.attack.timer>=18&&this.attack.timer<36){
						this.anim.attack++;
					}
					if(this.attack.timer>=9&&this.attack.timer<18){
						this.anim.attack--;
					}
					if(this.attack.timer>=9){
						this.status.vulnerable = true;
					}
					if(this.attack.timer == 18){
						this.attack.box = {position:{x:this.position.x+this.anim.direction*21,y:this.position.y-6},width:42,height:24};
						for(c=0;c<entities.players.length;c++){
							if(boxInsideBox(this.attack.box,entities.players[c])&&side(entities.players[c].anim.direction) != side(this.anim.direction)){
								this.hit(entities.players[c]);
							}
						}
					}
				break;
				case 50:
					if(this.attack.timer>=24){
						this.anim.attack-=0.25;
					}
					if(this.attack.timer>=12&&this.attack.timer<24){
						this.anim.attack+=2;
					}
					if(this.attack.timer>=6&&this.attack.timer<12){
						this.anim.attack-=2;
					}
					if(this.attack.timer>=6&&this.attack.class != 32){
						this.status.vulnerable = true;
					}
					if(this.attack.timer == 12&&this.anim.direction>0){
						entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y,11,90,this.damage,1));
					}
					else if(this.attack.timer == 12&&this.anim.direction<=0){
						entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y,11,270,this.damage,1));
					}
				break;
				case 51:
					if(this.attack.timer>=24){
						this.anim.attack-=0.5;
					}
					if(this.attack.timer>=12&&this.attack.timer<24){
						this.anim.attack+=2;
					}
					if(this.attack.timer>=6&&this.attack.timer<12){
						this.anim.attack-=2;
					}
					if(this.attack.timer>=6&&this.attack.class != 32){
						this.status.vulnerable = true;
					}
					if(this.attack.timer == 12){
						this.attack.box = {position:{x:this.position.x+this.anim.direction*30,y:this.position.y-6},width:60,height:36};
						for(c=0;c<entities.players.length;c++){
							if(boxInsideBox(this.attack.box,entities.players[c])&&side(entities.players[c].anim.direction) != side(this.anim.direction)){
								this.hit(entities.players[c]);
							}
						}
					}
					if(this.attack.timer == 12&&this.anim.direction>0){
						for(c=0;c<5;c++){
							entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y,12,70+c*10,this.damage/12,1));
						}
					}
					else if(this.attack.timer == 12&&this.anim.direction<=0){
						for(c=0;c<5;c++){
							entities.projectiles.push(new projectile(this.layer,this.position.x,this.position.y,12,250+c*10,this.damage/12,1));
						}
					}
				break;
			}
		}
		this.life = max(this.life,0);
		this.block = max(this.block,0);
		if(this.life<this.collect.life){
			this.collect.life = this.life;
			this.timers[1] = 900;
		}
		if(this.block<this.collect.block){
			if(this.block<=0){
				if(this.type == 50){
					this.break.timer = 240;
				}
				else{
					this.break.timer = 120;
				}
			}
			this.collect.block = this.block;
			this.timers[2] = 900;
		}
		if(this.life<0){
			this.block = 0;
		}
		if(this.time>=8){
			this.memory.splice(0,1);
		}
		if(this.memoryB.length>24){
			this.memoryB.splice(0,1);
		}
		if(abs(this.anim.direction-this.target.anim.direction)<0.1){
			this.anim.direction = this.target.anim.direction;
		}
		else if(this.anim.direction>this.target.anim.direction){
			this.anim.direction = max(this.anim.direction-0.1,-1);
		}
		else if(this.anim.direction<this.target.anim.direction){
			this.anim.direction = min(this.anim.direction+0.1,1);
		}
		if(this.inputs[0]&&!(this.attack.class == -4&&this.attack.timer>0)&&this.timers[4]<=0){
			this.velocity.x-=this.speed/10-this.speed*this.anim.trigger/40;
			this.target.anim.direction = -1;
			this.previous.move = -1;
		}
		if(this.inputs[1]&&!(this.attack.class == -4&&this.attack.timer>0)&&this.timers[4]<=0){
			this.velocity.x+=this.speed/10-this.speed*this.anim.trigger/40;
			this.target.anim.direction = 1;
			this.previous.move = 1;
		}
		if(this.inputs[2]&(this.timers[0]>0||this.type == 51)&&this.timers[4]<=0){
			if(this.type == 51){
				this.velocity.y = -4;
			}
			else{
				this.velocity.y = -12;
			}
			this.timers[0] = 0;
		}
		if(!this.inputs[0]&&!this.inputs[1]){
			this.target.anim.direction*=0.95;
		}
		for(e=0;e<4;e++){
			this.inputs[e] = false;
		}
	}
	displayLife(){
		this.layer.translate(this.previous.position.x,this.previous.position.y);
		this.layer.noStroke();
		this.layer.fill(0,this.fade);
		this.layer.rect(0,-this.height/2-20,62,10,5);
		this.layer.fill(150,this.fade);
		this.layer.rect(0,-this.height/2-20,60,8,4);
		this.layer.fill(min(255,510-max(0,this.life)/this.base.life*510)-max(0,5-max(0,this.life)/this.base.life*30)*25,max(0,this.life)/this.base.life*510,0,this.fade);
		this.layer.rect((max(0,this.life)/this.base.life)*30-30,-this.height/2-20,(max(0,this.life)/this.base.life)*60,min((max(0,this.life)/this.base.life)*120,8),4);
		this.layer.fill(0,this.fade);
		this.layer.textSize(8);
		this.layer.text(max(0,ceil(this.life))+"/"+max(0,ceil(this.base.life)),0,-this.height/2-19);
		if(this.base.block>0){
			this.layer.noStroke();
			this.layer.fill(0,this.fade);
			this.layer.rect(0,-this.height/2-34,62,10,5);
			this.layer.fill(150,this.fade);
			this.layer.rect(0,-this.height/2-34,60,8,4);
			this.layer.fill(0,(max(0,this.block)/this.base.block)*255,255,this.fade);
			this.layer.rect((max(0,this.block)/this.base.block)*30-30,-this.height/2-34,(max(0,this.block)/this.base.block)*60,min((max(0,this.block)/this.base.block)*120,8),4);
			this.layer.fill(0,this.fade);
			this.layer.textSize(8);
			this.layer.text(max(0,ceil(this.block))+"/"+max(0,ceil(this.base.block)),0,-this.height/2-33);
		}
		this.layer.translate(-this.previous.position.x,-this.previous.position.y);
	}
	hit(target){
		if(target.status.parry){
			this.block-=this.damage;
		}
		else if(target.status.block&&target.block>0&&side(target.anim.direction) != side(this.anim.direction)){
			target.block-=this.damage;
		}
		else{
			target.life-=this.damage;
			target.velocity.x+=this.anim.direction*4*target.push;
			if(this.attack.class == 21||this.attack.class == 22){
				target.timers[4] = 30;
				entities.particles.push(new particle(this.layer,target.position.x,target.position.y,2,0,100,1,[125,255,125]));
			}
		}
	}
}
