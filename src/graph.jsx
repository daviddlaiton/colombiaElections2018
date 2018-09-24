import React, { Component } from 'react';
import * as d3 from "d3";
import datos from "./data/participacion_camara.json";

export default class Graph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            opcion: "habilitados"
        }

        this.changeDropdown = this.changeDropdown.bind(this);
        this.titleToShow = this.titleToShow.bind(this);
    }



    changeDropdown(e) {
        this.setState({ opcion: e.target.value })
        this.doGraph();
    }

    titleToShow() {
        switch (this.state.opcion) {
            case "habilitados":
                return "Número de personas habilitadas para las elecciones del 11 de Marzo de 2018 por Departamento";
            case "votantes":
                return "Número de personas que votaron en las elecciones del 11 de Marzo de 2018 por Departamento";
            case "votos_no_marcados":
                return "Número de votos no marcados en las elecciones del 11 de Marzo de 2018 por Departamento"
            case "votos_nulos":
                return "Número de votos nulos en las elecciones del 11 de Marzo de 2018 por Departamento"
        }
    }

    doGraph() {
        let selectedItem = this.state.opcion;

        let datosOrdenados = datos.sort(function (a, b) { return b[selectedItem] - a[selectedItem]; });

        let height = 500,
            width = 1000,
            margin = ({ top: 10, right: 10, bottom: 20, left: 40 });

        let x = d3.scaleBand()
            .domain(datosOrdenados.map((d) => { return d.departamento }))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        let y = d3.scaleLinear()
            .domain([0, d3.max(datosOrdenados.map((d) => { return d[selectedItem] }))])
            .rangeRound([height - margin.bottom, margin.top]);

        let xAxis = g => g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0))
            .call(g => g.selectAll(".domain").remove());

        let yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).ticks(null, "s"))
            .call(g => g.selectAll(".domain").remove());

        

        const svg = d3.select(this.svg);
        svg.html("");

        let tooltip = svg.append("text")
            .style("font-size", "10pt")
            .style("font-family", "sans-serif")
            .style("fill", "steelblue");

        svg.append("g")
            .selectAll("g")
            .data(datosOrdenados)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return x(d.departamento) + 2 })
            .attr("y", function (d) { return y(d[selectedItem]) })
            .attr("height", function (d) { return height - y(d[selectedItem]) - 20 })
            .attr("width", 20)
            .attr("fill", "steelblue")
            .on("mouseover", function (d) {
                tooltip.attr("x", x(d.departamento))
                  .attr("y", y(d[selectedItem])-10)
                  .text(`Valor: ${d[selectedItem]} `);
              });  

        svg.append("g")
            .attr("class", "x axis")
            .call(xAxis)
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(45)")
            .style("text-anchor", "start");

        svg.append("g")
            .call(yAxis);
    }

    //Based on https://beta.observablehq.com/@mbostock/d3-stacked-bar-chart
    componentDidMount() {
        this.doGraph();
    }
    render() {
        return (
            <div>
                <select id="typeChart" onChange={this.changeDropdown}>
                    <option value="habilitados">Número de personas habilitadas</option>
                    <option value="votantes">Número de votantes</option>
                    <option value="votos_no_marcados">Número de votos no marcados</option>
                    <option value="votos_nulos">Número de votos nulos</option>
                </select>
                <br />
                <br />
                <h4 className="title">{this.titleToShow()}</h4>
                <svg width="1050" height="570" ref={(svg) => this.svg = svg}></svg>
            </div>
        )
    }
}