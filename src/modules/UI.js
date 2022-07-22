
/*-----3rd party Module imports-----*/

import Swal from 'sweetalert2'

/*-----Function and Element Imports-----*/

import { lists, selectedListId, saveAndRender } from './Storage'
import { createProject } from './Project'
import { createTask, searchTask, updateTaskCounter } from './Task'

/*-----UI Related Function Declarations (10 Functions)-----*/

/*---Project related display function declarations (2 functions)---*/

function openAddProjectModal() {

    const addProjectModal = document.getElementById('add-project-modal')
    const overlayWindow = document.getElementById('overlay-window')
    const addProjectModalForm = document.querySelector('[data-new-list-form]')
  
    addProjectModalForm.reset() //values inside the form will be deleted if any..
  
    overlayWindow.classList.add('active')
    addProjectModal.classList.add('active')

}

function closeAddProjectModal() {

    const addProjectModal = document.getElementById('add-project-modal')
    const overlayWindow = document.getElementById('overlay-window')
    const addProjectModalNameInput = document.querySelector('[data-new-list-input]')
  
    overlayWindow.classList.remove('active')
    addProjectModal.classList.remove('active')
  
    addProjectModalNameInput.value = null //project name input will be cleared off for next project

}

/*---Tasks related display function declarations (6 functions)---*/

function openAddTaskModal() {

    const addTaskModal = document.getElementById('add-task-modal')
    const overlayWindow = document.getElementById('overlay-window')
  
    const addTaskModalForm = document.querySelector('[data-new-task-form]')
    addTaskModalForm.reset() //values inside the form will be deleted if any..
  
    overlayWindow.classList.add('active')
    addTaskModal.classList.add('active')

}

function closeAddTaskModal() {

    const addTaskModal = document.getElementById('add-task-modal')
    const overlayWindow = document.getElementById('overlay-window')
  
    overlayWindow.classList.remove('active')
    addTaskModal.classList.remove('active')
  
    const addTaskModalNameInput = document.querySelector('[data-new-task-name-input]')
    const addTaskModalDescriptionInput = document.querySelector('[data-new-task-detail-input]')
    const addTaskModalDueDateInput = document.querySelector('[data-new-task-date-input]')
    const addTaskModalPriorityInput = document.querySelector('[data-new-task-priority-input]')
  
    //task modal inputs will be cleared off for next task
    addTaskModalNameInput.value = null
    addTaskModalDescriptionInput.value = null
    addTaskModalDueDateInput.value = null
    addTaskModalPriorityInput.value = null

}

/*-----Function exports-----*/

export { openEditTaskModal, openTaskInfoModal, initAddEventListeners }