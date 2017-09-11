import { animaleCompagnie } from "./interface-animal-compagnie";

// Class && Method CHIEN
export class Chien implements animaleCompagnie{
    name: string;
    race: string;

    
    constructor(name: string, race: string ) {
        this.name = name;
        this.race = race;
    }

    //Implement les method de l'interface.
    seGrater(): void {
        console.log("Le chien se gratte");
    }
    manger(aliment): void {
        console.log("Le chien mange"+ aliment);
    }
    emettreSons(): string {
        return "waouf" + "waouf";
    }
}