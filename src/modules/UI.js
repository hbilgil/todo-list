
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

function openEditTaskModal(task, taskId) {

    const editTaskModal = document.getElementById('edit-task-modal')
    const overlayWindow = document.getElementById('overlay-window')
  
    const editTaskModalForm = document.querySelector('[data-edit-task-form]')
    const editTaskModalNameInput = document.querySelector('[data-input-task-name]')
    const editTaskModalDescriptionInput = document.querySelector('[data-input-detail-name]')
    const editTaskModalDateInput = document.querySelector('[data-input-due-date]')
    const editTaskModalPriorityInput = document.querySelector('[data-input-priority]')
  
    editTaskModalNameInput.value = task.name;
    editTaskModalDateInput.value = task.date;
    editTaskModalPriorityInput.value = task.priority;
    editTaskModalDescriptionInput.value = task.description;
  
    overlayWindow.classList.add('active')
    editTaskModal.classList.add('active')
  
    let checkbox = document.getElementById(task.id)
    let newLabel = checkbox.nextSibling.nextSibling
    const selectedList = lists.find((list) => list.id === selectedListId)
    const selectedTask = selectedList.tasks.find((task) => task.id === taskId)
  
    /*---Function scope Event Listener declaration---*/
  
    editTaskModalForm.addEventListener("submit", (e) => {
  
        e.preventDefault() //preventing unwanted entries
  
        const editedTaskName = editTaskModalNameInput.value
        const lowerCasedEditedTaskName = editedTaskName.toLowerCase()
  
        if (selectedTask.name.toLowerCase() === lowerCasedEditedTaskName || selectedList.tasks.find((task) => (task.name).toLowerCase() === lowerCasedEditedTaskName)) {
        //if (selectedList.tasks.find((task) => (task.name).toLowerCase() === lowerCasedEditedTaskName)) { //searches tasks among chosen project's tasks to prevent creating another task with the same name
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${editedTaskName} is already among your project's tasks`,
                footer: 'Hint: Task names should be different!'
            })
        } else {
        selectedTask.name = editTaskModalNameInput.value;
        selectedTask.date = editTaskModalDateInput.value;
        selectedTask.priority = editTaskModalPriorityInput.value;
        selectedTask.description = editTaskModalDescriptionInput.value;
        newLabel.innerHTML = `<span class="task-card-text"></span>${selectedTask.name}<br>${selectedTask.date}`;
            closeEditTaskModal()
            saveAndRender()
        }
        location.reload() // after opening edit modal, cache has to be cleared of to prevent recursive operation. I could not find any other solution. but this fixed the problem :) 
    })

}

function closeEditTaskModal() {

    const editTaskModal = document.getElementById('edit-task-modal')
    const overlayWindow = document.getElementById('overlay-window')
  
    overlayWindow.classList.remove('active')
    editTaskModal.classList.remove('active')

}

function openTaskInfoModal() {

    const taskInfoModal = document.getElementById('task-info-modal')
    const overlayWindow = document.getElementById('overlay-window')
  
    overlayWindow.classList.add('active')
    taskInfoModal.classList.add('active')

}

function closeTaskInfoModal() {

    const taskInfoModal = document.getElementById('task-info-modal')
    const overlayWindow = document.getElementById('overlay-window')
  
    overlayWindow.classList.remove('active')
    taskInfoModal.classList.remove('active')

}

/*---Miscellaneous display function declarations (2 functions)---*/

function closeAllModals() { //4 different modals will be handled dynamically by this function

    const addTaskModal = document.getElementById('add-task-modal')
    const editTaskModal = document.getElementById('edit-task-modal')
    const taskInfoModal = document.getElementById('task-info-modal')
  
    closeAddProjectModal()
    if (addTaskModal) {
      closeAddTaskModal()
    }
    if (editTaskModal) {
      closeEditTaskModal()
    }
    if (taskInfoModal) {
      closeTaskInfoModal()
    }

}

/*-----Function exports-----*/

export { openEditTaskModal, openTaskInfoModal, initAddEventListeners }