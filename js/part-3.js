const ICONS_PART3 = document.querySelectorAll(".icon-seri3");
const PIC = document.querySelector(".img-seri3");
const IMAGES = ["pictures/2.jpg", "pictures/3.jpg"];
let index_part3 = 0;

ICONS_PART3[0].addEventListener("click", function () {
    index_part3--;
    if (index_part3 < 0) {
        index_part3 = IMAGES.length - 1;
    }
    PIC.setAttribute("src", IMAGES[index_part3]);
});

ICONS_PART3[1].addEventListener("click", function () {
    index_part3++;
    if (index_part3 >= IMAGES.length) {
        index_part3 = 0;
    }
    PIC.setAttribute("src", IMAGES[index_part3]);
});