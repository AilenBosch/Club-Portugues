
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
let cartProducts = [];

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
            const addButton = document.querySelectorAll(".AgregarDeporte")
            addButton.forEach(button => {
                button.onclick = (e) => {
                    const deporteId = e.currentTarget.id;
                    const deporteSeleccionado = deportes.find(deporte => deporte.id == deporteId);

                    cartProducts.push(deporteSeleccionado);
                    console.log(cartProducts);

                    localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
                }
            })
        }

agregarAlCarrito()



