//criar de forma literal
function funil(){

}
// function declaration
function soma(x,y){
    return x+y
}

//armazenar em uma variável
const fun2 = function () {

}

// function expression
const sub = function (x,y){
    return x - y
}

//armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array [0] (2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//passar função como parametro para outra função
function run (fun) {
    fun()
}

run (function () {console.log('Executando...')})

//Uma função pode retonar/conter uma função
function soma( a, b ) {
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)

//estrategia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))

//estrategia mais atual para gerar valor padrão
function soma3( a = 1, b = 1, c = 1){
    return a+b+c
}
console.log(soma3(), soma3(3))

//thisEBin
//exemplo

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar 
falar()//conflito entre paradigmas : funcional e OO 

const falarDePessoa = pessoa.falar.bind(pessoa)// o this é o objeto (pessoa)
falarDePessoa()

//Sem callback

const notasBaixas1 = []
for(let i in notas){
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

//Callback e abordagem funcional (código reduzido)
const notasBaixas3 = notas.filter(nota => nota < 7)
    console.log(notasBaixas3)

//exemplo do callback no browser

document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O evento ocorreu!')
}


//Função construtora
//

function Carro (velocidadeMaxima = 200, delta = 5){

//atributo privado. Poderia ser qlq variavel (var, let)
    let velocidadeAtual = 0

//metodo publico, pela palavra 'this'
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

//metodo publico
this.getVelocidadeAtual = function(){
    return velocidadeAtual
}
}

const uno = new Carro //instanciar +
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350,20)
ferrari.acelerar()
ferrari.acelerar() //2 chamada, pode chamar quantas vezes quiser
console.log(ferrari.getVelocidadeAtual())

//contexto léxico em ação!
const x = 'Global'
function fora(){
    const x = 'Local'
    function dentro (){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())