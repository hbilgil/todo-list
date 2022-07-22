
/*-----Function and Element imports-----*/

import { renderProjectList } from './Project'

/*-----Local Storage Logic Function Declarations (3 Functions)-----*/

const LOCAL_STORAGE_NEW_PROJECT_LIST_KEY = 'task.lists' //all project and tasks are kept in local store
const LOCAL_STORAGE_SELECTED_PROJECT_LIST_ID_KEY = 'task.selectedListId' //all project and task ids are kept in local store

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NEW_PROJECT_LIST_KEY)) || [] //if the local store is empty, an empty array will be used for projects
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_LIST_ID_KEY)


/*-----Function and Element exports-----*/

export { lists, selectedListId, saveAndRender }