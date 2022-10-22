import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
var promedioTbody = document.getElementById('promedio');
var infoTbody = document.getElementById('info');
renderSeriesInTable(dataSeries);
var handleClick = function (serie) {
    clearInfo();
    renderInfo(serie);
};
function clearInfo() {
    while (infoTbody.hasChildNodes()) {
        if (infoTbody.firstChild != null) {
            infoTbody.removeChild(infoTbody.firstChild);
        }
    }
}
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n                        \n                        <td class=\"texto light fs-5\">".concat(serie.index, "</td>\n                        <td class=\"texto light fs-5\"><div id='btn' class='p-0 m-0'> ").concat(serie.name, "</div></td>\n                        <td class=\"texto light fs-5\">").concat(serie.channel, "</td>\n                        <td class=\"texto light fs-5\">").concat(serie.seasons, "</td>");
        trElement.addEventListener('click', function (e) {
            handleClick(serie);
            console.log(e.target);
        });
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
    infoElement.innerHTML = "\n                        <div class=\"conBorde pt-0 mt-0 text-left mx-auto\">\n                          \n                          <img class='img-fluid mb-3 mx-0 ' src=\"".concat(serie.image, "\">\n                          <div class= 'mx-3 mb-5 '>\n                            <h1 class='bold'> ").concat(serie.name, " </h1>\n                            <div class=\"p-2  texto light fs-6\"> ").concat(serie.description, " </div>\n                            <a href=\"").concat(serie.link, "\"class='p-2'> ").concat(serie.link, " </a>\n                          </div>\n\n                        </div>\n                          ");
    infoTbody.appendChild(infoElement);
}
