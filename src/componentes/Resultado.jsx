import React, { Component } from 'react';

import Imagen from './imagen'
import Paginacion from './Paginacion';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default class Resultado extends Component {

    mostrarImagenes = () => {
        const imagenes =  this.props.imagenes;

        if(imagenes.length === 0) return null;

        return(
            <React.Fragment>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                    <Masonry>
                        { imagenes.map(imagen => (
                            <Imagen
                                key={imagen.id}
                                imagen={imagen}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
                <Paginacion
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                />
            </React.Fragment>
        )
    }
    render() {
        return(
            <React.Fragment>
                { this.mostrarImagenes() }
            </React.Fragment>
        );
    }
}