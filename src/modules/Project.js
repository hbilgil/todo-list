
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

function renderProjectList() { //Projects and their tasks will be kept, displayed and rendered into the page

    const newListContainer = document.querySelector('[data-lists]');

    clearElement(newListContainer)
    renderNewProject()

    const projectDisplayContainer = document.querySelector('[data-list-display-container]')
    const selectedList = lists.find((list) => list.id === selectedListId)
    const taskList = document.querySelector('[data-tasks]')
    const projectTitle = document.querySelector('[data-list-title]')
    const projectCounter = document.querySelector('[data-list-counter]')

    if (!newListContainer.hasChildNodes()) { //checks if the project container has at least 1 child element

        projectDisplayContainer.style.display = ''
        taskList.style.display ='none'
        projectTitle.innerText ='Please create a project'
        projectCounter.innerText = ''
    } else {
        
        if(selectedList === undefined) { //if there is at least 1 project in container, but NONE of them is selected
        
        projectDisplayContainer.style.display = ''
        taskList.style.display ='none'
        projectTitle.innerText ='Please choose a project'
        projectCounter.innerText = ''

        } else {

        projectDisplayContainer.style.display = ''
        projectTitle.innerHTML = `<i class="fas fa-tasks"></i> ${selectedList.name}`; //the project name will be shown as a Tasks list header
        taskList.style.display = ''
        updateTaskCounter(selectedList) //a function to show total # of "Uncompleted tasks"
        clearElement(taskList) //a function to keep task container updated
        renderTasks(selectedList) //tasks will be added into the DOM
        colorTasks(selectedList); //tasks will have different colors based on their "priorities" (red for high, yellow for moderate and green for low priorities)
        }
    }
}

function clearElement(element) { //a function to keep list container updated

    while (element.firstChild) { //checks if the project container has at least 1 child element, otherwise returns..
        element.removeChild(element.firstChild)
    }
}

/*-----Function exports-----*/

export { createProject, renderProjectList }