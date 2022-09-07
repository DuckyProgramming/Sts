function side(move){
	if(move == 0){
		return 0;
	}
	else{
		return abs(move)/move;
	}
}
function splashZone(check,center,range,damage){
	for(e=0;e<check.length;e++){
		for(f=0;f<check[e].length;f++){
			if(dist(center.x,center.y,check[e][f].position.x,check[e][f].position.y)<range){
				check[e][f].life-=damage*(1-dist(center.x,center.y,check[e][f].position.x,check[e][f].position.y)/range);
				check[e][f].velocity.x+=sin(atan2(check[e][f].position.x-center.x,check[e][f].position.y-center.y))*sqrt(damage)*check[e][f].push;
				check[e][f].velocity.y+=cos(atan2(check[e][f].position.x-center.x,check[e][f].position.y-center.y))*sqrt(damage)*check[e][f].push;
			}
		}
	}
}
function rotatePoint(point,direction,origin){
	return {x:dist(point.x-origin.x,point.y-origin.y,0,0)*sin(atan2(point.x-origin.x,point.y-origin.y)+direction),y:dist(point.x-origin.x,point.y-origin.y,0,0)*cos(atan2(point.x-origin.x,point.y-origin.y)+direction)};
}
function pushPoint(point,origin,size){
	if(dist(point.x,point.y,origin.x,origin.y)>size){
		return {x:point.x,y:point.y};
	}
	else{
		return {x:origin.x+sin(atan2(point.x-origin.x,point.y-origin.y))*size,y:origin.y+cos(atan2(point.x-origin.x,point.y-origin.y))*size};
	}
}
function circleInsideLine(line,circle,direction){
	if(dist(rotatePoint(circle.position,direction,line.position).x,rotatePoint(circle.position,direction,line.position).y,0,constrain(rotatePoint(circle.position,direction,line.position).y,0,line.length))<circle.size){
		return true;
	}
	else{
		return false;
	}
}
function circleRotateInsideBox(box,circle,direction){
	if(dist(rotatePoint(circle.position,direction,box.position).x,rotatePoint(circle.position,direction,box.position).y,constrain(rotatePoint(circle.position,direction,box.position).x,-box.width/2,box.width/2),constrain(rotatePoint(circle.position,direction,box.position).y,-box.height/2,box.height/2))<circle.size){
		return true;
	}
	else{
		return false;
	}
}
function circleCollideBox(box,circle){
	return pushPoint(circle.position,{x:constrain(circle.position.x,box.position.x-box.width/2,box.position.x+box.width/2),y:constrain(circle.position.y,box.position.y-box.height/2,box.position.y+box.height/2)},circle.size);
}
function circleCollideLine(line,circle,direction){
	collision.incident.x = pushPoint(rotatePoint(circle.position,direction,line.position),{x:0,y:constrain(rotatePoint(circle.position,direction,line.position).y,0,line.length)},circle.size).x;
	collision.incident.y = pushPoint(rotatePoint(circle.position,direction,line.position),{x:0,y:constrain(rotatePoint(circle.position,direction,line.position).y,0,line.length)},circle.size).y;
	return {x:rotatePoint(collision.incident,-direction,{x:0,y:0}).x+line.position.x,y:rotatePoint(collision.incident,-direction,{x:0,y:0}).y+line.position.y};
}
function circleRotateCollideBox(box,circle,direction){
	collision.incident.x = pushPoint(rotatePoint(circle.position,direction,box.position),{x:constrain(rotatePoint(circle.position,direction,box.position).x,-box.width/2,box.width/2),y:constrain(rotatePoint(circle.position,direction,box.position).y,-box.height/2,box.height/2)},circle.size).x;
	collision.incident.y = pushPoint(rotatePoint(circle.position,direction,box.position),{x:constrain(rotatePoint(circle.position,direction,box.position).x,-box.width/2,box.width/2),y:constrain(rotatePoint(circle.position,direction,box.position).y,-box.height/2,box.height/2)},circle.size).y;
	return {x:rotatePoint(collision.incident,-direction,{x:0,y:0}).x+box.position.x,y:rotatePoint(collision.incident,-direction,{x:0,y:0}).y+box.position.y};
}
function pointInsideBox(point,box){
	if(point.position.x>box.position.x-box.width/2&&point.position.x<box.position.x+box.width/2&&point.position.y>box.position.y-box.height/2&&point.position.y<box.position.y+box.height/2){
		return true;
	}
	else{
		return false;
	}
}
function circleInsideBox(box,circle){
	if(dist(circle.position.x,circle.position.y,constrain(circle.position.x,box.position.x-box.width/2,box.position.x+box.width/2),constrain(circle.position.y,box.position.y-box.height/2,box.position.y+box.height/2))<circle.size){
		return true;
	}
	else{
		return false;
	}
}
function boxInsideBox(box1,box2){
	if(box1.position.x>box2.position.x-box1.width/2-box2.width/2&&box1.position.x<box2.position.x+box1.width/2+box2.width/2&&box1.position.y>box2.position.y-box1.height/2-box2.height/2&&box1.position.y<box2.position.y+box1.height/2+box2.height/2){
		return true;
	}
	else{
		return false;
	}
}
function boxCollideBox(static,mobile){
	if(mobile.position.x == mobile.previous.position.x||mobile.position.x<static.position.x&&mobile.position.x<mobile.previous.position.x||mobile.position.x>static.position.x&&mobile.position.x>mobile.previous.position.x||mobile.position.x>static.position.x-static.width/2-mobile.width/2&&mobile.previous.position.x>static.position.x-static.width/2-mobile.width/2&&mobile.position.x<static.position.x+static.width/2+mobile.width/2&&mobile.previous.position.x<static.position.x+static.width/2+mobile.width/2){
		collision.incident.x = 1;
	}
	else if(mobile.position.x<static.position.x){
		collision.incident.x = (static.position.x-static.width/2-mobile.width/2-mobile.previous.position.x)/(mobile.position.x-mobile.previous.position.x);
	}
	else{
		collision.incident.x = (static.position.x+static.width/2+mobile.width/2-mobile.previous.position.x)/(mobile.position.x-mobile.previous.position.x);
	}
	if(mobile.position.y == mobile.previous.position.y||mobile.position.y<static.position.y&&mobile.position.y<mobile.previous.position.y||mobile.position.y>static.position.y&&mobile.position.y>mobile.previous.position.y||mobile.position.y>static.position.y-static.height/2-mobile.height/2&&mobile.previous.position.y>static.position.y-static.height/2-mobile.height/2&&mobile.position.y<static.position.y+static.height/2+mobile.height/2&&mobile.previous.position.y<static.position.y+static.height/2+mobile.height/2){
		collision.incident.y = 1;
	}
	else if(mobile.position.y<static.position.y){
		collision.incident.y = (static.position.y-static.height/2-mobile.height/2-mobile.previous.position.y)/(mobile.position.y-mobile.previous.position.y);
	}
	else{
		collision.incident.y = (static.position.y+static.height/2+mobile.height/2-mobile.previous.position.y)/(mobile.position.y-mobile.previous.position.y);
	}
	if(collision.incident.x<collision.incident.y){
		if(mobile.position.x<static.position.x){
			collision.calculate.x = static.position.x-static.width/2-mobile.width/2;
		}
		else{
			collision.calculate.x = static.position.x+static.width/2+mobile.width/2;
		}
		collision.calculate.y = mobile.previous.position.y*(1-collision.incident.y)+mobile.position.y*collision.incident.y;
	}
	else{
		if(mobile.position.y<static.position.y){
			collision.calculate.y = static.position.y-static.height/2-mobile.height/2;
		}
		else{
			collision.calculate.y = static.position.y+static.height/2+mobile.height/2;
		}
		collision.calculate.x = mobile.previous.position.x*(1-collision.incident.x)+mobile.position.x*collision.incident.x;
	}
	if(atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)>atan2(-static.width/2-mobile.width/2,static.height/2+mobile.height/2)&&atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)<atan2(static.width/2+mobile.width/2,static.height/2+mobile.height/2)){
		return 0;
	}
	else if(atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)<atan2(-static.width/2-mobile.width/2,-static.height/2-mobile.height/2)||atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)>atan2(static.width/2+mobile.width/2,-static.height/2-mobile.height/2)){
		return 1;
	}
	else if(atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)<atan2(static.width/2+mobile.width/2,-static.height/2-mobile.height/2)&&atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)>atan2(static.width/2+mobile.width/2,static.height/2+mobile.height/2)){
		return 2;
	}
	else if(atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)<atan2(-static.width/2-mobile.width/2,static.height/2+mobile.height/2)&&atan2(collision.calculate.x-static.position.x,collision.calculate.y-static.position.y)>atan2(-static.width/2-mobile.width/2,-static.height/2-mobile.height/2)){
		return 3;
	}
	else{
		return -1;
	}
}
function regTriangle(layer,x,y,radius,direction){
	layer.triangle(x+layer.sin(direction)*radius,y+layer.cos(direction)*radius,x+layer.sin(direction+120)*radius,y+layer.cos(direction+120)*radius,x+layer.sin(direction+240)*radius,y+layer.cos(direction+240)*radius);
}
function regPoly(layer,x,y,sides,radius,direction){
	layer.beginShape();
	for(f=0;f<sides;f++){
		layer.vertex(x+layer.sin(direction+f*360/sides)*radius,y+layer.cos(direction+f*360/sides)*radius);
	}
	layer.endShape(CLOSE);
}
function generateLevel(levels,level){
	levelDetail = [];
	for(e=0;e<levels[level].length;e++){
		levelDetail.push({enemy:[],count:{enemy:0}});
		for(f=0;f<levels[level][e].length;f++){
			for(g=0;g<levels[level][e][f].length;g++){
				if(levels[level][e][f][g]>-200&&levels[level][e][f][g]<=-100){
					levelDetail[e].enemy.push(0);
				}
			}
		}
	}
}
function resetWorld(){
	transition.remember = [];
	for(e=0;e<entities.players.length;e++){
		transition.remember.push(entities.players[e]);
	}
	entities.projectiles = [];
	entities.particles = [];
	entities.enemies = [];
	entities.players = [];
	entities.walls = [];
}
function primeWorld(){
	for(e=0;e<runOrder.fore.length;e++){
		for(f=0;f<runOrder.fore[e].length;f++){
			runOrder.fore[e][f].fade = 1;
		}
	}
}
function generateWorld(level){
	stage.edge.x = level[0].length*50;
	stage.edge.y = level.length*50;
	levelDetail[stage.zone].count.enemy = 0;
	for(e=0;e<level.length;e++){
		for(f=0;f<level[e].length;f++){
			if(level[e][f]>=100&&level[e][f]<10000){
				entities.walls.push(new wall(graphics.full,f*50+floor((level[e][f]%100)/10)*25+25,e*50+(level[e][f]%10)*25+25,floor(level[e][f]/100),floor((level[e][f]%100)/10)*50+50,(level[e][f]%10)*50+50));
			}
			else if(level[e][f]>-200&&level[e][f]<=-100){
				if(levelDetail[stage.zone].enemy[levelDetail[stage.zone].count.enemy] == 0){
					entities.enemies.push(new enemy(graphics.full,f*50+25,e*50+50,-level[e][f]-100,levelDetail[stage.zone].count.enemy));
				}
				levelDetail[stage.zone].count.enemy++;
			}
			else if(level[e][f]>=-1000&&level[e][f]<-200){
				entities.walls.push(new wall(graphics.full,f*50+25,e*50+25,level[e][f],40,40));
			}
			else if(level[e][f]>=-10&&level[e][f]<0&&level[e][f] == -transition.spawn){
				entities.players.push(new player(graphics.full,f*50+25,e*50+50,-1));
				if(stage.level == 7){
					entities.players.push(new player(graphics.full,f*50+25,e*50+50,-2));
				}
				stage.check.x = f*50+25;
				stage.check.y = e*50+50;
			}
		}
	}
	if(transition.spawn == 0||transition.spawn == -1){
		entities.players.push(new player(graphics.full,stage.check.x,stage.check.y,-1));
		if(transition.spawn == 0){
			entities.players[entities.players.length-1].life = transition.remember[entities.players.length-1].life;
			entities.players[entities.players.length-1].attack = transition.remember[entities.players.length-1].attack;
			entities.players[entities.players.length-1].anim = transition.remember[entities.players.length-1].anim;
		}
	}
}
function setupLayer(layer){
	layer.angleMode(DEGREES);
	layer.textAlign(CENTER,CENTER);
	layer.rectMode(CENTER);
	layer.colorMode(RGB,255,255,255,1);
}
function setupDialogue(value){
	dialogue.back = [];
	dialogue.stack = [];
	dialogue.name = [];
	for(e=0;e<dialogues[value].back.length;e++){
		dialogue.back.push(dialogues[value].back[e]);
		dialogue.stack.push(dialogues[value].stack[e]);
		dialogue.name.push(dialogues[value].name[e]);
	}
	dialogue.page = 0;
	dialogue.id = value;
}
function displayTransition(layer,transition){
	layer.noStroke();
	layer.fill(0);
	layer.rect(transition.anim*width/4,height/2,transition.anim*width/2,height);
	layer.rect(width-transition.anim*width/4,height/2,transition.anim*width/2,height);
	layer.rect(width/2,transition.anim*height/4,width,transition.anim*height/2);
	layer.rect(width/2,height-transition.anim*height/4,width,transition.anim*height/2);
	if(transition.trigger){
		transition.anim+=0.1;
		if(transition.anim>=1){
			transition.trigger = false;
			stage.scene = transition.scene;
			if(stage.scene == "level"){
				stage.level = transition.level;
				stage.zone = transition.zone;
				resetWorld();
				generateWorld(levels[stage.level][stage.zone]);
				runOrder = {back:[],fore:[entities.projectiles,entities.enemies,entities.players,entities.particles,entities.walls],life:[entities.enemies,entities.players]};
				primeWorld();
				setupBackground(stage.background);
			}
		}
	}
	else if(transition.anim>0){
		transition.anim-=0.1;
	}
}
function displayBoundary(layer,edge){
	layer.noStroke();
	layer.fill(0);
	layer.rect(-layer.width,edge.y/2,layer.width*2,edge.y+layer.height*4);
	layer.rect(edge.x+layer.width,edge.y/2,layer.width*2,edge.y+layer.height*4);
	layer.rect(edge.x/2,-layer.height,edge.x,layer.height*2);
	layer.rect(edge.x/2,edge.y+layer.height,edge.x,layer.height*2);
	for(e=0;e<6;e++){
		layer.fill(0,0.9-e*0.15);
		layer.rect(3+e*6,edge.y/2,6,edge.y-e*12);
		layer.rect(edge.x-3-e*6,edge.y/2,6,edge.y-e*12);
		layer.rect(edge.x/2,3+e*6,edge.x-12-e*12,6);
		layer.rect(edge.x/2,edge.y-3-e*6,edge.x-12-e*12,6);
	}
}
function displayLevel(layer,stage){
	hold.win = true;
	for(e=0;e<entities.enemies.length;e++){
		if(entities.enemies[e].life>0&&entities.enemies[e].type != 46){
			hold.win = false;
		}
	}
	switch(stage.level){
		case 0:
			if(stage.zone == 24&&hold.win&&!transition.trigger){
				transition.trigger = true;
				transition.scene = "cut";
				setupDialogue(3);
			}
		break;
		case 1:
			if(stage.zone == 24&&stage.key == 0){
				stage.key = 1;
				setupDialogue(5);
			}
			if(stage.zone == 24&&hold.win&&!transition.trigger){
				transition.trigger = true;
				transition.scene = "cut";
				setupDialogue(6);
			}
		break;
		case 2:
			if(stage.zone == 24&&stage.key == 0){
				stage.key = 1;
				setupDialogue(8);
			}
			if(stage.zone == 24&&hold.win&&!transition.trigger){
				transition.trigger = true;
				transition.scene = "cut";
				setupDialogue(9);
			}
		break;
		case 3:
			if(stage.zone == 24&&stage.key == 0){
				stage.key = 1;
				setupDialogue(11);
			}
			if(stage.zone == 24&&hold.win&&!transition.trigger){
				transition.trigger = true;
				transition.scene = "cut";
				setupDialogue(12);
			}
		break;
		case 4:
			if(stage.zone == 24&&stage.key == 0){
				stage.key = 1;
				setupDialogue(14);
			}
			if(stage.zone == 24&&hold.win&&!transition.trigger){
				transition.trigger = true;
				transition.scene = "cut";
				setupDialogue(15);
			}
		break;
		case 5:
			if(stage.zone == 24&&stage.key == 0){
				stage.key = 1;
				setupDialogue(17);
			}
			if(stage.zone == 24&&hold.win&&!transition.trigger){
				transition.trigger = true;
				transition.scene = "cut";
				setupDialogue(18);
			}
		break;
		case 6:
			if(stage.zone == 24&&stage.key == 0){
				stage.key = 1;
				setupDialogue(20);
			}
			if(stage.zone == 24&&hold.win&&!transition.trigger){
				transition.trigger = true;
				transition.scene = "cut";
				setupDialogue(21);
			}
		break;
		case 7:
			if(stage.zone == 24&&stage.key == 0){
				stage.key = 1;
				setupDialogue(23);
			}
			if(stage.zone == 24&&hold.win&&!transition.trigger){
				transition.trigger = true;
				transition.scene = "cut";
				setupDialogue(24);
			}
		break;
		case 8:
			layer.noStroke();
			layer.fill(0);
			layer.textSize(20);
			switch(stage.zone){
				case 0:
					layer.text("WASD or Arrow\nKeys to Move",stage.edge.x/2,stage.edge.y/2);
				break;
				case 1:
					layer.text("SHIFT to Activate\nAttack Mode",stage.edge.x/4,stage.edge.y/2);
					layer.text("Z,X,B,M to Attack",stage.edge.x*3/4,stage.edge.y/2);
				break;
				case 2:
					layer.text("X,N to Block",stage.edge.x/2,stage.edge.y/2);
				break;
				case 4:
					if(hold.win&&!transition.trigger){
						transition.trigger = true;
						transition.scene = "cut";
						setupDialogue(1);
					}
				break;
			}
		break;
	}
}
function displayDialogue(layer,dialogue){
	if(stage.blind>0){
		layer.fill(255,stage.blind);
		layer.noStroke();
		layer.rect(400,300,800,600);
		stage.blind-=1/240;
	}
	if(dialogue.stack.length>0){
		if(dialogue.maintain<255){
			dialogue.maintain+=17;
		}
		layer.stroke(180,180,240,dialogue.fade);
		layer.strokeWeight(5);
		layer.fill(150,150,200,dialogue.fade);
		layer.rect(width/2,height-75,360,100,5);
		layer.rect(width/2,height-155,150,40,5);
		layer.fill(0,dialogue.fade);
		layer.noStroke();
		layer.textSize(15);
		layer.text(dialogue.stack[0],width/2,height-75);
		layer.text(dialogue.name[0],width/2,height-155);
		if(dialogue.fade<1&&!dialogue.trigger){
			dialogue.fade+=0.1;
		}
		else if(dialogue.fade>0&&dialogue.trigger){
			dialogue.fade-=0.1;
		}
	}
	else if(dialogue.maintain>0){
		dialogue.maintain-=17;
	}
	if(dialogue.fade<=0&&dialogue.trigger){
		if(dialogue.back.length>1){
			dialogue.back.splice(0,1);
		}
		else{
			dialogue.fade+=0.1;
		}
		dialogue.stack.splice(0,1);
		dialogue.name.splice(0,1);
		dialogue.trigger = false;
	}
}
