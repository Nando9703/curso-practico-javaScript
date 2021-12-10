// Codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); 

function PerimetroCuadrado(lado){
    return lado * 4;
} 
// console.log("El Perimetro del cuadrado es: " + perimetro + "cm");

function AreaCuadrado(lado){
    return lado * lado;
} 
// console.log("El Area del cuadrado es: " + AreaCuadrado + " cm^2");

console.groupEnd();

//Codigo triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const BaseTriangulo = 4;

// console.log(
//     "los lados del triangulo miden: "
//     + ladoTriangulo1 
//     + "cm, "
//     + ladoTriangulo2 
//     + "cm, "
//     + BaseTriangulo
//     + "cm, "
//     );
    
    // const AlturaTriangulo = 5;

    // console.log("La altura del triangulo es de: " + AlturaTriangulo + "cm");

    function PerimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }
    // console.log("El Perimetro del triangulo es de: " + PerimetroTriangulo + "cm");

    function areaTriangulo(Altura, base){
        return (Altura*base)/2
    } 
    // console.log("El area del triangulo es de: " + areaTriangulo + "cm^2");

    console.groupEnd();

//Codigo Circulo

console.group("Circulo");

//Radio

// const RadioCirculo = 4;
// console.log("El Radio del Circulo es: " + RadioCirculo)

// //Diametro

function DiametroCirculo(radio) {
    return radio * 2;
}
// const DiametroCirculo = RadioCirculo*2;
// console.log("El Diametro del Circulo es: " + DiametroCirculo)

 //PI

 const  PI = Math.PI;
//  console.log("PI es: "+ PI)

//Circunferencia

function PerimetroCirculo(radio) {
    const perimetro = DiametroCirculo(radio);
    return perimetro * PI;
}
// const PerimetroCirculo = DiametroCirculo * PI;
//     console.log("El Perimetro del Circulo es de: " + PerimetroCirculo + "cm");

function AreaCirculo(radio) {
    return (radio * radio)*PI;
}
//Area Circulo
//     const AreaCirculo = (RadioCirculo * RadioCirculo)* PI;
//     console.log("El area del Circulo es de: " + AreaCirculo + "cm^2");

console.groupEnd();

// Aca interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const Perimetro = PerimetroCuadrado(value);
    alert(Perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const Area = AreaCuadrado(value);
    alert(Area);
}


 function CalcularPerimetroTriangulo() {
                                                                    
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    
    const Perimetro = value1*1 + value2*1 + value3*1;

    alert(Perimetro)
}
 function CalcularAreaTriangulo() {
                                                                 
    const Altura = 5;
    const base = 2;
    const Area = (base * Altura)/2;

    alert(Area)
}