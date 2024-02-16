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
/*
    Variáveis

    tipos primitivos:
    boolean
    number
    string

*/
let ligado = false;
let nome = "ana";
let idade = 20;
let altura = 1.70;
//Tipos Especiais
//null
let nulo = null;
//undefined
let indefinido = undefined;
//Tipos Abrangentes 
//void
let retorno;
//any
let retornoView = false;
//objeto sem previsibilidade
let produto = {
    name: "ana",
    cidade: "rj",
    idade: 40
};
let meuProduto = {
    nome: "tenis",
    preco: 89.99,
    unidades: 5
};
// arrays
let dados = ["felipe", "ana", "pedro"];
let dados2 = ["felipe", "ana", "pedro"];
//array de string ou de numbet
let infos = ["ana", 10, "luis", 55];
/*
    Tuplas
*/
//tem que ser na ordem
let boleto = ["ana", 6554, 34435];
//arrays métodos - todos do js
dados.push();
//Datas
let aniversario = new Date("2024-02-15 10:00");
console.log(aniversario.toString());
//Funçoes
function addNumber(x, y) {
    return x + y;
}
function addHello(name) {
    return `Hello ${name}`;
}
function CallToPhone(phone) {
    return phone;
}
let soma = addNumber(4, 7);
console.log(addHello("ana"));
console.log(CallToPhone(6546554734));
console.log(CallToPhone("6546554734"));
//Funçao assincrona
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
const bot1 = {
    id: "1",
    name: "pedro",
};
const bot2 = {
    id: "1",
    name: "pedro",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "gustavo");
console.log(p.sayHello());
