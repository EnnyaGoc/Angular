/* 
    Variáveis

    tipos primitivos:
    boolean
    number
    string

*/
let ligado:boolean = false;
let nome: string = "ana";
let idade: number = 20;
let altura: number = 1.70;

//Tipos Especiais
//null
let nulo: null = null;
//undefined
let indefinido: undefined = undefined;

//Tipos Abrangentes 
//void
let retorno: void
//any
let retornoView: any = false

//objeto sem previsibilidade
let produto: object = {
    name: "ana",
    cidade: "rj",
    idade: 40
};

//objeto tipado com previsibilidade
//struct
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "tenis",
    preco: 89.99,
    unidades: 5
};

// arrays
let dados: string[] = ["felipe", "ana", "pedro"];
let dados2: Array<string> = ["felipe", "ana", "pedro"];

//array de string ou de numbet
let infos: (string | number)[] = ["ana", 10, "luis", 55]

/* 
    Tuplas
*/
//tem que ser na ordem
let boleto:[string, number, number] = ["ana", 6554, 34435]


//arrays métodos - todos do js
dados.push()

//Datas
let aniversario: Date = new Date("2024-02-15 10:00");
console.log(aniversario.toString());

//Funçoes
function addNumber(x: number, y: number): number{
    return x+y;
}

function addHello(name: string){
    return `Hello ${name}`;
}

function CallToPhone(phone: number | string): number | string{
    return phone;
}

let soma: number = addNumber(4, 7);
console.log(addHello("ana"));
console.log(CallToPhone(6546554734));
console.log(CallToPhone("6546554734"));

//Funçao assincrona
async function getDatabase(id:number): Promise<string> {
    return "felipe"
    
}

/* 
    Interfaces (type x interface)
*/
type robot = {
    readonly id: number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot1: robot = {
    id: "1",
    name: "pedro",
};

const bot2: robot2 = {
    id: "1",
    name: "pedro",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};


class Pessoa implements robot2{
    id: number | string;
    name: string;   

    constructor(id: string | number, name: string){
        this.id = id
        this.name = name

    }
    sayHello(): string {
       return `hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "gustavo")
console.log(p.sayHello());

