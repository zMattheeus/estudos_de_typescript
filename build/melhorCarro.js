"use strict";
class carroComp {
    constructor(marca, modelo, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade;
    }
}
const ferrari = new carroComp("Ferrari", "Spider", 300);
const lamborghini = new carroComp("Lamborghini", "Spider", 350);
const ferrariVel = ferrari.velocidade;
const lamborghiniVel = lamborghini.velocidade;
function comparativo(carro1, carro2) {
    if (ferrariVel > lamborghiniVel) {
        return `Ferrari é mais rapido com a velocidade de ${ferrariVel} km/h`;
    }
    else {
        return `Lamborghini é mais rapido com a velocidade de ${lamborghiniVel} km/h`;
    }
}
console.log(comparativo(ferrariVel, lamborghiniVel));
