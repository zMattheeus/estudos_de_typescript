"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
//o que muda é ter que tipar os parametros
function addNome(nome) {
    return `Olá ${nome}`;
}
console.log(addNome("Matheus"));
//funçao multi types
function callToPhone(phone) {
    return phone;
}
function callToPhone2(phone2) {
    return phone2;
}
console.log(callToPhone("12312312313"));
//funções assincronas
//funções assincronas retornam uma promisse, por exembro, tenho uma id do banco de dados e ela pode retornar uma string
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Matheus";
    });
}
function getDataBase2(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Matheus";
    });
}
