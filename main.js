const navInputWrap = document.querySelector('.navbar__input')
const navInput = document.querySelector('.search__input')
const iconSearch = document.querySelector('.search__logo')
const iconClose = document.querySelector('.search__close')
const navbarHistory = document.querySelector('.search__history')

const html = document.querySelector('html')

const changeInput = function() {
    iconSearch.classList.toggle('hide')
    iconClose.classList.toggle('hide')
    navbarHistory.classList.toggle('hide')
}

navInputWrap.addEventListener('click', changeInput)


// html.addEventListener('click', function(e) {
//     if(iconSearch.classList.contains('hide') && ){
//     iconSearch.classList.toggle('hide')
//     iconClose.classList.remove('hide')    
//     }
// })


const iconUser = document.querySelector('.navbar__user ')
const navbarLogin = document.querySelector('.navbar__login ')

const changeLogin = function (){
    navbarLogin.classList.toggle('hide')
}

iconUser.addEventListener('click', changeLogin)