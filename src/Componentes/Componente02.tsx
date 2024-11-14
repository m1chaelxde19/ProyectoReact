import React from "react";
let Sedes=['Lima','Chiclayo','Chimbote'];
export const Componente02= () => {
  return (
    <div>
        <p>Listado de Sedes</p>
        <ul>
            {Sedes.map(sede=>{ return <li>{sede}</li>;})}
        </ul>
    </div>
  );
}