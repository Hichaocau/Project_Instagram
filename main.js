const getElm = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const body = getElm('body')

// click input history
function clickInputHistory() {

  const navInput = getElm('.search__input')
  const iconSearch = getElm('.search__logo')
  const iconClose = getElm('.search__close')
  const navbarHistory = getElm('.search__history')

  const changeInput = function() {
      iconSearch.classList.toggle('hide')
      iconClose.classList.toggle('hide')
      navbarHistory.classList.toggle('hide')
      // delete value input 
        const deleteValue = function() {
          navInput.value = null
      }
      deleteValue()
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
}
clickInputHistory()

// click login
function clickLogin() {

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
}
clickLogin()

// delete all element in history list
function deleteAll() {

  const historyItem =  $$('.search__history-list')
  const deleteAll = getElm('.search__history-header--clear')
  
  const deleteAllItem = function(){
    for(var i= 0 ; i< historyItem.length; i++){
        historyItem[i].classList.add('hide')
      }
  }
  deleteAll.addEventListener('click', deleteAllItem)
}
deleteAll()

// delete each all element in history list
function deleteEach() {
  const historyItem =  $$('.search__history-list')
  const iconHistory = $$('.search__history-list--icon')

  // cach 1 dung for
  // for(let i =0 ; i < historyItem.length; i++){
  //   iconHistory[i].onclick = function(e){
  //     historyItem[i].classList.add('hide')
  //   }
  // }
  for(let i =0 ; i < historyItem.length; i++){
    iconHistory[i].addEventListener('click', function(e){
      historyItem[i].classList.add('hide')
    })
  }

  //cach 2 dung forEach
  // iconHistory.forEach(function(item, index){
  //   item.onclick = function(e){
  //     historyItem[index].classList.add('hide')
  //   }
  // })
}
deleteEach()


// actice like
function activeLike() {
  var likeArray = [15.454 , 464.385 , 18.686, 308.416 , 200.701, 10.178]

  // function convert number
  function numberFormat(num) {
    let fmt = new Intl.NumberFormat();
    return fmt.format(num);
  }
  numberFormat()

  const spanLike = $$('.content__des-span')
  const newSpan = likeArray.map(function(item){
    return `
    <span class="content__des-span">${numberFormat(item)} likes</span>
    `
  })

  for ( let i = 0; i < spanLike.length; i++){
    spanLike[i].innerHTML = newSpan[i]
  }

  // click icon like +1
  const loveIcon = $$('.love')
  const loveIconActive = $$('.love_active')

  for ( let i = 0; i < loveIcon.length; i++){
    loveIcon[i].addEventListener('click', function(e){
      loveIconActive[i].classList.toggle('hide')
      let newSpan = likeArray.map(function(item){
        return `
        <span class="content__des-span">${numberFormat(item + 0.001)} likes</span>
        `
      })   
        spanLike[i].innerHTML = newSpan[i]
      })
  }

  // click icon like -1
  for ( let i = 0; i < loveIconActive.length; i++){
    loveIconActive[i].addEventListener('click', function(e){
      loveIconActive[i].classList.toggle('hide')
      let newSpan = likeArray.map(function(item){
        return `
        <span class="content__des-span">${numberFormat(item)} likes</span>
        `
      })
      spanLike[i].innerHTML = newSpan[i]
    })
  }
}
activeLike()

// delete item in offer
function deleteOffer() {
  const iconDelete = $$('.content__offer-close i')
  const offerItem = $$('.content__offer-item')
  
  iconDelete.forEach(function(item, index){
    item.addEventListener('click', function(e){
      offerItem[index].classList.add('hide')
    })
  })
}
deleteOffer()

// click button follow
function clickBtn() {

  const buttonFollow = $$('.content__button')
  const buttonWatching = $$('.button__active')
  
  for( let i = 0; i < buttonFollow.length; i++){
    const buttonText = function() {
      buttonFollow[i].classList.toggle('hide')
      buttonWatching[i].classList.toggle('hide')
    }
    
    buttonFollow[i].addEventListener('click', buttonText)
    buttonWatching[i].addEventListener('click', buttonText)
  }
}
clickBtn()

// click suggest follow
function clickTextFollow() {

  const textFollow = $$('.suggest__list-item-user-text')
  const textWatching = $$('.suggest__list-item-user-text--active')
  
  for( let i = 0; i < textFollow.length; i++){
    const changeFollow = function() {
      textFollow[i].classList.toggle('hide')
      textWatching[i].classList.toggle('hide')
    }
    
    textFollow[i].addEventListener('click', changeFollow)
    textWatching[i].addEventListener('click', changeFollow)
  }
}
clickTextFollow()


// active modal
function activeModal() {
  
  const iconMenu = $$('.content__main-header-icon')
  const iconCloseModal = $$('.modal__item--active')
  const modal = getElm('.modal')
  
  function changeModal() {
    modal.classList.toggle('hide')
    if(!modal.classList.contains('hide')){
      body.style.overflow = 'hidden'
    }
    else{
      body.style.overflow = 'visible'
    }
  }
  
  for (let i = 0; i < iconMenu.length; i++) {
    iconMenu[i].addEventListener('click', changeModal)
  }
  
  for (let i = 0; i < iconCloseModal.length; i++) {
  iconCloseModal[i].addEventListener('click', changeModal)
  }

  modal.addEventListener('click', function(e) {
    if(e.target === e.currentTarget) {
      changeModal()
    }
  })
}
activeModal()

// currentTarget: là nơi mà phần tử 
// đã được gắn 1 trình xử lý sự kiện rõ ràng (modal ẩn/hiện)

// target: là nơi mà phần tử có sự kiện xảy ra

// click creat new post
function creatNewPost() {
  const createPost = getElm('.navbar__list-item--create')
  const iconCreatPost = getElm('.navbar__list-item--create-wrap')
  const iconClosePost = getElm('.create__icon')

  function changePost() {
    createPost.classList.toggle('hide')
    if(!createPost.classList.contains('hide')){
      body.style.overflow = 'hidden'
    }
    else{
      body.style.overflow = 'visible'
    }
  }

  iconCreatPost.addEventListener('click', changePost)
  iconClosePost.addEventListener('click', changePost)

  createPost.addEventListener('click', function(e) {
    if(e.target === e.currentTarget) {
      changePost()
    }
  })
}
creatNewPost()

// click open message/explore
function openMessExplore() {
  const container = getElm('.container')

  const Mess = getElm('.message')
  const iconOpenMess = getElm('.navbar__list-item--message')
  const iconCloseMess = getElm('.message__icon')

  const exploree = getElm('.explore')
  const iconExplore = getElm('.navbar__list-item--explore')

  const iconHome = getElm('.navbar__list-item--home')
  const logoInsta = getElm('.navbar__logo-link img')
  
  // click open message
  function changeMess() {
    Mess.classList.toggle('hide')
    if(!Mess.classList.contains('hide')){
      body.style.overflow = 'hidden'
    }
    else{
      body.style.overflow = 'visible'
    }
  }

  iconOpenMess.addEventListener('click', changeMess)
  iconCloseMess.addEventListener('click', changeMess)

  Mess.addEventListener('click', function(e) {
        if(e.target === e.currentTarget) {
          changeMess()
  }
})

  // // click open explore
  function changeExplore() {
    exploree.classList.toggle('hide')
    container.classList.toggle('hide')
    Mess.classList.add('hide')
  }
  iconExplore.addEventListener('click', changeExplore)

  // click go home
  function goHome() {
    if(container.classList.contains('hide')){
      container.classList.remove('hide')
      exploree.classList.add('hide')
    }  
      Mess.classList.add('hide')
  }
  iconHome.addEventListener('click', goHome)
  // click logo insta
  logoInsta.addEventListener('click', goHome)

}
openMessExplore()

// click open new message
function openNewMess() {
  const createMess = getElm('.creatmess')
  const iconCreateMess = getElm('.message__info-header svg')
  const btnCreateMess = getElm('.message__detail-wrap button')
  const iconCloseMess = getElm('.creatmess__header i')
  const inputMess = getElm('.creatmess__search input')
  

  const iconOpenSwitch = getElm('.message__info-header-user')
  const switchAccount = getElm('.switch')
  const iconCloseSwitch = getElm('.switch__footer')

  function changeCreateMes() {
    createMess.classList.toggle('hide')

    const deleteSearch = function() {
      inputMess.value = null
    }
    deleteSearch()
  }
  
  iconCreateMess.addEventListener('click', changeCreateMes)
  btnCreateMess.addEventListener('click', changeCreateMes)
  iconCloseMess.addEventListener('click', changeCreateMes)

  createMess.addEventListener('click', function(e) {
    if(e.target === e.currentTarget){
      changeCreateMes()
    }
  })

  // switch accounts
  function changeAccount() {
    switchAccount.classList.toggle('hide')
  }

  iconOpenSwitch.addEventListener('click', changeAccount)
  iconCloseSwitch.addEventListener('click', changeAccount)

  switchAccount.addEventListener('click', function(e) {
    if(e.target === e.currentTarget){
      changeAccount()
    }
  })
}
openNewMess()

// click open notify
function openNotify() {
  const notify = getElm('.notify')
  const iconNotify = getElm('.navbar__list-item--notify svg')
 
  function changeNotify() {
    notify.classList.toggle('hide')
  }

  iconNotify.addEventListener('click', changeNotify)
  // click window =>> close notify
  window.addEventListener('click', function(e){
    if ((!e.target.closest('.notify')) && (!e.target.closest('.navbar__list-item--notify'))){
      notify.classList.add('hide')
    }
})

}
openNotify() 

