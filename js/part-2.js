const ICON_PART2 = document.querySelector(".icon-part2");
const LINE1_PART2 = document.querySelector(".line-1");
const LINE2_PART2 = document.querySelector(".line-2");
const LINE3_PART2 = document.querySelector(".line-3");
const NAV_PART2 = document.querySelector(".nav-part2");
ICON_PART2.addEventListener("click", function () {
    LINE2_PART2.classList.toggle("hide-line-2");
    LINE1_PART2.classList.toggle("change-line-1");
    LINE3_PART2.classList.toggle("change-line-3");
    NAV_PART2.classList.toggle("show-navigation-part2");
});



const NAV_PART2_J_1 = document.querySelector(".show-Consumer-part2");
const NAV_1_PART2 = document.querySelector(".li-part2-1");
NAV_1_PART2.addEventListener("click", function () {
    NAV_PART2_J_1.classList.toggle("show-Consumer-part2-1");
})
function close_modal_part2_1() {
    NAV_PART2_J_1.classList.add("hidden-part2");
}
document.addEventListener("click", function (t) {
    if (t.target == NAV_PART2_J_1) {
        close_modal_part2_1();
    }
});




const NAV_PART2_jaygozin_2 = document.querySelector(".show-Business-part2");
const NAV_2_PART2 = document.querySelector(".li-part2-2");
NAV_2_PART2.addEventListener("click", function () {
    NAV_PART2_jaygozin_2.classList.toggle("show-Business-part2-1");
})



function close_modal_part2_2() {
    NAV_PART2_jaygozin_2.classList.add("hidden-part2");
}
document.addEventListener("click", function (tt) {
    if (tt.target == NAV_PART2_jaygozin_2) {
        close_modal_part2_2();
    }
});




const NAV_PART2_jaygozin_3 = document.querySelector(".show-Support-part2");
const NAV_3_PART2 = document.querySelector(".li-part2-3");
NAV_3_PART2.addEventListener("click", function () {
    NAV_PART2_jaygozin_3.classList.toggle("show-Support-part2-1");
})
function close_modal_part2_3() {
    NAV_PART2_jaygozin_3.classList.add("hidden-part2");
}
document.addEventListener("click", function (ttt) {
    if (ttt.target == NAV_PART2_jaygozin_3) {
        close_modal_part2_3();
    }
});




const NAV_PART2_jaygozin_4 = document.querySelector(".show-Partner-part2");
const NAV_4_PART2 = document.querySelector(".li-part2-4");
NAV_4_PART2.addEventListener("click", function () {
    NAV_PART2_jaygozin_4.classList.toggle("show-Partner-part2-1");
})
function close_modal_part2_4() {
    NAV_PART2_jaygozin_4.classList.add("hidden-part2");
}
document.addEventListener("click", function (tttt) {
    if (tttt.target == NAV_PART2_jaygozin_4) {
        close_modal_part2_4();
    }
});




const NAV_PART2_jaygozin_5 = document.querySelector(".show-About-part2");
const NAV_5_PART2 = document.querySelector(".li-part2-5");
NAV_5_PART2.addEventListener("click", function () {
    NAV_PART2_jaygozin_5.classList.toggle("show-About-part2-1");
})
function close_modal_part2_5() {
    NAV_PART2_jaygozin_5.classList.add("hidden-part2");
}
document.addEventListener("click", function (ttttt) {
    if (ttttt.target == NAV_PART2_jaygozin_5) {
        close_modal_part2_5();
    }
});



const NAV_PART2_jaygozin_6 = document.querySelector(".show-zarebin-part2");
const NAV_6_PART2 = document.querySelector(".nav-part2-3-zarebin");
NAV_6_PART2.addEventListener("click", function () {
    NAV_PART2_jaygozin_6.classList.toggle("show-zarebin-part2-1");
})


const TXTBOX_PART2_ZAREBIN = document.querySelectorAll("input");
const ICON_PART2_ZAREBIN = document.querySelector(".icon-zarebin");
ICON_PART2_ZAREBIN.addEventListener("mousedown", function () {
    ICON_PART2_ZAREBIN.classList.replace("bi-eye-slash", "bi-eye");
    let content_zare = TXTBOX_PART2_ZAREBIN[0].value;
    TXTBOX_PART2_ZAREBIN[0].classList.add("hidden-zarebin");
    TXTBOX_PART2_ZAREBIN[1].classList.remove("hidden-zarebin");
    TXTBOX_PART2_ZAREBIN[1].value = content_zare;
});
ICON_PART2_ZAREBIN.addEventListener("mouseup", function () {
    ICON_PART2_ZAREBIN.classList.replace("bi-eye", "bi-eye-slash");
    let content_zare = TXTBOX_PART2_ZAREBIN[1].value;
    TXTBOX_PART2_ZAREBIN[1].classList.add("hidden-zarebin");
    TXTBOX_PART2_ZAREBIN[0].classList.remove("hidden-zarebin");
    TXTBOX_PART2_ZAREBIN[0].value = content_zare;
});