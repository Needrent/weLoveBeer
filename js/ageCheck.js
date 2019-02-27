// Age check
const age = document.querySelector("#age");
const ageBtn = document.querySelectorAll("button");

ageBtn[1].addEventListener("click", yes)

function yes() {
    window.location = "about.html";
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

    function nextEnd() {
        ageText.textContent = "Go Away!";
    }
}
