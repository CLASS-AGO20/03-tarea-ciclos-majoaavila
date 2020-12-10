export default class App {
    
    sumatoriaSerieUno(numero) {
        let suma = 1;

        for(let i = 2; i <= numero; i = i + 1) {
            suma = suma + 1 / i;
        }
        return suma;
    }


    sumatoriaSerieDos(numero) {
        let i = 2;
        let suma = 1;

        while(i <= numero){
            if(i % 2 === 0) {
                suma = suma + 1 / i;

            } else {
                suma = suma - 1 / i;
            }
            i++;

        } return suma;
    }


    esPrimo(numero) {
        let i = 1;
        let suma = 0;

        do {
            if(numero % i === 0) {
                suma ++;
                i ++;

            } else {
                i ++;
            }

        }
         while(i <= numero); 

         if(suma === 2) {
             return true;

         } else {
             return false;
         }
    } 

    obtenerMultiplos(inicio, fin) {
        let i = inicio;
        let multiplos = "";

        do{
            if(i % 3 === 0) {
                multiplos = multiplos + i;
            } 
            i = i + 1;

        } while (i <= fin);
        return multiplos;
    }

    obtenerImpares(numero1, numero2) {
        let impares = "";

        if(numero1 > numero2){
            let n = numero1;
            numero1 = numero2;
            numero2 = n;
        }

        for(let i = numero2; i >= numero1; i--){
            if(numero2 % 2 !== 0){
                impares = impares + "," + numero2;
                numero2--;

            } else {
                numero2--;
            }
        }
        return impares;
}
}

let app = new App();

console.log("Probando sumatoriaSerieUno())");
console.log(app.sumatoriaSerieUno(1));
console.log(app.sumatoriaSerieUno(4));

console.log("Probando sumatoriaSerieDos())");
console.log(app.sumatoriaSerieDos(1));
console.log(app.sumatoriaSerieDos(4));

console.log("Probando esPrimo())");
console.log(app.esPrimo(3));
console.log(app.esPrimo(9));

console.log("Probando obtenerMultiplos");
console.log(app.obtenerMultiplos(10, 25));

console.log("Probando obtenerImpares");
console.log(app.obtenerImpares(5, 10));

