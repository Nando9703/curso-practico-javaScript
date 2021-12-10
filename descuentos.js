// const Precio = 100;
// const Descuento = 15;

function PrecioFinal(Precio,Descuento) {
    const PrecioAlicadoDescuento = Precio * ((100-Descuento)/100);
    return PrecioAlicadoDescuento;
}
// const PrecioFinal = Precio * ((100-Descuento)/100);
// console.log("El resultado es: "+PrecioFinal);

function onclickButtonCalcularDescuento() {
    const InputPrice = document.getElementById("InputPrice");
    const ValuePrice = InputPrice.value;
    
    const InputDiscount = document.getElementById("InputDiscount");
    const ValueDiscount = InputDiscount.value;

   const PrecioConDescuento =  PrecioFinal(ValuePrice,ValueDiscount);

    const ResultadoFinal = document.getElementById("ResultadoFinal");
     ResultadoFinal.innerText = "El precio con descuento es: $" + PrecioConDescuento;
 }

 // Aca empieza la otra fuuncion con Cupon

function PrecioFinalCupon(PrecioC,DescuentoC) {
    const PrecioAplicadoDescuentoC = (PrecioC * (1-DescuentoC));
    return PrecioAplicadoDescuentoC;
}
    
function onclickButtonCalcularDescuentoCupon() {
    const InputPriceCupon = document.getElementById("InputPriceCupon");
    const ValuePriceCupon = InputPriceCupon.value;
    
    const selecionCupon = document.getElementById("selecionCupon");
    const ValueCupon = selecionCupon.value;
    

    
    const PrecioConDescuentoCupon =  PrecioFinalCupon(ValuePriceCupon,ValueCupon);
    

    const ResultadoFinalCupon = document.getElementById("ResultadoFinalCupon");
    ResultadoFinalCupon.innerText = "El precio con descuento es: $" + PrecioConDescuentoCupon;
    
    
}