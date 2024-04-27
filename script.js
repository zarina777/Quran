let app = document.querySelector('.app')



// TOP NAVBAR
let topNav = document.createElement('div')
topNav.classList.add('topNav')
app.append(topNav)

// LOGO
let logo = document.createElement('div')
logo.classList.add('logo')
logo.innerHTML=`<img src="./assets/media/logo.png" alt=""> <div class="logoText"><h4>Quran Mazid</h4> <span>Read and Learn the Noble Quran</span></div>`
topNav.append(logo)

// Settings and Mode
let settings = document.createElement('ul')
settings.classList.add('settings')
topNav.append(settings)

let modal = document.createElement('div')
modal.setAttribute('class','settingModal')
modal.innerHTML=`<h2>Settings</h2> <span> <i class="fa-solid fa-x"></i></span>`
app.append(modal)
 
let bgCover = document.createElement('div')
bgCover.setAttribute('class','bg-cover')
app.append(bgCover)

let mode = document.createElement('li')
mode.innerHTML=`<i class="fa-solid fa-moon"></i>`
mode.addEventListener('click',()=>{
if(mode.innerHTML==`<i class="fa-solid fa-moon"></i>`){
mode.innerHTML='<i class="fa-solid fa-sun"></i>'
document.querySelector('body').style.backgroundColor='rgb(0,0,0)'
document.getElementsByClassName('leftSide')[0].style.backgroundColor='rgba(165, 103, 48, 0.692)'
document.getElementsByClassName('leftSide')[0].style.color='rgb(255,255,255)'
let allItem=document.getElementsByClassName('dark-mode')
for(i=0;i<allItem.length;i++){
  allItem[i].style.color='rgb(255,255,255)'
}
let surahs= document.querySelectorAll('.cards-container div')
for(let i=0;i<surahs.length;i++){
  surahs[i].style.backgroundColor='rgba(165, 103, 48, 0.692)'
  surahs[i].style.color='rgb(255,255,255)'
}
}else{
  let allItem=document.getElementsByClassName('dark-mode')
for(i=0;i<allItem.length;i++){
  allItem[i].style.color='rgb(147, 96, 30)'
}
  document.getElementsByClassName('leftSide')[0].style.backgroundColor='rgb(255,255,255)'
document.getElementsByClassName('leftSide')[0].style.color='rgb(0,0,0)'
  let surahs= document.querySelectorAll('.cards-container div')
for(let i=0;i<surahs.length;i++){
  surahs[i].style.backgroundColor='rgb(255,255,255)'
  surahs[i].style.color='rgb(0,0,0)'
}
mode.innerHTML=`<i class="fa-solid fa-moon"></i>`
document.querySelector('body').style.backgroundColor='#fff'
}
  
})


let setting = document.createElement('li')
setting.innerHTML=`	<i class="fa-solid fa-gear"></i>`
settings.append(mode,setting)
setting.addEventListener('click',()=>{
  bgCover.style.display='block'
  modal.style.right='-1px'
})
bgCover.addEventListener('click',()=>{
  bgCover.style.display='none'
  modal.style.right='-200%'
})
document.getElementsByClassName('fa-x')[0].addEventListener('click',()=>{
  bgCover.style.display='none'
  modal.style.right='-200%'
})
let nav = null
let home = null
let mainPage=null
let saved = null
let container=null



const history = {
  push: (url) => {
    window.history.pushState({}, "", `#/${url}`);
    sessionStorage.setItem("path", url);
  },
  path: () => {
    return sessionStorage.getItem("path");
  },
};


//SIDEBAR
const sideBar ={
addComponents:()=>{
  nav = document.createElement('ul');
   nav.classList.add('sidebar');
  app.append(nav)
   home= document.createElement('li')
  home.innerHTML='<i class="fa-solid fa-house"></i>'
   mainPage= document.createElement('li')
  mainPage.innerHTML='<i class="fa-solid fa-book-open"></i>'
   saved= document.createElement('li')
  saved.innerHTML='<i class="fa-solid fa-bookmark"></i>'
  nav.append(home,mainPage,saved)
  for(let i=0;i<nav.children.length;i++){
    nav.children[i].classList.add('sidebarNavEl')
  }
}
}
function getContainer(){
  container= document.createElement('div')
  container.setAttribute("class", "container");
  app.appendChild(container);
}


//HOME PAGE
function toHome(){
  let home = document.createElement('div')
  home.setAttribute("class", "home");
  home.innerHTML= '<h1>Welcome to Home page...</h1>'
  container.append(home)
}


//MAIN PAGE
function toMainPage(){
  let mainPage = document.createElement('div')
  mainPage.setAttribute("class", "mainPage");
  container.append(mainPage)

  // left side of Main Page
  let leftSide = document.createElement('div')
  leftSide.classList.add('leftSide')
  mainPage.append(leftSide)

  let searchSurah= document.createElement('form')
  searchSurah.setAttribute('class','searchSurah')
  searchSurah.innerHTML='<input class="searchInput" type="text" placeholder="Search by Surah Name"><i class="fa-solid fa-magnifying-glass"></i>'
  leftSide.append(searchSurah)
  
  let quranSurahs = document.createElement('ul')
  quranSurahs.setAttribute('class','quranSurahsUl')
  leftSide.append(quranSurahs)

  for(let i = 0; i<10;i++){
    let li = document.createElement('li')
    li.innerHTML=`<span class='dark-mode'>${i+1}</span> <div class='surah-info'><h3>Surah name</h3> <p>Subname</p></div> <p>Arabic text</p>`
    quranSurahs.append(li)
  }
  
  // right side of Main Page
  let rightSide = document.createElement('div')
  rightSide.classList.add('rightSide')
  mainPage.append(rightSide)
  let nameOfSurah = document.createElement("h2")
  nameOfSurah.textContent='The name of Surah'
  rightSide.append(nameOfSurah)
  let cards = document.createElement("div")
  cards.setAttribute('class','cards-container')
  rightSide.append(cards)
  for(let i = 0; i<15;i++){
    let card= document.createElement('div')
    card.innerHTML=`<h3>${i+1} Surah</h3>`
    cards.append(card)

  }

}
function toSaved(){
  let saved = document.createElement('div')
  saved.setAttribute("class", "saved");
  saved.innerHTML= '<h1>Saved Surahs...</h1>'
  container.append(saved)
}
function entered(el){
let elements = document.getElementsByClassName('sidebarNavEl')
for(i=0;i<elements.length;i++){
  if(elements[i].className.includes('clicked')){
    elements[i].classList.remove('clicked')
  }
}
el.classList.add('clicked')

}
function Clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

}
(() => {
  sideBar.addComponents();
  getContainer()

  if (history.path()) {
    if (history.path() === "home") {
      window.history.pushState({}, document.title, window.location.pathname);
      history.push("home");
      toHome()
      entered(home)
    } else if(history.path()==="main") {
      window.history.pushState({}, document.title, window.location.pathname);
      history.push("main");
      toMainPage()
      entered(mainPage)
    } else{
      toSaved()
      entered(saved)
    }
  } else {
    history.push('main')
    toMainPage()
    entered(mainPage)
  }
})();

home.addEventListener("click", () => {
  history.push("home");
  Clear(container);
  toHome()
  entered(home)
});
mainPage.addEventListener("click", () => {
  history.push("main");
  Clear(container);
  toMainPage()
  entered(mainPage)

});
saved.addEventListener("click", () => {
  history.push("saved");
  Clear(container);
  toSaved()
  entered(saved)
});
