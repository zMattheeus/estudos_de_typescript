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

const ferrari = new carro("Ferrari", "Spider", 150000);
console.log(ferrari.nome + " " + ferrari.modelo);
console.log(ferrari.kmPorHora(10, 300));
