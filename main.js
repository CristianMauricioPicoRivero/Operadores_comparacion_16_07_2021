//Pedir 2 datos por pantalla y almacenarlo en dos variables 
//diferentes:
//Variable 1(8)  Variable 2 (20)
//Realizar todas las Operacion compracion vistas en la clase
//Mostra en la consola todos los posibles resultados
//y explicar con sus propias palabras porque se dio es resultado 'true , false'

let a = 8;
let b = 20;

//Operador Mayor que
console.log(`El a = ${a} es mayor que el b = ${b} :` , a>b,`Es falso porque el 8 es menor que 20`);
//Operador Mayor o igual que
console.log(`El a = ${a} es mayor o igual que el b = ${b} :`, a>=b,`Es falso porque el 8 es menor y no es igual que 20`);
//Operador Menos que
console.log(`El a = ${a} es menor que el b = ${b} :`, a<b,`Es verdadero porque el 8 es menor que 20`);
//Operador Menor o igual que
console.log(`El a = ${a} es menor o igual que el b = ${b} :`, a<=b,`Es verdadero porque el 8 es menor que 20`);
//Operador Igual
console.log(`El a = ${a} es igual que el b = ${b} :`, a==b,`Es falso porque el 8 no es igual que 20`);
//Operador Identico que
console.log(`El a = '${a} ${typeof a}' es identico que el b = '${b} ${typeof b}' :` ,a==b,`Es falso porque el 8 no es identico a 20`);
//Operador Diferente que
console.log(`El a = ${a} es diferente que el b = ${b} :`, a!=b,`Es verdadero porque el 8 es diferente a 20`);
//Operador No Diferente que
console.log(`El a = '${a} ${typeof a}' es No diferente que el b = '${b} ${typeof b}' :`, a!==b,`Es verdadero porque el 8 es No diferente que 20`);