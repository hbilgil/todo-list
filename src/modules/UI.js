
/*-----3rd party Module imports-----*/

import Swal from 'sweetalert2'

/*-----Function and Element Imports-----*/

import { lists, selectedListId, saveAndRender } from './Storage'
import { createProject } from './Project'
import { createTask, searchTask, updateTaskCounter } from './Task'



/*-----Function exports-----*/

export { openEditTaskModal, openTaskInfoModal, initAddEventListeners }