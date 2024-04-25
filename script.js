let app = document.querySelector('.app')
let nav = null;
let calc = null;
let todo = null;
let container = null;

// ---

const history = {
  push: (url) => {
    window.history.pushState({}, "", `#/${url}`);
    sessionStorage.setItem("path", url);
  },
  path: () => {
    return sessionStorage.getItem("path");
  },
};

const navObject = {
  addComponents: () => {
    nav = document.createElement("nav");
    calc = document.createElement("button");
    calc.textContent = "calc";
    todo = document.createElement("button");
    todo.textContent = "todo";
    nav.appendChild(calc);
    nav.appendChild(todo);
    app.appendChild(nav);
  },
};

const containerObject = {
  addComponents: () => {
    container = document.createElement("div");
    container.setAttribute("class", "container");
    app.appendChild(container);
  },
};

// ----

function Calc() {
  let h1 = document.createElement("h1");
  h1.textContent = "Calc";

  container.appendChild(h1);
}

function Todo() {
  let h1 = document.createElement("h1");
  h1.textContent = "To-do List";

  container.appendChild(h1);
}

function Clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// ----
(() => {
  navObject.addComponents();
  containerObject.addComponents();

  if (history.path()) {
    if (history.path() === "calc") {
      window.history.pushState({}, document.title, window.location.pathname);
      history.push("calc");
      Calc();
    } else {
      todo();
    }
  } else {
    history.push("calc");
    Calc();
  }
})();

// ----

calc.addEventListener("click", () => {
  history.push("calc");
  Clear(container);
  Calc();
});

todo.addEventListener("click", () => {
  history.push("todo");
  Clear(container);
  Todo();
});