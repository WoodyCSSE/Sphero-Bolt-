/*
Programmer: Woody Tilbury
Date: 1.12.2022
Program: This is a sandbox to experiment with sphero bolts.
*/

async function startProgram(){
	//
await roll(0, 50, 7);
await Sound.Animal.Monkey.play(true);
setMainLed({ r:25, g:125, b: 0});
}

