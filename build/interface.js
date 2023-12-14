"use strict";
// diferença de type e interface
const robo = {
    id: 1,
    name: "jorge"
};
// type serve mais para tipar um objeto, o interface é mais usardo para trabalhar com classes
//posso usar multi tipos em ambas
// readonly é uma propriedade que permite apenas leitura de dados em ambos - Não permite alteração no codigo
// usar o type quando for para apenas definir como as variaveis vão se comportar, tipando elas e dando certa previsibilidade
// usar o interface quando tiver trabalhando com classes, orientação a objetos e etc...
// exemplo  de classe
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHellow() {
        return `Hello ${this.name}`;
    }
}
const p = new Pessoa(1, "Matheus");
console.log(p);
