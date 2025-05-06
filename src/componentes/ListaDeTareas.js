import React from "react";
import TareaFormulario from "./TareaFormulario";
import "./../styles/ListaDeTareas.css";
import { useState } from "react";

function ListaDeTareas() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
      console.log()
    }

    return(
        <div>
            <TareaFormulario />
            <div className="tareas-lista-contenedor">
              {
                tareas.map((tarea) =>
                    <Tarea 
                      texto={tarea.texto}
                      completada={tarea.completada}
                    />
                )
              }
            </div>
        </div>
    );
}

export default ListaDeTareas;