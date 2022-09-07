function mouseClicked(){
	switch(stage.scene){
		case "menu":
			for(a=0;a<4;a++){
				for(b=0;b<2;b++){
					if(dist(inputs.mouse.x,inputs.mouse.y,a*200+100,b*200+300)<90&&a+b*4<=stage.lock){
						transition.trigger = true;
						transition.scene = "cut";
						transition.level = a+b*4;
						resetWorld();
						generateLevel(levels,transition.level);
						generateWorld(levels[transition.level][transition.zone]);
						setupDialogue(hold.cutlist[a+b*4]);
					}
				}
			}
		break;
	}
}
