const card1PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card1-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-img-gra-card1-fem");
            imgGrande.src = img.src;
        });
    });

    console.log(imgPequenas)

}

const card2PromoFem = () => {
    const imgPequenas = document.querySelectorAll(".js-img-peq-card2-fem");
    imgPequenas.forEach((img) => {
        img.addEventListener("click", () => {
            const imgGrande = document.querySelector(".js-img-gra-card2-fem");
            imgGrande.src = img.src;
        });
    });

    console.log(imgPequenas)

}

card1PromoFem();
card2PromoFem();