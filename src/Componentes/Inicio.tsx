import React from "react";
import {Componente01} from "./Componente01";
import {Componente02} from "./Componente02";
import {Link} from "react-router-dom";
import DemoHooks from "./DemoHooks";
function Inicio(){
    return(
        <div>
            <h1><i className="bi bi-caret-right-fill"></i> Inicio</h1>
            <section className="d-flex justify-content-around">
                <div className="card" style={{width: 30 + '%'}}>
                    <div className="card-header">Componente 01</div>
                    <div className="card-body"><Componente01></Componente01></div>
                </div>
                <div className="card" style={{width: 30 + '%'}}>
                    <div className="card-header">Componente 02</div>
                    <div className="card-body"><Componente02></Componente02></div>
                </div>
                <div className="card" style={{width: 30 + '%'}}>
                    <div className="card-header">Navegación por link</div>
                    <div className="card-body">
                        <Link to="/Componente01">Demo</Link><br/>
                        <Link to="/Componente02">Sedes</Link><br/>
                    </div>
                </div>

                <div className="card" style={{width: 30 + '%'}}>
                    <div className="card-header">Uso de Hooks</div>
                    <div className="card-body"><DemoHooks></DemoHooks></div>
                </div>
            </section>
        </div>
    );
}

export default Inicio;