const link = "https://spreadsheets.google.com/feeds/list/10k5FHg8AolohKoybFTJarvWLSzhzOe-jr8HbHa6KZwU/od6/public/values?alt=json";

const section = document.querySelector("section");
const template = document.querySelector("template").content;


function load(link){
    fetch(link).then(e=>e.json()).then(data=>data.feed.entry.forEach(displayList));
}

function displayList(data){
    const clone = template.cloneNode("true");
    clone.querySelector("h2").textContent = data.gsx$name.$t;
    clone.querySelector(".type").textContent = data.gsx$type.$t;
    clone.querySelector(".country").textContent = data.gsx$country.$t;
    clone.querySelector(".brewery").textContent = data.gsx$brewery.$t;
    clone.querySelector(".alcohol").textContent = "VOL " + data.gsx$alcohol.$t + " %";
    clone.querySelector(".author a").textContent = data.gsx$author.$t;
    clone.querySelector("p").textContent = data.gsx$shortdescription.$t;

    if(data.gsx$season.$t == "1"){
        clone.querySelector(".season").textContent = "Seasonal";
    }


    if(data.gsx$image.$t == ""){
        clone.querySelector("img").src = "/img/placeholder.png";
    }
    else{
        clone.querySelector("img").src ="/img/" + data.gsx$image.$t;
        clone.querySelector("img").alt = data.gsx$name.$t;
    }


    section.appendChild(clone);
}
load(link);
