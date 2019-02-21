const link = "https://spreadsheets.google.com/feeds/list/10k5FHg8AolohKoybFTJarvWLSzhzOe-jr8HbHa6KZwU/od6/public/values?alt=json";

const section = document.querySelector("section");
const template = document.querySelector("template").content;


function load(link){
    fetch(link).then(e=>e.json()).then(data=>data.feed.entry.forEach(displayList));
}
    console.log(section);
function displayList(data){
    const clone = template.cloneNode("true");
    clone.querySelector("h2").textContent = data.gsx$name.$t;

    section.appendChild(clone);
}
load(link);
