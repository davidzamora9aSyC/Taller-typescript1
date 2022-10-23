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
    infoElement.innerHTML = "\n  <div class=\"card mx-auto mx-lg-1\" style=\"width: 18rem;\">\n    <img class=\"card-img-top\" src=\"".concat(serie.image, "\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(serie.name, " title</h5>\n      <p class=\"card-text\">").concat(serie.description, "</p>\n      <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n    </div>\n  </div>\n                          ");
    infoTbody.appendChild(infoElement);
}
