import { animaleCompagnie } from "./interface-animal-compagnie";

// Class && Method CHIEN
export class Chien implements animaleCompagnie{
    name: string;
    race: string;
    allezChercher: void;
    
    constructor(name: string, race: string, allezChercher: void ) {
        this.name;
        this.race;
        this.allezChercher;
    }

    //Implement les method de l'interface.
    seGrater(): void {
        throw new Error("Method not implemented.");
    }
    manger(): void {
        throw new Error("Method not implemented.");
    }
    emettreSons(): string {
        throw new Error("Method not implemented.");
    }
}