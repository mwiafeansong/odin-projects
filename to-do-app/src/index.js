import './style.css';
import displayPage, { displaySidebar, removeSidebar } from './tabdisplay';
import {addAProject, deleteProject, showEditFormAndGetEditBtnDataId, editProject, AddFromStorage} from './projectDom';
import { showForm, removeForm } from './forms';
import { addATask, checkTask, deleteTask, getTaskElements, editTask, addTaskFromStorage } from './taskDom';
import { getProjectOfTask } from './taskDom';
import { Project } from './project';

const projectForm = document.querySelector('.project-form');
const projectFormEdit = document.querySelector('.project-form-edit');
const addProjectBtn = document.querySelector('.add-project');
const taskForm = document.querySelector('.task-form');
const taskFormEdit = document.querySelector('.task-form-edit');
const allProjectsContainer = document.querySelector('.project-contents');
const cancelBtns = document.querySelectorAll('.cancel');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-aside');
let projectId;
let needed = [];
let taskNeeds = [];




export let myProjects = JSON.parse(localStorage.getItem("projects")) || [];

//adds the default project to storage if this is the browser's first visit
if (myProjects.length === 0) {
    const defaultProject = new Project('My Project', 'This is the default project');
    defaultProject.addProjectToStorage();
}

//displays each project in local storage and its tasks to the DOM
myProjects.forEach((proj) => {
    AddFromStorage(proj);

    if (proj.projectTasks.length !== 0) {
        proj.projectTasks.forEach((task) => {
            addTaskFromStorage(task, myProjects.indexOf(proj) + 3)
        })
    }
})



displayPage();

hamburger.addEventListener('click', displaySidebar);
closeBtn.addEventListener('click', removeSidebar);

//to remove a form when cancel button is clicked
cancelBtns.forEach((cancelBtn) => {
    cancelBtn.addEventListener('click', (e) => {
        if (e.target.parentElement.parentElement.style.visibility === 'visible') {
            removeForm(e.target.parentElement.parentElement);
        };
    });   
});


//add a new Project from a form
addProjectBtn.addEventListener('click', () => {
    showForm(projectForm);
});

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addAProject();
});



allProjectsContainer.addEventListener('click', (e) => {
    //to add a new task -  in continuity with taskForm event listener below
    if (e.target.parentElement.classList.contains('plus-task')) {
        showForm(taskForm);
        projectId = getProjectOfTask(e);
    }

    if (e.target.classList.contains('edit-icon')) {
        //get the target's dataId, the title element and description element
        //these will be used to edit the project title and description when the form is submitted
        needed = showEditFormAndGetEditBtnDataId(e);
    }
    
    //delete a project
    if (e.target.classList.contains('delete-icon')) {
        deleteProject(e);
    }

    //delete a task
    if (e.target.classList.contains('delete')) {
        deleteTask(e);
    }

    //get the target's dataId, it's projectbody data id, title, description, priority and duedate elements
    //these will be used to edit the task details when the form is submitted
    if (e.target.classList.contains('edit')) {
        taskNeeds = getTaskElements(e);
    }

    //check a task
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
        checkTask(e);
    }
});


taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addATask(projectId);
})


projectFormEdit.addEventListener('submit', (e) => {
    e.preventDefault();
    
    editProject(needed);
    removeForm(projectFormEdit);
})


taskFormEdit.addEventListener('submit', (e) => {
    e.preventDefault();
    
    editTask(taskNeeds);
    removeForm(taskFormEdit);
})



