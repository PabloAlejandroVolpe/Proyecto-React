import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Carrito () {
    return (
        <button className="boton-carrito"><a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a></button>
    )
}

export default Carrito