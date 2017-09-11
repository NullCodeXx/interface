import { animaleCompagnie } from "./interface-animal-compagnie";


// Class && Method CHAT
export class Chat implements animaleCompagnie{
    name: string;
    couleur: string;
    chasser: void;
    
    constructor(name: string, couleur:string, chasser: void) {
        this.name;
        this.couleur; 
        this.chasser;
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