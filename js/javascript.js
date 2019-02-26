// Menu
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav");
const menuElem = document.querySelectorAll(".nav a");
const burgerElem = document.querySelectorAll(".burger span");
const filter = document.querySelector(".filter");
const filterElem = document.querySelectorAll(".filter a");
const filterBtn = document.querySelector(".filterBtn");
const filterDot = document.querySelectorAll(".dot");

burger.addEventListener("click", openNav);

// Menu animation
function openNav() {
    //reset filter button
    /*filter.classList.add("hide");
    filterDot[0].classList.remove("filterSlideTop");
    filterDot[1].classList.remove("filterSlideMiddle");
    filterDot[2].classList.remove("filterSlideBottom");*/

    //menu animation + activation
    menu.classList.toggle("hide");
    burgerElem[0].classList.toggle("menuOpened");
    setTimeout(next, 100)

    function next() {
        burgerElem[1].classList.toggle("menuOpened");
        setTimeout(last, 100)
    }

    function last() {
        burgerElem[2].classList.toggle("menuOpened");
    }
        menuElem.forEach(function(elem){
        elem.classList.toggle("filterAnimations");
    });
}
// Filter animation
filterBtn.addEventListener("click", openFilter);

function openFilter() {
    //Menu reset
    /*menu.classList.add("hide");
    burgerElem[0].classList.remove("menuOpened");
    setTimeout(next, 100)

    function next() {
        burgerElem[1].classList.remove("menuOpened");
        setTimeout(last, 100)
    }

    function last() {
        burgerElem[2].classList.remove("menuOpened");
    }*/

    //filter animation + activation
    filter.classList.toggle("hide");
    filterDot[0].classList.toggle("filterSlideTop");
    filterDot[1].classList.toggle("filterSlideMiddle");
    filterDot[2].classList.toggle("filterSlideBottom");
    filterElem.forEach(function(elem){
        elem.classList.toggle("filterAnimations");
    });
}
// products JSON
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
    clone.querySelector(".alcohol").textContent = data.gsx$alcohol.$t + " %";
    clone.querySelector(".author a").textContent = data.gsx$author.$t;
    clone.querySelector(".author a").href = "index.html#" + data.gsx$author.$t;
    clone.querySelector("p").textContent = data.gsx$shortdescription.$t;
    clone.querySelector("section").classList.add(data.gsx$author.$t);

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

let filter2 = document.querySelectorAll(".filter2");

console.log(filter2);

filter2.forEach(filterOut);

function filterOut(a) {
    a.addEventListener("click", e => {
        const all = document.querySelectorAll(".list-item")
        console.log(e.target.dataset.filter);
        all.forEach(a => {
            if (a.classList.contains(e.target.dataset.filter)) {
                a.classList.remove("hide");
            } else {
                a.classList.add("hide");
            }
        })

    });
};
