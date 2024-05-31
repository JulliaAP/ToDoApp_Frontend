import React from "react";
import { AreaHeader } from "./styled_header";

function Topo() {
    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <img src="../../lista.png" />
                </div>
                <nav>
                    <ul>
                        <li>Configurações</li>
                        <li>Sair</li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    )
}

export default Topo;