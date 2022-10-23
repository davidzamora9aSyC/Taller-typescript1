import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var promedioTbody = document.getElementById('promedio');
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n                        \n                        <td class=\"texto light fs-5\">".concat(serie.index, "</td>\n                        <td class=\"texto light fs-5\"><div id='btn' class='p-0 m-0'> ").concat(serie.name, "</div></td>\n                        <td class=\"texto light fs-5\">").concat(serie.channel, "</td>\n                        <td class=\"texto light fs-5\">").concat(serie.seasons, "</td>");
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
