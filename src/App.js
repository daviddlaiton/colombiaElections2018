import React, { Component } from 'react';
import './App.css';
import Graph from "./graph";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <br />
          <h1 className="App-title">Elecciones Colombia 2018</h1>
          <br />
          <h3> Aquí puedes encontrar información relacionada con las elecciones para Cámara de Representantes en Colombia, periodo 2018-2022. </h3>
          <Graph></Graph>
          <h4>Realizado por Andrés David Laiton <a href="https://twitter.com/David_Laiton/" target="_blank" rel="noopener noreferrer"> @David_Laiton</a>
          </h4>
          <h4>Código fuente disponible <a href="https://github.com/daviddlaiton/colombiaElections2018" target="_blank" rel="noopener noreferrer"> aquí</a>
          </h4>
        </div>
      </div>
    );
  }
}
export default App;
