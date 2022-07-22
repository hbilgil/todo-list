
/*-----3rd Party Module imports-----*/

import Swal from 'sweetalert2'

/*-----Function and Element imports-----*/

import { openEditTaskModal, openTaskInfoModal } from './UI'
import { lists, selectedListId, saveAndRender } from './Storage'




/*---Function exports---*/

export { createTask, renderTasks, colorTasks, searchTask, updateTaskCounter }