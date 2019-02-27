let section = document.querySelectorAll("#types section");

const lager = section[0];
const ipa = section[1];
const paleAle = section[2];
const pilsner = section[3];
const stout = section[4];
const porter = section[5];
const belgian  = section[6];
const wheat = section[7];
const sour = section[8];

lager.style.cursor = "pointer";
ipa.style.cursor = "pointer";
paleAle.style.cursor = "pointer";
pilsner.style.cursor = "pointer";
stout.style.cursor = "pointer";
porter.style.cursor = "pointer";
belgian.style.cursor = "pointer";
wheat.style.cursor = "pointer";
sour.style.cursor = "pointer";

lager.addEventListener("click", lagerOpen)
ipa.addEventListener("click", ipaOpen)
paleAle.addEventListener("click", paleAleOpen)
pilsner.addEventListener("click", pilsnerOpen)
stout.addEventListener("click", stoutOpen)
porter.addEventListener("click", porterOpen)
belgian.addEventListener("click", belgianOpen)
wheat.addEventListener("click", wheatOpen)
sour.addEventListener("click", sourOpen)

function lagerOpen() {
    lager.classList.toggle("open");
    ipa.classList.remove("open");
    paleAle.classList.remove("open");
    pilsner.classList.remove("open");
    stout.classList.remove("open");
    porter.classList.remove("open");
    belgian.classList.remove("open");
    wheat.classList.remove("open");
    sour.classList.remove("open");
}
function ipaOpen() {
    lager.classList.remove("open");
    ipa.classList.toggle("open");
    paleAle.classList.remove("open");
    pilsner.classList.remove("open");
    stout.classList.remove("open");
    porter.classList.remove("open");
    belgian.classList.remove("open");
    wheat.classList.remove("open");
    sour.classList.remove("open");
}
function paleAleOpen() {
    lager.classList.remove("open");
    ipa.classList.remove("open");
    paleAle.classList.toggle("open");
    pilsner.classList.remove("open");
    stout.classList.remove("open");
    porter.classList.remove("open");
    belgian.classList.remove("open");
    wheat.classList.remove("open");
    sour.classList.remove("open");
}
function pilsnerOpen() {
    lager.classList.remove("open");
    ipa.classList.remove("open");
    paleAle.classList.remove("open");
    pilsner.classList.toggle("open");
    stout.classList.remove("open");
    porter.classList.remove("open");
    belgian.classList.remove("open");
    wheat.classList.remove("open");
    sour.classList.remove("open");
}
function stoutOpen() {
    lager.classList.remove("open");
    ipa.classList.remove("open");
    paleAle.classList.remove("open");
    pilsner.classList.remove("open");
    stout.classList.toggle("open");
    porter.classList.remove("open");
    belgian.classList.remove("open");
    wheat.classList.remove("open");
    sour.classList.remove("open");
}
function porterOpen() {
    lager.classList.remove("open");
    ipa.classList.remove("open");
    paleAle.classList.remove("open");
    pilsner.classList.remove("open");
    stout.classList.remove("open");
    porter.classList.toggle("open");
    belgian.classList.remove("open");
    wheat.classList.remove("open");
    sour.classList.remove("open");
}
function belgianOpen() {
    lager.classList.remove("open");
    ipa.classList.remove("open");
    paleAle.classList.remove("open");
    pilsner.classList.remove("open");
    stout.classList.remove("open");
    porter.classList.remove("open");
    belgian.classList.toggle("open");
    wheat.classList.remove("open");
    sour.classList.remove("open");
}
function wheatOpen() {
    lager.classList.remove("open");
    ipa.classList.remove("open");
    paleAle.classList.remove("open");
    pilsner.classList.remove("open");
    stout.classList.remove("open");
    porter.classList.remove("open");
    belgian.classList.remove("open");
    wheat.classList.toggle("open");
    sour.classList.remove("open");
}
function sourOpen() {
    lager.classList.remove("open");
    ipa.classList.remove("open");
    paleAle.classList.remove("open");
    pilsner.classList.remove("open");
    stout.classList.remove("open");
    porter.classList.remove("open");
    belgian.classList.remove("open");
    wheat.classList.remove("open");
    sour.classList.toggle("open");
}
