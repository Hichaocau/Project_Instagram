const getElm = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navInput = getElm('.search__input')
const iconSearch = getElm('.search__logo')
const iconClose = getElm('.search__close')
const navbarHistory = getElm('.search__history')


// click input history
const changeInput = function() {
    iconSearch.classList.toggle('hide')
    iconClose.classList.toggle('hide')
    navbarHistory.classList.toggle('hide')
}
navInput.addEventListener('click', changeInput)
iconClose.addEventListener('click', changeInput)

// click window =>> close navbarhistory
window.addEventListener('click', function(e){
    if ((!e.target.closest('.search__history')) && (!e.target.closest('.navbar__input'))){
        navbarHistory.classList.add('hide')
        iconSearch.classList.remove('hide')
        iconClose.classList.add('hide')
    }
})


// click login
const iconUser = getElm('.navbar__user')
const navbarLogin = getElm('.navbar__login')

const changeLogin = function (){
    navbarLogin.classList.toggle('hide')
}
iconUser.addEventListener('click', changeLogin)

// !e.target trả về true/fale
//closest() kiểm tra chính cái elemet đó hoặc cha của nó có chứa class đó hay không
window.addEventListener("click", function (e) {
    if (!e.target.closest('.navbar__user') && (!e.target.closest('.navbar__login'))) {
        navbarLogin.classList.add('hide')
    }
});

// khởi tạo slick slider
$(document).ready(function(){
    $('.content__main-sider').slick({
        draggable: false,
        infinite: false,
        dots: true, //dấu chấm dưới slider css: slick-dots
        // arrows: false, //ẩn previous/next
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-chevron-right"></i></button>`,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                dots: true
              }
            },
            {
              breakpoint: 741,
              settings: {
             
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false //ẩn mũi tên
              }
            }
          ],
    });
});