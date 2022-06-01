const card1PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".imgs__peq__prod .js-img-peq-card1-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card1-fem");
            imgGrande.src = img.src;
        });
    });

    const btnFemProd1 = document.querySelector('[data-js="prod1__promoFem"]');
    btnFemProd1.addEventListener("click", () => {
        const modalFemCard1 = document.querySelector('[data-js="modal-fem-card-1"]');
        modalFemCard1.classList.toggle("ativo");
    })

    

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

const card6PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card6-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card6-fem");
            imgGrande.src = img.src;
        });
    });

}

const card7PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card7-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card7-fem");
            imgGrande.src = img.src;
        });
    });

}

const card8PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card8-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card8-fem");
            imgGrande.src = img.src;
        });
    });

}





card1PromoFem();
card2PromoFem();
card3PromoFem();
card4PromoFem();
card5PromoFem();
card6PromoFem();
card7PromoFem();
card8PromoFem();