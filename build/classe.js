"use strict";
class personagem {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Ataque com ${this.stregth} pontos`);
    }
}
const p1 = new personagem("Matheus", 50, 40);
p1.attack();
// se eu colocar por exemplo name?: string, torna-se opcional
