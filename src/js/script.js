import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import AnimaScroll from "./modules/anima-scroll.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import DarkMode from "./modules/dark-mode.js";
import CountdownSeasons from "./modules/countdown-seasons.js";
import {SlideNav} from "./modules/slide.js";
import validateForm from "./modules/validate-form.js";
import fetchAnimals from "./modules/fetch-animals.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const animaScroll = new AnimaScroll('[data-anime="scroll"]');
animaScroll.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"', '[data-menu="list"');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

const darkMode = new DarkMode(".btn-dark-light");
darkMode.init();

const countdownSeasons = new CountdownSeasons(".estacoes-flex");
countdownSeasons.init();

const slide = new SlideNav(".slide-wrapper", ".slide");
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl();

validateForm("#cpf");

fetchAnimals("animalsapi.json", ".numeros-flex");
fetchBitcoin("https://blockchain.info/ticker", "#bitcoin", "#brl");
