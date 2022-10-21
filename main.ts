import { Serie } from './series.js';

import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let promedioTbody: HTMLElement = document.getElementById('promedio')!;
let infoTbody: HTMLElement = document.getElementById('info')!;



renderSeriesInTable(dataSeries);



const handleClick =(name:string)=>{
  console.log(name)
  renderInfo(name)
}

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    
    trElement.innerHTML = `
                        <td>${serie.index}</td>
                        <td><div id='btn' class='p-0 m-0'> ${serie.name}</div></td>
                        <td onClick={handleClick('nombre')}>${serie.channel}</td>
                        <td>${serie.seasons}</td>`;
    
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



function renderInfo(serie:string):void {
  let infoElement= document.createElement("div")
  infoElement.innerHTML=`<div> ${serie} </div>
                        <div> segundo </div>
                          `
  infoTbody.appendChild(infoElement)
}
let botonEscoger= document.getElementById("btn")!;
botonEscoger.addEventListener('click', (e) =>{
  handleClick('nombre')
  console.log('click')
})
