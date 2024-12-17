const DIV1_1 = document.querySelector(".div-1-1");
const OFFCANVAS_1 = document.querySelector(".offcanvas-0");
const ICON_1 = document.querySelector(".close-1");
DIV1_1.addEventListener("click", function () {
    OFFCANVAS_1.classList.toggle("show-offcanvas-0")
});
ICON_1.addEventListener("click", function () {
    OFFCANVAS_1.classList.remove("show-offcanvas-0");
});



const DIV1_2 = document.querySelector(".div-1-2");
const OFFCANVAS_2 = document.querySelector(".offcanvas-0-0");
const ICON_2 = document.querySelector(".close-2");
DIV1_2.addEventListener("click", function () {
    OFFCANVAS_2.classList.toggle("show-offcanvas-0-0")
});
ICON_2.addEventListener("click", function () {
    OFFCANVAS_2.classList.remove("show-offcanvas-0-0");
});
/*
DIV1_2.addEventListener("click", function () {
    OFFCANVAS_2.classList.add("show-offcanvas-0-0");
});*/