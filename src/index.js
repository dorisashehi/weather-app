import './assets/styles/main.scss'
import './assets/images/spinner.gif'
import './assets/images/partly-cloudy.jpg'
import { getLocationData, toggleSidebar} from "./modules/app";


getLocationData(); //GET DEFAULT WEATHER LOCATION
toggleSidebar();