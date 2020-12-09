export default class App {

    sumatoriaSerieUno(numero) {
        let suma = 1;

        for(let i = 2; i <= numero; i = i + 1) {
            suma = suma + 1 / i;
        }
        return suma;
    }

    


}

let app = new App();

console.log("Probando sumatoriaSerieUno())");
console.log(app.sumatoriaSerieUno(1));
console.log(app.sumatoriaSerieUno(4));

