
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

function renderTasks(selectedList) { //creating and appending task cards at DOM Tree

    const taskList = document.querySelector('[data-tasks]')

    selectedList.tasks.forEach((task) => {

        const selectedList = lists.find((list) => list.id === selectedListId)

        const taskCardTemplate = document.getElementById('task-card-template')

        const taskCard = document.importNode(taskCardTemplate.content, true) //task card elements will be given by a predefined template in HTML document
        //task.id will be assigned to both checkbox and label element to be used when deciding whether it is completed or NOT
        const checkBox = taskCard.querySelector('input')
        checkBox.id = task.id
        checkBox.checked = task.complete

        const label = taskCard.querySelector('label')
        label.htmlFor = task.id
        
        const lineBreak = document.createElement("br"); //a lineBreak element is created for a better styling of infos
        label.append(task.name, lineBreak, task.date); //task name and due date is shown initially as the other infos are shown by a task info modal

        //new buttons are created in every task card one by one for editing, showing other infos and deleting the tasks individually
        
        const taskId = task.id

        const editTaskButton = document.createElement("p");
        editTaskButton.innerHTML = `<i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>`;
        editTaskButton.addEventListener("click", () => openEditTaskModal(task, taskId));

        const taskInfoButton = document.createElement('p');
        taskInfoButton.innerHTML = `<i class="fa-solid fa-up-right-and-down-left-from-center"></i>`;
        taskInfoButton.addEventListener("click", () => enlargeTask(task, selectedList));

        const taskName = task.name // taskName variable is created to be used in deleteTask function separately

        const deleteTaskButton = document.createElement('p');
        deleteTaskButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteTaskButton.addEventListener("click", () => deleteTask(taskName, selectedList));

        const flexTwo = taskCard.querySelector(".flex-2");
        flexTwo.append(editTaskButton);
        flexTwo.append(taskInfoButton);
        flexTwo.append(deleteTaskButton);

        taskList.appendChild(taskCard)
    })
}

function enlargeTask(task, selectedList) { //showing task card's other info which is NOT shown in task card area, when needed
 
    openTaskInfoModal()

    const taskInfoModalNamePara = document.querySelector('[data-task-card-name]')
    const taskInfoModalDescriptionPara = document.querySelector('[data-task-card-description]')
    const taskInfoModalDueDatePara = document.querySelector('[data-task-card-due-date]')
    const taskInfoModalPriorityPara = document.querySelector('[data-task-card-priority]')
    const taskInfoModalSelectedProject = document.querySelector('[data-task-card-project-name]')
 
    taskInfoModalNamePara.textContent = `Name: ${task.name}`;
    taskInfoModalDescriptionPara.textContent = `Detail: ${task.description}`;
    taskInfoModalDueDatePara.textContent = `Due Date: ${task.date}`;
    taskInfoModalPriorityPara.textContent = `Priority: ${task.priority}`;
    taskInfoModalSelectedProject.textContent = `Project Name: ${selectedList.name}`;
}

function deleteTask(taskName, selectedList) { //deleting the selected task card without checking its checkbox and rendered as completed
 
    Swal.fire({ // a special embedded function to have a customized alert box with better UI and styling
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'Deleted!',
            'Your task has been deleted.',
            'success'
        )
        selectedList.tasks = selectedList.tasks.filter((task) => task.name !== taskName)
        taskName = null;
        saveAndRender();
       }
    })
}

function colorTasks(selectedList) { // coloring the task card's left border and checkbox according to its priority
 
    const taskCard = [...document.querySelectorAll('.task-card')];
    const checkbox = [...document.querySelectorAll(".task-card-check-box")];

    for (let i = 0; i < taskCard.length; i++) {
      for (let i = 0; i < selectedList.tasks.length; i++) {
        if (selectedList.tasks[i].priority === "high") { 
          taskCard[i].style.borderLeft = "6px solid red"
          checkbox[i].style.border = "0.15em solid red"
        } else if (selectedList.tasks[i].priority === "moderate") {
          taskCard[i].style.borderLeft = "6px solid gold"
          checkbox[i].style.border = "0.15em solid gold";
        } else {
          taskCard[i].style.borderLeft = "6px solid #7cfc00";
          checkbox[i].style.border = "0.15em solid #7cfc00";
        }
      }
    }
}

function searchTask() { // a function to search for a task in the project folder by Search Input
 
    let searchValue = document.querySelector('.search-input').value.toUpperCase(); // turning into a standardized letter case to prevent errors
    let taskList = document.querySelector('[data-tasks]');
    let task = taskList.querySelectorAll('.task-card');
  
    for(let i=0; i < task.length; i++) { //looping through task-cards
      let taskTitle = task[i].getElementsByTagName('label')[0];
      if(taskTitle.textContent.toUpperCase().indexOf(searchValue) > -1) {
        task[i].style.display = '';
      } else {
        task[i].style.display = 'none';
      }
    }
}

/*---Function exports---*/

export { createTask, renderTasks, colorTasks, searchTask, updateTaskCounter }