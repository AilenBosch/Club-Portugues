
// CONSTANTES // 
const club = "Club Portugues";
const DescuentoSocios = 0.2;

// VARIABLES //
let precioTotal = 0;
let continuar = true


// ARRAYS // 
const deportes = [
    {
        id: 1,
        deporte: "Futbol",
        precio: 30000,
    },

    {
        id: 2,
        deporte: "Natacion",
        precio: 40500,
    },

    {
        id: 3,
        deporte: "Tennis",
        precio: 25500,
    },

    {
        id: 4,
        deporte: "Basquet",
        precio: 30000,
    },

];

let productsContainer = document.getElementById("products-container")
let cartProducts = []

function imprimirProductosEnHTML(deportes) {
    let deport = document.getElementById("Deportes")
    deportes.forEach(deporte => {
        const card = document.createElement("div")
        card.className = "Card"
        card.innerHTML = `<h3> Deporte: ${deporte.deporte}</h3>
                        <h4> Precio: ${deporte.precio}</h4>
                        <button class= "AgregarDeporte" id="${deporte.id}">Agregar</button>`
        deport.appendChild(card)
            })
}

imprimirProductosEnHTML(deportes)

        function agregarAlCarrito() {
            addButton = document.querySelectorAll(".AgregarDeporte")
            addButton.forEach(button => {
                button.onclick = (e) => {
                    const deporteId = e.currentTarget.id
                    const deporteSeleccionado = deportes.find(deporte => deporte.id == deporteId)

                    cartProducts.push(deporteSeleccionado)
                    console.log(cartProducts)

                    localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
                }
            })
        }
agregarAlCarrito()
/*function mostrarResultado(elegirDeporte, precioTotal, esSocio) {
    if (esSocio) {
        precioTotal = precioTotal - (precioTotal * DescuentoSocios);
        console.log("El valor final con descuento es de $" + precioTotal);
        alert(
            "Deporte seleccionado: " + deportes[elegirDeporte - 1] + "\n" +
            "Valor final con descuento: $" + precioTotal + "\n\n" +
            "¡Gracias por ser parte del " + club + "!"
        );
    }
    else {
        console.log("Valor de la cuota mensual sin descuento: $" + precioTotal)
        alert(
            "Deporte seleccionado: " + deportes[elegirDeporte - 1] + "\n" +
            "Valor de la cuota mensual: $" + precioTotal + "\n\n" +
            "Hacete socio y no te pierdas un 20% de descuento"
        )
    }
}

while (continuar) {
    let elegirDeporte = parseInt(prompt("Ingrese:" + "\n" +
        "1 para inscribirse en Futbol" + "\n" +
        "2 para inscribirse en Natacion" + "\n" +
        "3 para inscribirse en Tenis" + "\n" +
        "4 para inscribirse en Basquet" + "\n" +
        "5 si desea salir"))

    switch (elegirDeporte) {
        case 1:

        case 2:

        case 3:

        case 4:
            precioTotal = precios[elegirDeporte - 1];
            let esSocio = confirm("¿Ya sos socio del club?");
            mostrarResultado(elegirDeporte, precioTotal, esSocio);
            break;

        case 5:
            continuar = false;
            console.log("¡Gracias por consultar!");
            break;

        default:
            alert("Opción Incorrecta")
            break;
    }

    let confirmation = prompt("¿Desea consultar por otro deporte? (si/no)").toLowerCase()
    if (confirmation == "no") {
        continuar = false
        console.log("¡Gracias por consultar!")
    }

}
*/


