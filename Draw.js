function draw(){
	switch(stage.scene){
		case "menu":
			graphics.full.background(0);
			graphics.full.textSize(50);
			for(a=0;a<4;a++){
				for(b=0;b<2;b++){
					graphics.full.fill(255,hold.anim[a+b*4]);
					graphics.full.text(hold.name[a+b*4],400,100);
				}
			}
			for(a=0;a<4;a++){
				for(b=0;b<2;b++){
					if(a+b*4<=stage.lock){
						smallGlobe(graphics.full,a*200+100,b*200+330,a+b*4,1,1,0,1);
						if(dist(inputs.mouse.x,inputs.mouse.y,a*200+100,b*200+300)<90&&hold.anim[a+b*4]<1){
							hold.anim[a+b*4]+=0.1;
						}
						else if(hold.anim[a+b*4]>0){
							hold.anim[a+b*4]-=0.1;
						}
					}
				}
			}
		break;
		case "level":
			switch(stage.level){
				case 0:
					graphics.full.image(graphics.backgrounds[0],0,0);
					graphics.full.image(graphics.backgrounds[1],(-stage.focus.x/4)%1600,0);
					graphics.full.image(graphics.backgrounds[2],(-stage.focus.x/6)%1600,0);
					graphics.full.image(graphics.backgrounds[3],(-stage.focus.x/8)%1600,0);
					graphics.full.image(graphics.backgrounds[1],(-stage.focus.x/4)%1600+1600,0);
					graphics.full.image(graphics.backgrounds[2],(-stage.focus.x/6)%1600+1600,0);
					graphics.full.image(graphics.backgrounds[3],(-stage.focus.x/8)%1600+1600,0);
				break;
				case 1:
					graphics.full.image(graphics.backgrounds[4],0,0);
					graphics.full.image(graphics.backgrounds[5],(-stage.focus.x/4)%1600,0);
					graphics.full.image(graphics.backgrounds[6],(-stage.focus.x/6)%1600,0);
					graphics.full.image(graphics.backgrounds[7],(-stage.focus.x/8)%1600,0);
					graphics.full.image(graphics.backgrounds[5],(-stage.focus.x/4)%1600+1600,0);
					graphics.full.image(graphics.backgrounds[6],(-stage.focus.x/6)%1600+1600,0);
					graphics.full.image(graphics.backgrounds[7],(-stage.focus.x/8)%1600+1600,0);
				break;
				case 2:
					graphics.full.image(graphics.backgrounds[8],(-stage.focus.x/2)%1600,0);
					graphics.full.image(graphics.backgrounds[8],(-stage.focus.x/2)%1600+1600,0);
				break;
				case 3:
					graphics.full.image(graphics.backgrounds[9],0,0);
					graphics.full.image(graphics.backgrounds[10],(-stage.focus.x/4)%800-400,-stage.focus.y+stage.edge.y-50);
					graphics.full.image(graphics.backgrounds[10],(-stage.focus.x/4)%800+400,-stage.focus.y+stage.edge.y-50);
					graphics.full.image(graphics.backgrounds[10],(-stage.focus.x/4)%800+1200,-stage.focus.y+stage.edge.y-50);
					graphics.full.image(graphics.backgrounds[10],(-stage.focus.x/4)%800+2000,-stage.focus.y+stage.edge.y-50);
				break;
				case 4:
					graphics.full.image(graphics.backgrounds[11],0,0);
					graphics.full.image(graphics.backgrounds[12],stage.time%800-800,(stage.time/4)%600-600);
					graphics.full.image(graphics.backgrounds[12],stage.time%800-800,(stage.time/4)%600);
					graphics.full.image(graphics.backgrounds[12],stage.time%800,(stage.time/4)%600-600);
					graphics.full.image(graphics.backgrounds[12],stage.time%800,(stage.time/4)%600);
				break;
				case 5:
					graphics.full.image(graphics.backgrounds[13],0,0);
					graphics.full.image(graphics.backgrounds[14],(-stage.time/10)%800+800,(stage.time*2)%600-600);
					graphics.full.image(graphics.backgrounds[14],(-stage.time/10)%800,(stage.time*2)%600-600);
					graphics.full.image(graphics.backgrounds[14],(-stage.time/10)%800+800,(stage.time*2)%600);
					graphics.full.image(graphics.backgrounds[14],(-stage.time/10)%800,(stage.time*2)%600);
				break;
				case 6:
					if(stage.zone>=24){
						graphics.full.image(graphics.backgrounds[20],0,0);
					}
					else if(stage.zone>=22){
						graphics.full.image(graphics.backgrounds[17],0,0);
					}
					else if(stage.zone>=20){
						graphics.full.image(graphics.backgrounds[16],0,0);
					}
					else{
						graphics.full.image(graphics.backgrounds[15],0,0);
					}
				break;
				case 7:
					graphics.full.image(graphics.backgrounds[18],(-stage.focus.x/2)%1600,0);
					graphics.full.image(graphics.backgrounds[18],(-stage.focus.x/2)%1600+1600,0);
				break;
				case 8:
					graphics.full.image(graphics.backgrounds[19],0,0);
				break;
			}
			for(a=0;a<runOrder.back.length;a++){
				for(b=0;b<runOrder.back[a].length;b++){
					runOrder.back[a][b].update();
					runOrder.back[a][b].display();
					if(runOrder.back[a][b].remove){
						runOrder.back[a].splice(b,1);
					}
				}
			}
			graphics.full.push();
			graphics.full.translate(round(graphics.full.width/2-stage.focus.x),round(graphics.full.height/2-stage.focus.y));
			for(a=0;a<runOrder.fore.length;a++){
				for(b=0;b<runOrder.fore[a].length;b++){
					runOrder.fore[a][b].display();
					runOrder.fore[a][b].update();
					if(runOrder.fore[a][b].remove){
						runOrder.fore[a].splice(b,1);
						b--;
					}
				}
			}
			for(a=0;a<runOrder.life.length;a++){
				for(b=0;b<runOrder.life[a].length;b++){
					runOrder.life[a][b].displayLife();
				}
			}
			displayBoundary(graphics.full,stage.edge);
			displayLevel(graphics.full,stage);
			graphics.full.translate(round(stage.focus.x-graphics.full.width/2),round(stage.focus.y-graphics.full.height/2));
			graphics.full.pop();
		break;
		case "cut":
			graphics.full.image(graphics.cut[dialogue.back[0]],0,0);
			if(dialogue.back[0] == 7){
				for(a=0;a<graphics.entities.clouds[2].length;a++){
					graphics.entities.clouds[2][a].display();
					graphics.entities.clouds[2][a].update();
				}
			}
			else if(dialogue.back[0] == 13){
				for(a=0;a<graphics.entities.clouds[3].length;a++){
					graphics.entities.clouds[3][a].display();
					graphics.entities.clouds[3][a].update();
				}
			}
			displayDialogue(graphics.full,dialogue);
			if(dialogue.stack.length<=0){
				transition.trigger = true;
				switch(dialogue.id){
					case 0: case 2: case 4: case 5: case 7: case 8: case 10: case 11: case 13: case 14: case 16: case 17: case 19: case 20: case 22: case 23:
						transition.scene = "level";
					break;
					case 1: case 3: case 6: case 9: case 12: case 15: case 18: case 21: case 24:
						transition.scene = "menu";
						if(stage.level>=stage.lock&&stage.level != 8){
							stage.lock++;
						}
					break;
				}
			}
		break;
	}
	displayTransition(graphics.full,transition);
	image(graphics.full,0,0);
	inputs.mouse.x = mouseX;
	inputs.mouse.y = mouseY;
	stage.time++;
}
