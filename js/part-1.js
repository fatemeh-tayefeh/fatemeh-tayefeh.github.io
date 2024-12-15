const DIV1_1 = document.querySelector(".div-1-1");
const OFFCANVAS_1 = document.querySelectorAll(".offcanvas-0");

DIV1_1.addEventListener("click", function () {
    OFFCANVAS_1.classlist.add("show-offcanvas-1");
});