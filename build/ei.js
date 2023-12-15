"use strict";
class carro {
    constructor(modelo, nome, km) {
        this.modelo = modelo;
        this.nome = nome;
        this.km = km;
    }
    kmPorHora(vel, metros) {
        return vel * metros;
    }
}
const carro1 = new carro("GM", "Camaro", 10000);
console.log(carro1.kmPorHora(50, 100));
