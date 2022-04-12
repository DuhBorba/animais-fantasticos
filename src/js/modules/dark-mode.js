export default class DarkMode {
  constructor(btn, events) {
    this.btn = document.querySelector(btn);

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.changeDarkLight = this.changeDarkLight.bind(this);
  }
  setValuesStorage() {
    if (localStorage["theme"]) {
      document.body.classList.add(localStorage["theme"]);
    }
  }
  changeDarkLight(event) {
    event.preventDefault();
    document.body.classList.toggle("dark-document");
    this.btn.classList.toggle("dark-mode");

    if (document.body.classList.value == "dark-document") {
      localStorage["theme"] = "dark-document";
    } else {
      localStorage.removeItem("theme");
    }
  }
  addDarkLightEvent() {
    this.events.forEach((evento) => {
      this.btn.addEventListener(evento, this.changeDarkLight);
    });
  }
  init() {
    this.setValuesStorage();
    this.addDarkLightEvent();
    return this;
  }
}
