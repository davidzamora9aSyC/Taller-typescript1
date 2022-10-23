import { Serie } from './series.js';

import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let promedioTbody: HTMLElement = document.getElementById('promedio')!;




renderSeriesInTable(dataSeries);

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    
    trElement.innerHTML = `
                        
                        <td class="texto light fs-5">${serie.index}</td>
                        <td class="texto light fs-5"><div id='btn' class='p-0 m-0'> ${serie.name}</div></td>
                        <td class="texto light fs-5">${serie.channel}</td>
                        <td class="texto light fs-5">${serie.seasons}</td>`;
                        
    
    seriesTbody.appendChild(trElement);
    
  });
  let promedioCalculado = document.createElement("tr");
  promedioCalculado.innerHTML= ` <div> El promedio de temporadas es:&nbsp ${getAverageOfSeasons(series)}</div>`;
  promedioTbody.appendChild(promedioCalculado);
}


function getAverageOfSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  let numberOfSeries: number =0;
  series.forEach((serie) => {
    totalSeasons = totalSeasons + serie.seasons
    numberOfSeries=numberOfSeries+1
    });
  let averageOfSeasons:number=totalSeasons/numberOfSeries;
  return averageOfSeasons;
}





