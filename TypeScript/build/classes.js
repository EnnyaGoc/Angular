"use strict";
//classes
/*
    dat modifiers
    public
    private
    protected
*/
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("ana", 10, 98);
const p2 = new Magician("mago", 9, 30, 100);
p1.attack();
