
//Inteface
interface animaleCompagnie {
    seGrater(): void;
    manger(): void;
    emettreSons(): string;
}

// Class && Method CHIEN
class Chien implements animaleCompagnie{
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

// Class && Method CHAT
class Chat implements animaleCompagnie{
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