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

let mode = document.createElement('li')
mode.innerHTML=`<i class="fa-solid fa-moon"></i>`
let setting = document.createElement('li')
setting.innerHTML=`	<i class="fa-solid fa-gear"></i>`
settings.append(mode,setting)


// Side BAR
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
function toHome(){
  let home = document.createElement('div')
  home.setAttribute("class", "home");
  home.innerHTML= '<h1>Welcome to Home page...</h1>'
  container.append(home)
}
function toMainPage(){
  let mainPage = document.createElement('div')
  mainPage.setAttribute("class", "mainPage");
  container.append(mainPage)

  // left side of Main Page
  let leftSide = document.createElement('div')
  leftSide.classList.add('leftSide')
  mainPage.append(leftSide)

  let searchSurah= document.createElement('div')
  searchSurah.setAttribute('class','searchSurah')
  mainPage.append(searchSurah)

  let searchInput = document.createElement('input')
  searchInput.placeholder='Search by Surah Name'
  searchSurah.append(searchInput)

  let quranSurahs = document.createElement('ul')
  quranSurahs.setAttribute('class','quranSurahs')
  searchSurah.append(quranSurahs)

  for(let i = 0; i<10;i++){
    let li = document.createElement('li')
    li.innerHTML=`${i+1} Surah name`
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
  for(let i = 0; i<10;i++){
    let card= document.createElement('div')
    card.innerHTML=`<h3>Surah</h3>`
    cards.append(card)

  }

}
function toSaved(){
  let saved = document.createElement('div')
  saved.setAttribute("class", "saved");
  saved.innerHTML= '<h1>Favourite surahs...</h1>'
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
