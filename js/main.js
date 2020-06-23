// $(document).ready(function () {
//     const mMenu = $(".m-menu");
//     const mMenuBtn = $(".m-menu-button");
//     const tab = $(".tab");
//     mMenuBtn.on("click", function () {
//         mMenu.toggleClass("active");
//         $('body').toggleClass("no-scroll");
//     });
//     tab.on('click', function () {
//         tab.removeClass("active");
//         $(this).toggleClass("active");
//         let activetabContent = $(this).attr("data-target");
//         $('.tabs-contant').removeClass("visible")
//         $(activetabContent).toggleClass("visible")
//     });
//
//     var mySwiper = new Swiper ('.swiper-container', {
//         // // Optional parameters
//         // direction: 'vertical',
//         slidesPerView: 4,
//         spaceBetween: 25,
//         loop: true,
//         breakpoints: {
//             992: {
//                 slidesPerView: 4,
//             },
//             768: {
//                 slidesPerView: 2,
//             },
//             320: {
//                 slidesPerView: 1,
//                 slidesOffsetAfter: 50,
//                 navigation: {
//                     nextEl: ".button-next"
//                 }
//             }
//         }
//     });
// });

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".arrow",
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
        }
    }
    // speed: 400,
    // spaceBetween: 100
});

var menuButton = document.querySelector(".menu-button");
var menu = document.querySelector(".header");

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu-button-active');
    console.log("кнопка нажата");
    menu.classList.toggle('header-active');
});
var player = new Playerjs({id:"player", file:"../film/TheWitcherS01/The.Witcher.S01.E01.avi"});

