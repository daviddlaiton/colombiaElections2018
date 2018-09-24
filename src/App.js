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
          <br/>
          <Graph></Graph>
          <br/>
          <h2>A continuación encotraras la caracterización de los datos</h2>
          <ul>
            <li><b>What:</b> Esta visualización muestra información con <b>items</b> y <b>atributtes</b>, almacenados en una <b>table</b>. 
            Los departamentos son <b>categorical</b> y los valores asociados a estos son <b>Ordered - Sequential</b>.</li>
            <li><b>Why:</b> Esta visualización busca que el usuario pueda realizar un descubrimiento de tendencias <b>(Discover - Trends)</b>. 
            También puede explorar los datos buscando aquellos valores atipicos <b>(Explore - Outliers)</b></li>
            <li><b>How:</b> Esta visualización tiene como marcas y canales: <b>Encode - Order</b>, <b>Manipulate - Change</b> y <b>Encode - Align</b></li>
          </ul>
          <h4>Realizado por Andrés David Laiton <a href="https://twitter.com/David_Laiton/" target="_blank" rel="noopener noreferrer"> @David_Laiton</a>
          </h4>
          <h4>Código fuente disponible <a href="https://github.com/daviddlaiton/colombiaElections2018" target="_blank" rel="noopener noreferrer"> aquí</a>
          </h4>
          <h4>Datos de los resultados de las votaciones liberados por <a href="https://github.com/finiterank">Javier Moreno</a></h4>
        </div>
      </div>
    );
  }
}
export default App;
