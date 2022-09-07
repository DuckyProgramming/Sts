class projectile extends entity{
	constructor(layer,x,y,type,direction,damage,team){
		super(layer,x,y,type,entityTypes.projectile[type].size,entityTypes.projectile[type].size);
		this.size = entityTypes.projectile[type].size;
		this.speed = entityTypes.projectile[type].speed;
		this.timed = entityTypes.projectile[type].time;
		this.direction = direction;
		this.damage = damage;
		this.team = team;
		this.trigger = false;
		this.boost = {explosion:1};
	}
	display(){
		this.layer.translate(this.position.x,this.position.y);
		this.layer.rotate(this.direction);
		this.layer.scale(this.size);
		this.layer.noStroke();
		switch(this.type){ 
			case 0: case 1: case 4: case 7:
				this.layer.stroke(0,200,0,this.fade);
				if(stage.level == 8){
					this.layer.stroke(0,200,200,this.fade);
				}
				this.layer.strokeWeight(0.4);
				this.layer.line(0,1,0,-1);
			break;
			case 2:
				this.layer.fill(60,this.fade);
				this.layer.triangle(-1,1.5,1,1.5,0,-2);
				this.layer.fill(100,0,this.fade);
				this.layer.ellipse(0,0,0.5,0.5);
			break;
			case 3: case 8:
				this.layer.stroke(0,200,0,this.fade);
				this.layer.strokeWeight(0.4);
				this.layer.line(0,1.5,0,-1.5);
			break;
			case 5: case 6: case 9:
				this.layer.stroke(0,200,0,this.fade);
				this.layer.strokeWeight(0.8);
				this.layer.line(0,1,0,-1);
			break;
			case 10:
				this.layer.fill(60,this.fade);
				this.layer.ellipse(0,0,2,2);
				this.layer.fill(255,this.fade);
				this.layer.ellipse(0,0,1,1);
			break;
			case 11:
				this.layer.stroke(100,255,255,this.fade);
				this.layer.strokeWeight(0.4);
				this.layer.rotate(this.time*15);
				this.layer.line(0,1,0,-1);
				this.layer.rotate(60);
				this.layer.line(0,1,0,-1);
				this.layer.rotate(60);
				this.layer.line(0,1,0,-1);
				this.layer.rotate(-this.time*15-120);
			break;
			case 12:
				this.layer.stroke(255,155,55,this.fade);
				this.layer.strokeWeight(0.4);
				this.layer.rotate(this.time*15);
				this.layer.line(0,1,0,-1);
				this.layer.rotate(60);
				this.layer.line(0,1,0,-1);
				this.layer.rotate(60);
				this.layer.line(0,1,0,-1);
				this.layer.rotate(-this.time*15-120);
			break;
		}
		this.layer.scale(1/this.size);
		this.layer.rotate(-this.direction);
		this.layer.translate(-this.position.x,-this.position.y);
	}
	displayHit(){
		if(this.type == 10){
			stage.blind = 1.25;
			entities.particles.push(new particle(this.layer,this.position.x,this.position.y,2,0,sqrt(this.damage)*this.boost.explosion,1,[0,0,0]));
		}
		else{
			entities.particles.push(new particle(this.layer,this.position.x,this.position.y,1,0,sqrt(this.damage)*this.boost.explosion,1,[0,0,0]));
		}
	}
	update(){
		super.update();
		this.position.x+=sin(this.direction)*this.speed;
		this.position.y-=cos(this.direction)*this.speed;
		if(!this.trigger&&this.fade<1){
			this.fade+=0.25;
		}
		else if(this.trigger&&this.fade>0){
			this.fade-=0.25;
			if(this.fade<=0){
				this.remove = true;
			}
		}
		if(this.timed>0){
			this.timed--;
		}
		else{
			this.trigger = true;
		}
		if(!this.trigger){
			if(this.team == 0){
				this.collideWith = [entities.enemies];
			}
			else{
				this.collideWith = [entities.players];
			}
			for(c=0;c<this.collideWith.length;c++){
				for(d=0;d<this.collideWith[c].length;d++){
					if(circleInsideBox(this.collideWith[c][d],this)&&this.collideWith[c][d].life>0&&!this.trigger&&(this.damage>0||this.type == 10)){
						if(this.type == 2||this.type == 10){
							this.boost.explosion*=5;
							this.displayHit();
							this.trigger = true;
							splashZone([entities.enemies,entities.players],this.position,100,this.damage);
						}
						else if(this.collideWith[c][d].status.parry&&side(this.collideWith[c][d].anim.direction) != side(sin(this.direction)*this.speed)){
							this.team = 0;
							this.direction+=random(178,182);
						}
						else if(this.collideWith[c][d].status.block&&this.collideWith[c][d].block>0&&side(this.collideWith[c][d].anim.direction) != side(sin(this.direction)*this.speed)){
							this.team = 0;
							this.direction+=random(120,240);
							this.collideWith[c][d].block-=this.damage;
						}
						else{
							this.trigger = true;
							if(stage.level != 8||this.team == 0){
								this.collideWith[c][d].life-=this.damage;
							}
							this.displayHit();
						}
					}
				}
			}
		}
	}
}
