//classes
/* 
    dat modifiers
    public
    private
    protected
*/
class Character{
    // ? faz ser opcional
    protected name?: string;
    readonly strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.strength} points`);
    }
}

class Magician extends Character {
    magicPoints: number;
    constructor(
        name: string,
        strength: number, 
        skill: number,
        magicPoints: number   
    ){
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}


const p1 = new Character("ana", 10, 98);
const p2 = new Magician("mago", 9, 30, 100);
p1.attack();