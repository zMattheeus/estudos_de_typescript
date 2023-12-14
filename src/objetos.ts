
// Esse objeto não é uma boa pratica pois não tem previsibilidade

let produto:object = {
    name: "Matheus",
    cidade: "Sp",
    idade: 21,
}

//objeto shaipado, possui previsibilidade, boa pratica

type produtoLoja = {
    produto: string;
    preco: number;
    quantidade: number;
}

let meuProduto:produtoLoja = {
    produto: "Tênis",
    preco: 100.00,
    quantidade: 5
}
