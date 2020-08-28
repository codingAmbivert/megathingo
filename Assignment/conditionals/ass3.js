//animals either plant or other animal or both to survive
let eatPlant = 'herbivore';
let eatAnimal = 'carnivore';
let eatBoth = 'omnivore'
let animal = eatBoth;

//test = if animal == eatPlant print eatPlant or 
//if animal == eatAnimal print eatAnimal or
//if animal == eatBoth print eatBoth but
//if anmal == none of the above print NA

let test = animal === eatPlant ? eatPlant : 
animal === eatAnimal ? eatAnimal : 
animal === eatBoth  ? eatBoth : 'NA';

console.log(test)