/*-----Function imports-----*/

import './style.css';
import { initAddEventListeners } from './modules/UI'
import { saveAndRender } from './modules/Storage'

/*-----Homepage onload add event listeners-----*/

document.addEventListener('DOMContentLoaded', initAddEventListeners) //UI event listeners are imported to load homepage
document.addEventListener('DOMContentLoaded', saveAndRender)