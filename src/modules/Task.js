
/*-----3rd Party Module imports-----*/

import Swal from 'sweetalert2'

/*-----Function and Element imports-----*/

import { openEditTaskModal, openTaskInfoModal } from './UI'
import { lists, selectedListId, saveAndRender } from './Storage'

/*-----Task Logic Function Declarations (7 Functions)-----*/

function createTask() { //Task create function

    const addTaskModalNameInput = document.querySelector('[data-new-task-name-input]')
    const addTaskModalDescriptionInput = document.querySelector('[data-new-task-detail-input]')
    const addTaskModalDueDateInput = document.querySelector('[data-new-task-date-input]')
    const addTaskModalPriorityInput = document.querySelector('[data-new-task-priority-input]')
  
    return {
        id: Date.now().toString(), //an automatically assigned id
        name: addTaskModalNameInput.value,
        date: addTaskModalDueDateInput.value,
        priority: addTaskModalPriorityInput.value,
        description: addTaskModalDescriptionInput.value,
        complete: false, //unchecked checkbox created initially
    }
}

/*---Function exports---*/

export { createTask, renderTasks, colorTasks, searchTask, updateTaskCounter }