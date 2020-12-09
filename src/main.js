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

    

}

let app = new App();

console.log("Probando sumatoriaSerieUno())");
console.log(app.sumatoriaSerieUno(1));
console.log(app.sumatoriaSerieUno(4));

console.log("Probando sumatoriaSerieDos())");
console.log(app.sumatoriaSerieDos(1));
console.log(app.sumatoriaSerieDos(4));

console.log("Probando esPrimo())");
console.log(app.esPrimo(152));
console.log(app.esPrimo(2));

