const card1PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".imgs__peq__prod .js-img-peq-card1-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card1-fem");
            imgGrande.src = img.src;
        });
    });

    

}

const card2PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card2-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card2-fem");
            imgGrande.src = img.src;
        });
    });
}

const card3PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card3-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card3-fem");
            imgGrande.src = img.src;
        });
    });

}

const card4PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card4-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card4-fem");
            imgGrande.src = img.src;
        });
    });

}

const card5PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card5-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card5-fem");
            imgGrande.src = img.src;
        });
    });

}





card1PromoFem();
card2PromoFem();
card3PromoFem();
card4PromoFem();
card5PromoFem();