function addNumber(x: number,y: number): number{
    return x+y;
}

let soma:number = addNumber(4,7);

console.log(soma)

//o que muda é ter que tipar os parametros


function addNome(nome: String): string{
   
   return `Olá ${nome}`
}

console.log(addNome("Matheus"))

//funçao multi types

function callToPhone(phone: number | string): any{ // não é bom usar any
    return phone;
}

function callToPhone2(phone2: number | string): number | string{
    return phone2;

}
console.log(callToPhone("12312312313"))

//funções assincronas
//funções assincronas retornam uma promisse, por exembro, tenho uma id do banco de dados e ela pode retornar uma string

async function getDataBase(id:number): Promise<string> {
    return "Matheus"
}

async function getDataBase2(id:number): Promise<string | number> {
    return "Matheus"
}