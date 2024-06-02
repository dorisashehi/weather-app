import './assets/styles/main.scss'
import './assets/images/spinner.gif'
import './assets/images/partly-cloudy.jpg'
import { sidebarModule } from './modules/sidebar';
import {contentModule } from "./modules/content";
import { getLocationData } from "./modules/app";

getLocationData(); //GET DEFAULT WEATHER LOCATION
