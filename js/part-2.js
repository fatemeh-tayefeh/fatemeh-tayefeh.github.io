const ICON_PART2 = document.querySelector(".icon-part2");
const LINE1_PART2 = document.querySelector(".line-1");
const LINE2_PART2 = document.querySelector(".line-2");
const LINE3_PART2 = document.querySelector(".line-3");
const NAV_PART2  = document.querySelector(".nav-part2");

ICON_PART2.addEventListener("click", function () {
    LINE2_PART2.classList.toggle("hide-line-2");
    LINE1_PART2.classList.toggle("change-line-1");
    LINE3_PART2.classList.toggle("change-line-3");
    NAV_PART2.classList.toggle("show-navigation-part2");
});