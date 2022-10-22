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
                        <div class="conBorde pt-0 mt-0 text-left mx-auto">
                          
                          <img class='img-fluid mb-3 mx-0 ' src="${serie.image}">
                          <div class= 'mx-3 mb-5 '>
                            <h1 class='bold'> ${serie.name} </h1>
                            <div class="p-2  texto light fs-6"> ${serie.description} </div>
                            <a href="${serie.link}"class='p-2'> ${serie.link} </a>
                          </div>

                        </div>
                          `
  infoTbody.appendChild(infoElement)
}


