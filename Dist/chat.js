"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class && Method CHAT
var Chat = /** @class */ (function () {
    //Ceci équivaut a ce qui suit juste en-dessous. 
    function Chat(name, couleur) {
        this.name = name;
        this.couleur = couleur;
    }
    /*name: string;
    couleur: string;
    chasser: void;
    
    constructor(name: string, couleur:string, chasser: void) {
        this.name;
        this.couleur;
        this.chasser;
    }
    */
    //Implement les method de l'interface.
    Chat.prototype.seGrater = function () {
        console.log("Le chat se gratte.");
    };
    Chat.prototype.manger = function (aliment) {
        console.log("Le chat mange" + aliment);
    };
    Chat.prototype.emettreSons = function () {
        return "le chat miaule";
    };
    Chat.prototype.chasser = function () {
        console.log("Le chat chasse");
    };
    return Chat;
}());
exports.Chat = Chat;
//# sourceMappingURL=chat.js.map