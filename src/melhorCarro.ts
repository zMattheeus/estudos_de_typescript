class carroComp{
    marca: string
    modelo: string
    velocidade: number

    constructor(marca: string, modelo: string, velocidade: number){
        this.marca = marca
        this.modelo = modelo
        this.velocidade = velocidade
    }

}

const ferrari = new carroComp("Ferrari", "Spider", 300);
const lamborghini = new carroComp("Lamborghini", "Spider", 350);

const ferrariVel = ferrari.velocidade;
const lamborghiniVel = lamborghini.velocidade;



function  comparativo(carro1: number, carro2: number){
    if(ferrariVel > lamborghiniVel){
        return `Ferrari é mais rapido com a velocidade de ${ferrariVel} km/h`
    } else{
        return `Lamborghini é mais rapido com a velocidade de ${lamborghiniVel} km/h`
    }
}

console.log(comparativo(ferrariVel, lamborghiniVel))