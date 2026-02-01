let cartContainer = document.getElementById("cart-section")

let cartStorage = localStorage.getItem ("cartProducts")
cartStorage = JSON.parse(cartStorage)

function imprimirProductosEnHTML(cartItems){
    cartItems.forEach(deporte =>{
        const cart = document.createElement("div")
        cart.innerHTML = `<h3> ${deporte.deporte}
                        <h4> Precio: ${deporte.precio}</h4>`
        cartContainer.appendChild(cart)

    })

}

imprimirProductosEnHTML(cartStorage)
