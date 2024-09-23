
let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendDisplay(result){
    let {title, link, description} = result;
    
   let resultContainerEl = document.createElement("div");
   searchResultsEl.appendChild(resultContainerEl);
   
   let titleEl = document.createElement("a");
   titleEl.href = link;
   titleEl.textContent = title;
   titleEl.classList.add("result-title");
   titleEl.target = "_blank";
   resultContainerEl.appendChild(titleEl);
  
    let breakEl1 = document.createElement("br");
     resultContainerEl.appendChild(breakEl1);
    let linkEl = document.createElement("a");
    linkEl.href = link;
    linkEl.classList.add("result-url")
    linkEl.textContent = link;
    linkEl.target = "_blank";
    resultContainerEl.appendChild(linkEl);
    
    let breakEl2 = document.createElement("br");
     resultContainerEl.appendChild(breakEl2);
    
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultContainerEl.appendChild(descriptionEl);
}
function searchWikipedia(event){
    if(event.key === "Enter"){
         let inputValue = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + inputValue;
    let options = {
        method : "GET",
    }
    searchResultsEl.textContent = "";
    spinnerEl.classList.toggle("d-none");
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
        let {search_results} = jsonData;
        console.log(search_results);
        
        spinnerEl.classList.toggle("d-none");
        for(let eachItem of search_results){
            createAndAppendDisplay(eachItem);
        }
    })
    }
}
searchInputEl.addEventListener('keydown',searchWikipedia);
    
   
