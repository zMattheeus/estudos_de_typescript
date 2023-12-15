class carro{
    modelo: string
    nome: string
    km: number

    constructor(modelo: string, nome: string, km:number){
        this.modelo = modelo
        this.nome = nome
        this.km = km
    }

    kmPorHora(vel:number, metros: number) {
        return vel * metros
    }
}

const carro1 = new carro("GM", "Camaro", 10000);
console.log(carro1.kmPorHora(50, 100));

