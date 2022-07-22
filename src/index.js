/*-----Function imports-----*/

import './style.css';
import { initAddEventListeners } from './modules/UI'
import { saveAndRender } from './modules/Storage'
import { openFirstProject } from './modules/Project'

/*-----Homepage onload add event listeners-----*/

document.addEventListener('DOMContentLoaded', initAddEventListeners) //UI event listeners are imported to load homepage
document.addEventListener('DOMContentLoaded', saveAndRender)
document.addEventListener('DOMContentLoaded', openFirstProject) //when page refreshed or entered the first time by the user, 1st project's tasks are opened