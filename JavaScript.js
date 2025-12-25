
// CONSTANTES // 
const club = "Club Portugues";
const DescuentoSocios = 0.2;

//VARIABLES//
let precioTotal = 0;

// ARRAYS // 
const deportes = ["Futbol", "Natacion", "Tennis", "Basquet"];
const precios = [30000, 40500, 25500, 30000];

let elegirDeporte = parseInt(prompt("Ingrese:" + "\n" + 
    "1 para inscribirse en Futbol" + "\n " +
    "2 para inscribirse en Natacion" + "\n" + 
    "3 para inscribirse en Tenis" + "\n" + 
    "4 para inscribirse en Basquet" + "\n" + 
    "5 si desea salir"))

switch (elegirDeporte) {
    case 1:
        precioTotal = precios[0];
        break

    case 2:
        precioTotal = precios[1];
        break

    case 3:
        precioTotal = precios[2];
        break

    case 4:
        precioTotal = precios[3];
        break

    default:
        alert("¡Gracias por consultar!")
        break
}

if (elegirDeporte > 0 && elegirDeporte <= 4){
    let esSocio = confirm("¿Ya sos socio del club?");
    if (esSocio){
        precioTotal = precioTotal - (precioTotal * DescuentoSocios);
        console.log("El valor final con descuento es de $" + precioTotal);
        alert(
            "Deporte seleccionado: " + deportes[elegirDeporte - 1] + "\n" +
            "Valor final con descuento: $" + precioTotal + "\n\n" + 
            "¡Gracias por ser parte del " + club + "!"
        );
    }
    else{
        console.log("Valor de la cuota mensual sin descuento: $" + precioTotal)
        alert(
            "Deporte seleccionado: " + deportes[elegirDeporte - 1] + "\n" +
            "Valor de la cuota mensual: $" + precioTotal + "\n\n" + 
            "Hacete socio y no te pierdas un 20% de descuento"
        )
    }
}




