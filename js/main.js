var headers = ["Designer", "Freelancer", "Photographer"];

async function header_effect() {
    var element = document.querySelector(".home h2");
    element.classList.remove('home-animation');
    var target = "";
    for (let i = 0; i < headers.length; i++) {
        if (element.innerHTML == headers[i]) {
            target = headers[(i + 1) % headers.length];
        }
    }

    while (element.innerHTML != "") {
        element.innerHTML = element.innerHTML.slice(0, -1);
        await sleep(100);
    }

    var idx = 0;
    while (element.innerHTML != target) {
        element.innerHTML += target.charAt(idx);
        idx++;
        await sleep(100);
    }
    element.classList.add('home-animation');
    setTimeout(header_effect, 1500);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeout(header_effect, 1000);

window.onload = function(){
    var currentScrollPos = window.pageYOffset;
    var element = document.getElementsByClassName("anchor-top")[0];
    if (currentScrollPos != 0){
        element.style.opacity = "1";
    }
}

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var element = document.getElementsByClassName("anchor-top")[0];
    if (currentScrollPos == 0) {
        element.style.opacity = "0";
    } else {
        element.style.opacity = "1";
    }
}