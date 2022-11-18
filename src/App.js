import React, { Component } from 'react';
import './App.css';

import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado'

export default class App extends Component{

  state = {
    termino: '',
    imagenes: [],
    pagina: '',
  }
  
  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina
    //Si la pagina es 1 no volver
    if(pagina === 1) return null
    //Resta uno a la pagina actual
    pagina += 1
    //agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll()
    });
  }

  paginaSiguiente = () => {
    //leer el state de la pagina actual
  let pagina = this.state.pagina
    //Sumar uno a la pagina actual
    pagina += 1
    //agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll()
    });
  }

  consultarApi = () => {
    const seBusca = this.state.termino;
    const pagina = this.state.pagina;
    const url = 'https://pixabay.com/api/?key=11893609-913857d96bb200fce41442aff&q=$' + seBusca + '&page='+pagina+'&lang=esp';

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))
  }



  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi()
    })
  }

  render() {
    return(
      <div className="app container">
        <div className="jumbotron">
          <h3 className="lead text-center font-weight-bolder text-muted">Buscador de imágenes</h3>
          <Buscador
          datosBusqueda={ this.datosBusqueda }
           />
        </div>
        <div>
              <Resultado
              imagenes={ this.state.imagenes }
              paginaAnterior={this.paginaAnterior}
              paginaSiguiente={this.paginaSiguiente}
              />
        </div>
      </div>
    )
  }
}
