class personagem{
    name: string
    stregth: number
    skill: number

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack():void{
        console.log(`Ataque com ${this.stregth} pontos`)
    }
}


const p1 = new personagem("Matheus", 50, 40)
p1.attack()

// se eu colocar por exemplo name?: string, torna-se opcional