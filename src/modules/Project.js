
/*-----Function and element imports-----*/

import { lists, selectedListId } from './Storage'
import { renderTasks, colorTasks, updateTaskCounter } from './Task'

/*-----Projects Related Logic Function Declarations (4 Functions)-----*/

function createProject() { //Project create function

    const addProjectModalNameInput = document.querySelector('[data-new-list-input]')

    return {
        id: Date.now().toString(), //an automatically assigned id
        name: addProjectModalNameInput.value, 
        tasks: [] //an empty task array to be used when tasks are created
    }
}

/*-----Function exports-----*/

export { createProject, renderProjectList }