const age = document.querySelector("#age");
const ageBtn = document.querySelectorAll("button");

ageBtn[1].addEventListener("click", yes)

function yes() {
    age.classList.add("ageAway");
}

ageBtn[0].addEventListener("click", no)

function no() {
    const ageText = document.querySelector("#age h2");
    ageText.textContent = "Go ...";
    setTimeout(next, 1000);

    function next() {
        ageText.textContent = "Go Away...";
        setTimeout(nextEnd, 1000)
    }
    function nextEnd(){
        ageText.textContent = "Go Away!";
    }
}

const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav");
const filter = document.querySelector(".filter");
const filterBtn = document.querySelector(".filterBtn");

burger.addEventListener("click", openNav);

function openNav() {
    menu.classList.toggle("hide");
}

filterBtn.addEventListener("click", openFilter);

function openFilter() {
    filter.classList.toggle("hide");
}


const link = "https://spreadsheets.google.com/feeds/list/10k5FHg8AolohKoybFTJarvWLSzhzOe-jr8HbHa6KZwU/od6/public/values?alt=json";

const section = document.querySelector("main");
const template = document.querySelector("template").content;


function load(link) {
    fetch(link).then(e => e.json()).then(data => data.feed.entry.forEach(displayList));
}

function displayList(data) {
    const clone = template.cloneNode("true");
    clone.querySelector("h2").textContent = data.gsx$name.$t;
    clone.querySelector(".type a").textContent = data.gsx$type.$t;
    clone.querySelector(".country").textContent = data.gsx$country.$t;
    clone.querySelector(".brewery").textContent = data.gsx$brewery.$t;
    clone.querySelector(".alcohol").textContent =  data.gsx$alcohol.$t + " %";
    clone.querySelector(".author a").textContent = data.gsx$author.$t;
    clone.querySelector("p").textContent = data.gsx$shortdescription.$t;

    if (data.gsx$season.$t == "1") {
        clone.querySelector(".season").textContent = "Seasonal";
    }


    if (data.gsx$image.$t == "") {
        clone.querySelector("img").src = "img/placeholder.png";
    } else {
        clone.querySelector("img").src = "img/" + data.gsx$image.$t;
        clone.querySelector("img").alt = data.gsx$name.$t;
    }


    section.appendChild(clone);
}
load(link);
