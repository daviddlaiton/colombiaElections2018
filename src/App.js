import React, { Component } from 'react';
import './App.css';
import datos from "./data/participacion_camara.json";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departamento: "Amazonas"
    }

    this.handleDepartamentoChange = this.handleDepartamentoChange.bind(this);

  }

  componentWillMount(){
    this.setState({departamento : localStorage.getItem("Departamento")});
  }

  handleDepartamentoChange(e) {
    this.setState({ departamento: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <br />
          <h1 className="App-title">Elecciones Colombia 2018</h1>
          <br />
          <h3> Aquí puedes encontrar información relacionada con las elecciones para Cámara de Representantes en Colombia, periodo 2018-2022. </h3>
          {/* 
          En esta parte intenté realizar el filtro (Aunque en Bogotá no funcionaba dado que no tiene municipios). 
          Una vez aplicado se guardaba la información en localStorage. De esta manera pudé tomar esta información desde fuera de React. 
          Sin embargo el JSON que este arrojaba nunca pude hacer que vega-lite lo interpretara.
          No entiendo por qué, dado que le estoy mandando un Array de Objetos. Este Array lo intenté poner a mano 
          (e.g. {"municipio":"El Encanto","habilitados":783,"votantes":392,"votos_no_marcados":2,"votos_nulos":14},
          {"municipio":"La Chorrera","habilitados":999,"votantes":598,"votos_no_marcados":13,"votos_nulos":49},
          {"municipio":"La Pedrera","habilitados":991,"votantes":464,"votos_no_marcados":7,"votos_nulos":24})
          Y sí funcionó, pero desde el JSON no funcionaba. Por esta razón no dejé el filtro, únicamente muestra información de los departamentos.

          Ahora bien, si tomaba exactamente los datos almacenados como "municipios" en el localstorage y lo guardaba en un archivo JSON sí tomaba los datos correctamente.
          Por lo cual intenté reescribir este archivo. Sin embargo, FileServer no puede ser implementado en el cliente, por lo cual no pude hacerlo. Creo que utilizando 
          Express puede hacerse esto sin problema y serviria. Y cambiar los elementos de vega-lite como lo habia hecho es fácil de realizar.

          Finalmente, opté por dejar un archivo llamado "participación_camara.json" en el cual se encuentra la información completa de
          cada departamento y municipio. Este se encuentra en las carpetas "src/data" y en "public". 
          Este archivo lo realicé basado en los datos de infrahumano. Más especificamente el archivo "participacion.csv". Dado que tomé dicho archivo,
          lo organice alfabeticamente según depertamento y después según municipio. Finalmente, realicé una estructura JSON mediante la concatenación de Excel.
          Esto se puede ver en el archivo "participacion.xlsx", más especificamente en la hoja 1.
          ----------------------------------------------------------------------------------------------------------------------------------------------------------
          <h5> Selecciona un departamento </h5>
          <select onChange={this.handleDepartamentoChange}>
            {
              datos.map((r, i) => (
                <option key={i} className="dropdown-item"> {r.departamento} </option>
              ))
            }
            {
              datos.map((r,i) => {
                if(r.departamento === this.state.departamento){
                  localStorage.setItem("Departamento", r.departamento);
                  localStorage.setItem("municipios", JSON.stringify(r.municipios));
                  localStorage.setItem("habilitados", r.habilitados);
                  localStorage.setItem("votantes", r.votantes);
                  localStorage.setItem("votos_no_marcados", r.votos_no_marcados);
                }
                return null;
              })
            
          </select>
          }*/}
          <br />
          {/* 
          Muestra del filtro seleccionado
          -------------------------------------------------------------------------------------------------------------------------------------------------------------
          <h3>Participación en el departamento de {this.state.departamento} </h3> */}
        </div>
      </div>
    );
  }
}
export default App;
