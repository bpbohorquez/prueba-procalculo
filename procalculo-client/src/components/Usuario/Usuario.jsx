import { useState } from "react"

export const Usuario = ({ nombreUsuario, claveUsuario }) => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        //If logeado
        setShow(true);
    }

    return (<div>
        {show && <p>Bienvenido {nombreUsuario}</p>}


    </div>)
} 