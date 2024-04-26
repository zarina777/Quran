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
sideBar.addComponents()



