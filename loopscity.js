// Mommy I can count to 100
var count = 0;
for (var count = 0; count <= 100; count++) {
	console.log("Yan can count to " + count);
}

// Noah's Arc
var animalCount = 0;
for (var animalCount = 0; animalCount <= 5; animalCount++) {
	console.log("There are " + animalCount + " many animals on Noah's Arc.");
}

// Hip Hop Array
var partyAnimals = ["Penguin", "Lion", "Dolphin", "Panther", "Emu"];
for (i = 0; i <= 4; i++){
	console.log(partyAnimals[i])
}

// Merlin's Battle Weapon
var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];
var hero = {
	wizard: "Merlin",
	weapon: [2],
	power: 30
} 

function theBattle(weapon) {
	if (weapon = "Sorcerer's Stone") {
		console.log(hero.wizard + " shall slay the dragon with the " + hero.weapon)
	}else{
		hero.weapon = "Sorcerer's Stone"
		console.log(hero.wizard + " is ready for war with the " + hero.weapon)
	}
}

theBattle = ("Merlin", "Sorcerer's Stone", 30)