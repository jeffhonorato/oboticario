const card1PerfumariaMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card1-masc");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card1-masc");
            imgGrande.src = img.src;
        });
    });
}

const card2PerfumariaMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card2-masc");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card2-masc");
            imgGrande.src = img.src;
        });
    });
}

const card3PerfumariaMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card3-masc");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card3-masc");
            imgGrande.src = img.src;
        });
    });
}

const card4PerfumariaMasc = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card4-masc");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card4-masc");
            imgGrande.src = img.src;
        });
    });
}



card1PerfumariaMasc();
card2PerfumariaMasc();
card3PerfumariaMasc();
card4PerfumariaMasc();