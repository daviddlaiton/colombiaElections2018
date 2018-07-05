
let municipios = JSON.parse(localStorage.getItem("municipios"));
console.log(municipios);



var yourVlSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
    "width": 1000,
    "height": 600,
    "data": {
        "url": "participacion_camara.json", "format": { "type": "json" }
    },
    "mark": "bar",
    "encoding": {
        "x": {
            "field": "departamento",
            "type": "nominal",
            "axis": { "title": "Municipio" }
        },
        "y": {
            "field": "votantes",
            "type": "quantitative",
            "axis": { "title": "Porcentaje" }
        }
    }
}
vegaEmbed("#vis1", yourVlSpec);

var yourV2Spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
    "width": 1000,
    "height": 600,
    "data": {
        "url": "participacion_camara.json", "format": { "type": "json" }
    },
    "mark": "bar",
    "encoding": {
        "x": {
            "field": "departamento",
            "type": "nominal",
            "axis": { "title": "Municipio" }
        },
        "y": {
            "field": "votos_no_marcados",
            "type": "quantitative",
            "axis": { "title": "Porcentaje" }
        }
    }
}
vegaEmbed("#vis2", yourV2Spec);

var yourV3Spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
    "width": 1000,
    "height": 600,
    "data": {
        "url": "participacion_camara.json", "format": { "type": "json" }
    },
    "mark": "bar",
    "encoding": {
        "x": {
            "field": "departamento",
            "type": "nominal",
            "axis": { "title": "Municipio" }
        },
        "y": {
            "field": "votos_nulos",
            "type": "quantitative",
            "axis": { "title": "Porcentaje" }
        }
    }
}
vegaEmbed("#vis3", yourV3Spec);