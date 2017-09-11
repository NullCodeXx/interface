"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class && Method CHIEN
var Chien = /** @class */ (function () {
    function Chien(name, race) {
        this.name = name;
        this.race = race;
    }
    //Implement les method de l'interface.
    Chien.prototype.seGrater = function () {
        console.log("Le chien se gratte");
    };
    Chien.prototype.manger = function (aliment) {
        console.log("Le chien mange" + aliment);
    };
    Chien.prototype.emettreSons = function () {
        return "waouf" + "waouf";
    };
    return Chien;
}());
exports.Chien = Chien;
//# sourceMappingURL=chien.js.map