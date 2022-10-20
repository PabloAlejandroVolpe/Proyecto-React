import React from "react";
import Logo from "./CartWidget";


function NavBar () {
    return (
        <>
            <header>
                <div className="interior">
                    <a href="#" className="logo"><Logo /></a>
                   <h5>Barra Movil</h5>
                    <nav className="navegacion">
                        <ul>
                            <li><a href="#">Premium</a></li>
                            <li><a href="#">Gold</a></li>
                            <li><a href="#">Basicos</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavBar