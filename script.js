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
let sideBar = document.createElement('div')
sideBar.classList.add('sidebar')
app.append(sideBar)





