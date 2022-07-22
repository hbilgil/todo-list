
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

function renderNewProject() { //creating and appending project cards at DOM Tree

    const newListContainer = document.querySelector('[data-lists]');
    
    lists.forEach((list) => {

        const listElement = document.createElement('li')
        listElement.innerText = list.name;
        listElement.dataset.listId = list.id;

        if (list.id === selectedListId) {
            listElement.classList.add('active')
        }
        newListContainer.appendChild(listElement) //the new project card will be added into projects container
    })
}

/*-----Function exports-----*/

export { createProject, renderProjectList }