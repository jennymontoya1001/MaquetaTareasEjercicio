import React from 'react';

export const ListarTarea = () => {
    return (
        <div>
            <h3 className="text-center">Lista de Tareas</h3>
            <ul className="list-group">

                <li className="list-group-item" >
                    <span className="lead"></span>
                    <button
                        className="btn btn-danger btm-sm float-end "

                    >
                        borrar
                    </button>
                    <button
                        className="btn btn-warning btm-sm float-end mx-2"

                    >
                        Editar
                    </button>
                    <a
                        className="btn btn-success btm-sm float-end mx-2"
                        href="/"
                    >
                        Detalle
                    </a>
                </li>
            </ul>
        </div>
    )
}
