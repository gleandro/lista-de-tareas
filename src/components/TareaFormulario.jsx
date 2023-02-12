import { useState } from "react"
import "../css/TareaFormulario.css"
import { v4 as uuidv4 } from 'uuid';


const TareaFormulario = ({ agregarTarea }) => {

    const [input, setInput] = useState("")

    const manejarEnvio = e => {

        e.preventDefault()
        const tareaNueva = {
            id: uuidv4(),
            texto: input.trim(),
            completada: false
        }
        agregarTarea(tareaNueva)
        setInput("")
    }

    return (
        <form className="tarea-formulario" onSubmit={manejarEnvio}>
            <input type="text" value={input} className="tarea-input" placeholder="Escribe una Tarea" name="texto" onChange={(e) => setInput(e.target.value)} />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    )
}

export default TareaFormulario