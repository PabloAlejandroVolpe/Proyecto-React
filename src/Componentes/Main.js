import React from "react";
import ItemListContainer from "./ItemListContainer";
import Carrito from "./Carrito";



function Main () {
    return (
        <main>
        <ItemListContainer texto="premium"
                     descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id rerum ducimus pariatur illum distinctio totam repudiandae consequuntur aperiam doloremque ratione?"/>
        <Carrito />
        </main>
    )
}

export default Main