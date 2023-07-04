//criar de forma literal
function funil(){

}

//armazenar em uma variável
const fun2 = function () {

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

//Uma função pode retonrar/conter uma função
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