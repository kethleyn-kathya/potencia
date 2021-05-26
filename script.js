let  num1 = parseInt(prompt('Digite aqui um número. Ele será a base para uma potência.'))
let  num2 = parseInt(prompt('Digite aqui outro número. Ele será o expoente para uma potência.'))


const resultado = Math.pow(num1, num2);

console.log(resultado); 

alert('O resultado da sua potência é ' + resultado)