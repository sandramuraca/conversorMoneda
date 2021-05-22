//Seleccionar Elementos del DOM
const inputArriba = document.querySelector("#inputArriba");
const inputAbajo = document.querySelector("#inputAbajo");
const optionArriba = document.querySelector("#optionCambio1");
const optionAbajo = document.querySelector("#optionCambio2");
const reset = document.querySelector("#reset");

//convertir de origen a USD
const cambioUsd = (unidadOrigen, cantidad) => {
    let resultado;
    switch(unidadOrigen) {
        case "cop":
            resultado = cantidad * 0.00027;
          break;
        case "mxn":
            resultado =cantidad * 0.050;
          break;
        case "usd":
            resultado = cantidad * 1;
          break;
    }
    return resultado;
};

//convertir de USD a moneda de destino
const cambioFinal = (intermedio, monedaDestino) => {
    let resultao;
    switch(monedaDestino) {
        case "cop":
          resultado = intermedio * 3747;
          break;
        case "mxn":
          resultado = intermedio * 19.95;
          break;
        case "usd":
          resultado = intermedio * 1;
          break;
    }
    return resultado;
};

