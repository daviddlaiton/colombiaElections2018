import React, { Component } from 'react';
import './App.css';
import datos from "./data/participacion_camara.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departamento : "Amazonas"
    }

    this.handleChange = this.handleChange.bind(this);

  }


  handleChange(e) {
    this.setState({ departamento : e.target.value });
  }
    render() {
      return (
        <div className="App">
          <div className="container-fluid">
            <br />
            <h1 className="App-title">Elecciones Colombia 2018</h1>
            <br />
            <h3> Aquí puedes encontrar información relacionada con las elecciones para Cámara de Representantes en Colombia, periodo 2018-2022. </h3>
            <br />
            <br />
            <h5> Selecciona un departamento </h5>
            <select onChange={this.handleChange}>
              {
                datos.map((r, i) => (
                  <option key={i} className="dropdown-item"> {r.departamento} </option>
                ))
              }
            </select>
            <br />
            <br />
            <h3>Participación en {this.state.departamento} : </h3> 
            <br />
            <br />
            <h4>Realizado por Andrés David Laiton <a href="https://twitter.com/David_Laiton/" target="_blank" rel="noopener noreferrer" > @David_Laiton</a></h4>
            <h4>Código fuente disponible <a href="https://github.com/daviddlaiton/colombiaElections2018" target="_blank" rel="noopener noreferrer" > aquí</a></h4>

          </div>
        </div>
      );
    }
  }
export default App;
