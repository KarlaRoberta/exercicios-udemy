// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function classificacaoTriangulo(ladoA, ladoB, ladoC){
  if(ladoA == ladoB & ladoB == ladoC){
    return 'Equilátero'
  }else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
    return 'Isósceles'
  }else{
    return 'Escaleno'
  }
    
}

console.log(classificacaoTriangulo(2, 2, 2))
console.log(classificacaoTriangulo(2,2,1))
console.log(classificacaoTriangulo(1,2,3))