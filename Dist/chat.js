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
        throw new Error("Le chat se gratte.");
    };
    Chat.prototype.manger = function (aliment) {
        throw new Error("Le chat mange" + aliment);
    };
    Chat.prototype.emettreSons = function () {
        throw new Error("le chat miaule");
    };
    Chat.prototype.function = function () {
        console.log("Le chat chasse");
    };
    return Chat;
}());
exports.Chat = Chat;
//# sourceMappingURL=chat.js.map