"use strict";let series=[],favorites=[];function getData(e){e.preventDefault();const t=document.querySelector(".js-input-search");fetch("//api.tvmaze.com/search/shows?q="+t.value).then((function(e){return e.json()})).then(e=>{console.log(e),series=e,paintSearchEngine(),listenFavoriteSeries()})}function paintSearchEngine(){let e="";e+="<ul>";for(const t of series){let i;i=-1===favorites.indexOf(t.show.id)?"":"favorite",e+=`<li class="js-series-item ${i}" id="${t.show.id}">`,e+='<div class="series-box">',null===t.show.image?e+='<img src="https://via.placeholder.com/210x295/ffffff/666666/?\n      text=TV"/>':e+=`<img src="${t.show.image.medium}"/>`,e+=`<h2>${t.show.name}</h2>`,e+="</div>",e+="</li>"}e+="</ul>";document.querySelector(".js-container").innerHTML=e}function markFavoriteSeries(e){const t=parseInt(e.currentTarget.id),i=favorites.indexOf(t);-1===i?favorites.push(t):favorites.splice(i,1),paintSearchEngine(),listenFavoriteSeries()}function listenFavoriteSeries(){const e=document.querySelectorAll(".js-series-item");for(const t of e)t.addEventListener("click",markFavoriteSeries)}const btnElement=document.querySelector(".js-btn");btnElement.addEventListener("click",getData);