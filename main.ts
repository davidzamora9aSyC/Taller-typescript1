import { Serie } from './series.js';

import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let promedioTbody: HTMLElement = document.getElementById('promedio')!;
let infoTbody: HTMLElement = document.getElementById('info')!;



renderSeriesInTable(dataSeries);



const handleClick =(serie:Serie)=>{
  
  clearInfo()
  renderInfo(serie)
}

function clearInfo():void{
  while (infoTbody.hasChildNodes()) {
    if (infoTbody.firstChild != null) {
      infoTbody.removeChild(infoTbody.firstChild);
     
    }
  }
}

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    
    trElement.innerHTML = `
                        
                        <td class="texto light fs-5">${serie.index}</td>
                        <td class="texto light fs-5"><div id='btn' class='p-0 m-0'> ${serie.name}</div></td>
                        <td class="texto light fs-5">${serie.channel}</td>
                        <td class="texto light fs-5">${serie.seasons}</td>`;
                        
    trElement.addEventListener('click', (e) =>{
      handleClick(serie)
      console.log(e.target)
    })
    
    
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



function renderInfo(serie:Serie):void {
  let infoElement= document.createElement("div")
  infoElement.innerHTML=`
  <div class="card mx-auto mx-lg-1" style="width: 18rem;">
    <img class="card-img-top" src="${serie.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${serie.name} title</h5>
      <p class="card-text">${serie.description}</p>
      <a href="${serie.link}">${serie.link}</a>
    </div>
  </div>
                          `
  infoTbody.appendChild(infoElement)
}


