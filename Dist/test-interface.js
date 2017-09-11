"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chien_1 = require("./chien");
var chat_1 = require("./chat");
/*
On fais du polymorphy puisque la class chien est considéré en tant que
animaleCompagnie via l'interface mais peut aussi etre appeler seul, il
il peut évoluer.
*/
var chien = new chien_1.Chien('fido', 'corgi');
chien.attaque();
var chat = new chat_1.Chat("frite", "steak");
chat.chasser();
var animaux = [];
animaux.push(new chien_1.Chien('fido', 'corgi'));
animaux.push(new chat_1.Chat('moumouche', 'persian'));
for (var _i = 0, animaux_1 = animaux; _i < animaux_1.length; _i++) {
    var animal = animaux_1[_i];
    animal.manger('pâtée');
    console.log(animal.emettreSons());
    animal.seGrater();
}
//# sourceMappingURL=test-interface.js.map