import { useState } from 'react'
import '../css/ListaDeTareas.css'
import TareaFormulario from './TareaFormulario'
import Tarea from './Tarea'

const ListaDeTareas = () => {

    const [tareas, setTareas] = useState([])

    const agregarTarea = (tarea) => {
        if (tarea.texto)
            setTareas([tarea, ...tareas])
    }

    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id))
    }

    const completarTarea = (id) => {
        setTareas(tareas.map(tarea => {
            if (tarea.id === id) tarea.completada = !tarea.completada
            return tarea
        }))
    }

    return (
        <>
            <TareaFormulario agregarTarea={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map(tarea => (
                        <Tarea key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ListaDeTareas