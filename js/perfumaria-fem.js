const tabMenu = document.querySelectorAll(".js-tab-menu-perfumaria");
const tabConteudo = document.querySelectorAll(".js-conteudo-perfumaria");
tabConteudo[0].classList.add("show");


function activeTab(index) {
    tabConteudo.forEach((section) => {
        section.classList.remove("show");
    });

    tabConteudo[index].classList.add("show");
}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
        activeTab(index);
    });
});






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

const card9PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card9-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card9-fem");
            imgGrande.src = img.src;
        });
    });

}

const card10PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card10-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card10-fem");
            imgGrande.src = img.src;
        });
    });

}

const card11PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card11-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card11-fem");
            imgGrande.src = img.src;
        });
    });

}

const card12PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card12-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card12-fem");
            imgGrande.src = img.src;
        });
    });

}

const card13PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card13-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card13-fem");
            imgGrande.src = img.src;
        });
    });

}

const card14PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card14-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card14-fem");
            imgGrande.src = img.src;
        });
    });

}

const card15PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card15-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", (e) => {
            e.stopPropagation();
            const imgGrande = document.querySelector(".js-img-gra-card15-fem");
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
card9PromoFem();
card10PromoFem();
card11PromoFem();
card12PromoFem();
card13PromoFem();
card14PromoFem();
card15PromoFem();