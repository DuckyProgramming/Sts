function setup(){
	createCanvas(800,600);
	graphics.full = createGraphics(800,600);
	for(a=0;a<21;a++){
		graphics.backgrounds.push(createGraphics(1600,600));
		graphics.backgrounds[a].noStroke();
	}
	for(a=0;a<40;a++){
		graphics.cut.push(createGraphics(800,600));
		graphics.cut[a].noStroke();
	}
	angleMode(DEGREES);
	textAlign(CENTER,CENTER);
	rectMode(CENTER);
	colorMode(RGB,255,255,255,1);
	setupLayer(graphics.full);
	for(a=0;a<graphics.backgrounds.length;a++){
		setupLayer(graphics.backgrounds[a]);
	}
	for(a=0;a<graphics.cut.length;a++){
		setupLayer(graphics.cut[a]);
	}
	setupDialogue(0);
	setupGraphics();
	setupBackground(stage.background);
	generateLevel(levels,stage.level);
	generateWorld(levels[stage.level][stage.zone]);
}
