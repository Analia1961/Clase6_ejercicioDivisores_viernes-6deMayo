// Modularización y Métodos -CLASE 6- viernes 6 de mayo
// MÉTODOS
//Ejercicio: Divisores

/* 
• Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores.
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5.
• Re-utilice el método esMultiplo implementado para el ejercicio anterior.
*/

function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}
function cantidadDeDivisores(numero: number): number {
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor < numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      cantidad++;
    }
  }
  return cantidad;
}
let rotulo = document.getElementById("rotulo");

rotulo.innerHTML = "Indique un número: ";

let dato = document.getElementById("dato");

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numero: number = Number(dato.value);
  let numDivisores: number = cantidadDeDivisores(numero);
  console.log("El número " + numero + " tiene " + numDivisores + " divisores.");
});

/* visto y leído en: Repositorio Prof. Daniel Tonelli
Link: https://codesandbox.io/s/github/daniel-tonelli/Repositorio 
*/
