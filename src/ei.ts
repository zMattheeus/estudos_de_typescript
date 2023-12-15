class carro{
    modelo: string
    nome: string
    km: number

    constructor(modelo: string, nome: string, km:number){
        this.modelo = modelo
        this.nome = nome
        this.km = km
    }

    kmPorHora(velInicial:number, velFinal: number) {
        return (velInicial + velFinal) / 2
    }
}

const camaro = new carro("GM", "Camaro", 10000);
console.log(camaro.kmPorHora(50, 100));

const ferrari1 = new carro("Ferrari", "Spider", 150000);
console.log(ferrari1.nome + " " + ferrari.modelo);
console.log(ferrari1.kmPorHora(10, 300));

