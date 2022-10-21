import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var promedioTbody = document.getElementById('promedio');
var infoTbody = document.getElementById('info');
renderSeriesInTable(dataSeries);
var handleClick = function (name) {
    console.log(name);
    renderInfo(name);
};
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n                        <td>".concat(serie.index, "</td>\n                        <td><div id='btn' class='p-0 m-0'> ").concat(serie.name, "</div></td>\n                        <td onClick={handleClick('nombre')}>").concat(serie.channel, "</td>\n                        <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var promedioCalculado = document.createElement("tr");
    promedioCalculado.innerHTML = " <div> El promedio de temporadas es:&nbsp ".concat(getAverageOfSeasons(series), "</div>");
    promedioTbody.appendChild(promedioCalculado);
}
function getAverageOfSeasons(series) {
    var totalSeasons = 0;
    var numberOfSeries = 0;
    series.forEach(function (serie) {
        totalSeasons = totalSeasons + serie.seasons;
        numberOfSeries = numberOfSeries + 1;
    });
    var averageOfSeasons = totalSeasons / numberOfSeries;
    return averageOfSeasons;
}
function renderInfo(serie) {
    var infoElement = document.createElement("div");
    infoElement.innerHTML = "<div> ".concat(serie, " </div>\n                        <div> segundo </div>\n                          ");
    infoTbody.appendChild(infoElement);
}
var botonEscoger = document.getElementById("btn");
botonEscoger.addEventListener('click', function (e) {
    handleClick('nombre');
    console.log('click');
});
