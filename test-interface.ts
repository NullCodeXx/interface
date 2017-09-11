import { animaleCompagnie } from "./interface-animal-compagnie";
import { Chien } from "./chien";
import { Chat } from "./chat";

/*
On fais du polymorphy puisque la class chien est considéré en tant que 
animaleCompagnie via l'interface mais peut aussi etre appeler seul, il
il peut évoluer.
*/
let chien = new Chien('fido', 'corgi');
chien.attaque();
let chat = new Chat("frite", "steak");
chat.chasser();

const animaux: animaleCompagnie[] = [];
animaux.push(new Chien('fido', 'corgi'));
animaux.push(new Chat('moumouche', 'persian'));

for (let animal of animaux) {
    animal.manger('pâtée');
    console.log(animal.emettreSons());
    animal.seGrater();
}