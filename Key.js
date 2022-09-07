function keyPressed(){
	switch(stage.scene){
		case "level":
			if(key == "a"||key == "A"){
				inputs.keys[0] = true;
			}
			if(key == "d"||key == "D"){
				inputs.keys[1] = true;
			}
			if(key == "w"||key == "W"){
				inputs.keys[2] = true;
			}
			if(key == "s"||key == "S"){
				inputs.keys[3] = true;
			}
			if(keyCode == LEFT_ARROW){
				inputs.specialKeys[0] = true;
			}
			if(keyCode == RIGHT_ARROW){
				inputs.specialKeys[1] = true;
			}
			if(keyCode == UP_ARROW){
				inputs.specialKeys[2] = true;
			}
			if(keyCode == DOWN_ARROW){
				inputs.specialKeys[3] = true;
			}
			if(key == "z"||key == "b"){
				for(a=0;a<min(entities.players.length,1);a++){
					if(entities.players[a].attack.trigger&&entities.players[a].anim.trigger>=0.8&&entities.players[a].attack.timer<=0){
						entities.players[a].attack.timer = 12;
						entities.players[a].attack.class = -1;
						entities.players[a].collect.attack = -1;
					}
				}
			}
			if(key == "c"||key == "m"){
				for(a=0;a<min(entities.players.length,1);a++){
					if(entities.players[a].attack.trigger&&entities.players[a].anim.trigger>=0.8&&entities.players[a].attack.timer<=0){
						entities.players[a].attack.timer = 12;
						entities.players[a].attack.class = -2;
						entities.players[a].collect.attack = -2;
					}
				}
			}
			if(key == "x"||key == "n"){
				for(a=0;a<min(entities.players.length,1);a++){
					if(entities.players[a].attack.trigger&&entities.players[a].anim.trigger>=0.8&&entities.players[a].attack.timer<=0){
						entities.players[a].attack.timer = 36;
						entities.players[a].attack.class = -3;
						entities.players[a].collect.attack = -3;
					}
				}
				inputs.keys[4] = true;
			}
			if(keyCode == SHIFT){
				for(a=0;a<entities.players.length;a++){
					if(!entities.players[a].attack.trigger){
						entities.players[a].attack.trigger = true;
					}
					else{
						entities.players[a].attack.trigger = false;
					}
				}
			}
		break;
		case "cut":
			if(dialogue.stack.length>0&&key == " "){
				dialogue.trigger = true;
			}
		break;
	}
}
function keyReleased(){
	switch(stage.scene){
		case "level":
			if(key == "a"||key == "A"){
				inputs.keys[0] = false;
			}
			if(key == "d"||key == "D"){
				inputs.keys[1] = false;
			}
			if(key == "w"||key == "W"){
				inputs.keys[2] = false;
			}
			if(key == "s"||key == "S"){
				inputs.keys[3] = false;
			}
			if(key == "x"||key == "n"){
				inputs.keys[4] = false;
			}
			if(keyCode == LEFT_ARROW){
				inputs.specialKeys[0] = false;
			}
			if(keyCode == RIGHT_ARROW){
				inputs.specialKeys[1] = false;
			}
			if(keyCode == UP_ARROW){
				inputs.specialKeys[2] = false;
			}
			if(keyCode == DOWN_ARROW){
				inputs.specialKeys[3] = false;
			}
		break;
	}
}
