import React, { Component } from 'react';

export default class Buscador extends Component {

    busquedaRef = React.createRef()

    obtenerDatos = (e) => {
        e.preventDefault();
        //tomamos el valor delinput y lollevamos al componente principal
        const termino = this.busquedaRef.current.value
        this.props.datosBusqueda(termino)  
    }

    render() {
        return(
            <form onSubmit = { this.obtenerDatos }>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input
                        ref={ this.busquedaRef }
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca tu imagen.  Ejem: Futbol"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                        />
                    </div>
                </div>
            </form>
        )
    }
}