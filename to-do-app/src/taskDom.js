import expandIcon from './images/icon-arrow-down.svg';
import { takeTaskInputs, clearInputs, removeForm, showForm, addInputsToTaskForm } from "./forms";
import { projectBodies } from "./projectDom";
import { addTaskToStorage, getIndexOfTask, deleteTaskFromStorage, editTaskInStorage } from "./task";
import { isThisWeek, isToday } from 'date-fns';


const taskForm = document.querySelector('.task-form');
const taskFormEdit = document.querySelector('.task-form-edit');

const taskTitleEdit = document.querySelector('#task-title-edit');
const taskDescriptionEdit = document.querySelector('#task-description-edit');
const taskPriorityEdit = document.querySelector('#priority-edit');
const taskDueDateEdit = document.querySelector('#due-date-edit');

const important = document.querySelector('.important-special');
const todays = document.querySelector('.today-special');
const thisWeeks = document.querySelector('.upcoming-special');

const importantPara = document.querySelector('.important-para');
const todayPara = document.querySelector('.today-para');
const upcomingPara = document.querySelector('.upcoming-para');
let importantTasks = [];
let allTasks = [];
let todaysTasks = [];
let thisWeeksTasks = [];


export function addATask(projectId) {
    let newTask = addTaskToStorage(projectId);
    let taskId = getIndexOfTask(projectId, newTask);
    appendTaskToDom(projectId, newTask, taskId);

    clearInputs(taskForm);
    removeForm(taskForm);
}

export function addTaskFromStorage(task, projectId) {
    let taskId = getIndexOfTask(projectId, task);
    appendTaskToDom(projectId, task, taskId);
}


export function deleteTask(e) {
    let parent = e.target.parentElement.parentElement.parentElement;
    let grandParent = e.target.parentElement.parentElement.parentElement.parentElement;
    
    deleteTaskFromStorage(e, grandParent);
    deleteTaskFromDom(grandParent, parent);   
}

//taskNeeds - [editBtndataid, projectId, titleelement, descriptionelement, etc.]
export function editTask(taskNeeds) {
    let editTaskInputs = takeTaskInputs(taskTitleEdit, taskDescriptionEdit, taskPriorityEdit, taskDueDateEdit);
    
    editTaskInStorage(taskNeeds[0], taskNeeds[1], editTaskInputs[0], editTaskInputs[1], editTaskInputs[2], editTaskInputs[3]);
    editTaskInDom(editTaskInputs[0], editTaskInputs[1], editTaskInputs[2], editTaskInputs[3], taskNeeds[2], taskNeeds[3], taskNeeds[4], taskNeeds[5], taskNeeds[0], taskNeeds[1]);
    editSpecialTask(taskNeeds[0], taskNeeds[1], editTaskInputs[0], editTaskInputs[1], editTaskInputs[2], editTaskInputs[3]);
    
}


export function checkTask(e) {
    let taskTitle = e.target.nextElementSibling;
    check(e, taskTitle);

    let dataId = e.target.getAttribute('data-id');
    let projectDataId = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
    let taskPriority = e.target.parentElement.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild;
    let taskDueDate = taskPriority.parentElement.nextElementSibling.lastElementChild.textContent;

    //looks through the 'important' section to check selected tasks as well
    if (taskPriority.classList.contains('High')) {
        verifyIdAndCheck(e, importantTasks, dataId, projectDataId);
    }

    //looks through todays tasks to see if the item is there and check it there as well
    if (isToday(new Date(taskDueDate))) {
        verifyIdAndCheck(e, todaysTasks, dataId, projectDataId);
    }

    if (isThisWeek(new Date(taskDueDate))) {
        verifyIdAndCheck(e, thisWeeksTasks, dataId, projectDataId);
    }
}

//looks through an array containing specific tasks to check them as well if they are there 
function verifyIdAndCheck(e, tasks, dataId, projectDataId) {
    for (const task of tasks) {
        let taskTitleElement = task.firstElementChild.firstElementChild.nextElementSibling;
        if (taskTitleElement.getAttribute('data-id') === dataId && task.getAttribute('project-data-id') === projectDataId) {
                
            check(e, taskTitleElement);
        } 
    }
}

function check(e, taskTitle) {
    
    if (e.target.checked) {
        taskTitle.classList.remove('unchecked');
        taskTitle.classList.add('checked');
    } else {
        taskTitle.classList.add('unchecked');
        taskTitle.classList.remove('checked');
    }
}


//gets the data Id of the project 'whose add task' button was clicked. This will be used to add that task to its project
export function getProjectOfTask(e) {
    let parentProject = e.target.parentElement.parentElement.parentElement.parentElement;
    let parentProjectId = parentProject.getAttribute('data-id');

    return parseInt(parentProjectId);
}


//adds the task created to the DOM
function appendTaskToDom(projectId, newTask, taskId) {
    let myTask = task(newTask.title, newTask.description, newTask.priority, newTask.dueDate, taskId, projectId);
    let myTask2 = task(newTask.title, newTask.description, newTask.priority, newTask.dueDate, taskId, projectId);
    let myTask3 = task(newTask.title, newTask.description, newTask.priority, newTask.dueDate, taskId, projectId);
    let myTask4 = task(newTask.title, newTask.description, newTask.priority, newTask.dueDate, taskId, projectId);

    
    //to specify which project to add the task to
    projectBodies[projectId - 3].appendChild(myTask);
    //all tasks created are put in this array. We will loop througth this to find today's tasks
    allTasks.push(myTask);

    //appends the task to the 'important' section if its priority is high
    if (newTask.priority === 'High') {
        importantPara.style.display = 'none';
        important.appendChild(myTask2);
        importantTasks.push(myTask2);
    }

    let dueDate = new Date(newTask.dueDate);
    if (isToday(dueDate)) {
        todayPara.style.display = 'none';
        todays.appendChild(myTask3);
        todaysTasks.push(myTask3);
    }

    if (isThisWeek(dueDate)) {
        upcomingPara.style.display = 'none';
        thisWeeks.appendChild(myTask4);
        thisWeeksTasks.push(myTask4);
    }
}


//creates task elements to be added to DOM
function task(title, description, priority, dueDate, taskId, projectId) {
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.setAttribute('data-id', taskId);
    newTask.setAttribute('project-data-id', projectId);

    const taskHead = document.createElement('div');
    taskHead.className = 'task-head';

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.setAttribute('data-id', taskId);
    const taskTitle = document.createElement('h4');
    taskTitle.className = 'task-titled unchecked';
    taskTitle.setAttribute('data-id', taskId);
    taskTitle.textContent = title;

    const expandBtn = document.createElement('button');
    expandBtn.className = 'expand-icon';
    const expandImage = new Image();
    expandImage.src = expandIcon;
    expandBtn.appendChild(expandImage);

    taskHead.append(check, taskTitle, expandBtn);

    const taskDetails = document.createElement('div');
    document.className = 'task-details';
    
    const taskDescription = document.createElement('p');
    taskDescription.className = 'task-described';
    if (!description || !(description.trim())) {
        taskDescription.classList.add('not-specified');
        taskDescription.textContent = 'No description provided';
    } else {
        taskDescription.textContent = description;
    }
    
    const taskPriority = document.createElement('p');
    taskPriority.textContent = 'Priority: ';
    const priorityBtn = document.createElement('button');
    priorityBtn.className = 'priority';
    priorityBtn.classList.add(priority);
    priorityBtn.textContent = priority;
    
    taskPriority.appendChild(priorityBtn);

    const taskDueDate = document.createElement('p');
    taskDueDate.textContent = 'Due date: ';
    const dueDateSpan = document.createElement('span');
    if (dueDate !== '') {
        dueDateSpan.textContent = dueDate;
    } else {
        dueDateSpan.classList.add('not-specified');
        dueDateSpan.textContent = 'Not specified';
    }
    
    taskDueDate.appendChild(dueDateSpan);

    const taskBtnsContainer = document.createElement('div');
    taskBtnsContainer.className = 'task-btns';
    const editBtn = document.createElement('button');
    editBtn.className = 'btn-in-main edit';
    editBtn.textContent = 'Edit';
    editBtn.setAttribute('data-id', taskId)
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-in-main delete';
    deleteBtn.setAttribute('data-id', taskId);
    deleteBtn.textContent = 'Delete';
    taskBtnsContainer.append(editBtn, deleteBtn);

    taskDetails.append(taskDescription, taskPriority, taskDueDate, taskBtnsContainer);

    expandImage.addEventListener('click', (e) => {
        e.target.classList.toggle('rotate');
        taskDetails.classList.toggle('invisible');
    })

    newTask.append(taskHead, taskDetails);

    return newTask;
}

function deleteTaskFromDom(grandParent, parent) {

    grandParent.removeChild(parent);

    let taskId = parent.getAttribute('data-id');
    let projectDataId = grandParent.getAttribute('data-id');
    let taskPriorityElement = parent.lastElementChild.firstElementChild.nextElementSibling.lastElementChild
    let taskDueDate = taskPriorityElement.parentElement.nextElementSibling.lastElementChild.textContent;
    
    //deletes the task from the 'important' section as well if it is there
    if (taskPriorityElement.classList.contains('High')) {
        verifyAndDelete(importantTasks, important, taskId, projectDataId, importantPara);
    }

    //deletes the task if it is in the 'today' section as well
    if (isToday(new Date(taskDueDate))) {
        verifyAndDelete(todaysTasks, todays, taskId, projectDataId, todayPara);
    }

    //delete if in this week section
    if (isThisWeek(new Date(taskDueDate))) {
        verifyAndDelete(thisWeeksTasks, thisWeeks, taskId, projectDataId, upcomingPara);
    }

}

//delete task from a section
function verifyAndDelete(tasks, section, taskId, projectDataId, sectionPara) {
    for (const task of tasks) {
        if (task.getAttribute('data-id') === taskId && task.getAttribute('project-data-id') === projectDataId) {
            section.removeChild(task);
            tasks.splice(tasks.indexOf(task), 1);

            if (tasks.length === 0) {
                sectionPara.style.display = 'block';
            }
            break;
        }
    }
}

//these will be used to edit the element contents
export function getTaskElements(e) {
    let taskNeeds = [];
    let titleElement = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling;
    let title = titleElement.textContent;
    let descriptionElement = e.target.parentElement.parentElement.firstElementChild;
    let description;
    if (descriptionElement.textContent === 'No description provided') {
        description = '';
    } else {
        description = descriptionElement.textContent;
    }
    let priorityElement = e.target.parentElement.previousElementSibling.previousElementSibling.lastElementChild;
    let priority = priorityElement.textContent;
    let dueDateElement = e.target.parentElement.previousElementSibling.lastElementChild;
    let dueDate = dueDateElement.textContent;

    let taskProjectBodyDataId = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
    let editBtnDataId = e.target.getAttribute('data-id');
    
    taskNeeds.push(editBtnDataId, taskProjectBodyDataId, titleElement, descriptionElement, priorityElement, dueDateElement);

    showForm(taskFormEdit);
    addInputsToTaskForm(title, description, priority, dueDate);

    return taskNeeds;   
}


//fill in the task details with the new inputs taken
function editTaskInDom(title, description, priority, dueDate, titleElement, descriptionElement, priorityElement, dueDateElement) {
    titleElement.textContent = title;
    
    
    if (!description || !(description.trim())) {
        descriptionElement.textContent = 'No description provided';
        if (!descriptionElement.classList.contains('not-specified')) {
            descriptionElement.classList.add('not-specified');
            
        }
    } else {
        descriptionElement.textContent = description;
        if (descriptionElement.classList.contains('not-specified')) {
            descriptionElement.classList.remove('not-specified');
        }
    }
    
    priorityElement.textContent = priority;
    priorityElement.className = `priority ${priority}`;
    
    if (dueDate !== '') {
        dueDateElement.textContent = dueDate;
        if (dueDateElement.classList.contains('not-specified')) {
            dueDateElement.classList.remove('not-specified');
        }
    } else {
        dueDateElement.textContent = 'Not specified';
        if (dueDateElement.classList.contains('not-specified')) {
            return;
        } else {
            dueDateElement.classList.add('not-specified');
        }
    }
}

function editSpecialTask(editBtnDataId, projectDataId, title, description, priority, dueDate) {   

    //if the priority input is high, first check if its already in the 'important' section
    if (priority === 'High') {
        verifyAndEditOrAdd(importantTasks, important, editBtnDataId, projectDataId, title, description, priority, dueDate, importantPara);
    } else {
        //if priority has been changed from High and its in the important section, we remove it
        verifyAndRemove(importantTasks, important, editBtnDataId, projectDataId, importantPara);
    }
    
    //edit for the 'today' section
    if (isToday(new Date(dueDate))) {
        verifyAndEditOrAdd(todaysTasks, todays, editBtnDataId, projectDataId, title, description, priority, dueDate, todayPara)
    } else {
        verifyAndRemove(todaysTasks, todays, editBtnDataId, projectDataId, todayPara);
    }

    //edit for 'this week' section
    if (isThisWeek(new Date(dueDate))) {
        verifyAndEditOrAdd(thisWeeksTasks, thisWeeks, editBtnDataId, projectDataId, title, description, priority, dueDate, upcomingPara)
    } else {
        verifyAndRemove(thisWeeksTasks, thisWeeks, editBtnDataId, projectDataId, upcomingPara);
    }
}


//edits the info in a special section if its there and adds it if the edited data fits criteria for that task to be in that special section
function verifyAndEditOrAdd(tasks, section, dataId, projectDataId, title, description, priority, dueDate, sectionPara) {
    //checks if its there first
    for (const task of tasks) {
        if (task.getAttribute('data-id') === dataId && task.getAttribute('project-data-id') === projectDataId) {
            let titleElement = task.firstElementChild.firstElementChild.nextElementSibling;
            let descriptionElement = task.lastElementChild.firstElementChild;
            let priorityElement = descriptionElement.nextElementSibling.lastElementChild;
            let dueDateElement = descriptionElement.nextElementSibling.nextElementSibling.lastElementChild;

            editTaskInDom(title, description, priority, dueDate, titleElement, descriptionElement, priorityElement, dueDateElement);

            return;
        }       
    }

    //if it's not there, create task elements for it and add it to the special section
    let editedTask = task(title, description, priority, dueDate, dataId, projectDataId);
    section.appendChild(editedTask);
    tasks.push(editedTask);

    sectionPara.style.display = 'none';
}


//removes the info from the special section if edited data makes it unfit to be there
function verifyAndRemove(tasks, section, dataId, projectDataId, sectionPara) {
    for (const task of tasks) {
        if (task.getAttribute('data-id') === dataId && task.getAttribute('project-data-id') === projectDataId) {
            tasks.splice(tasks.indexOf(task), 1);
            section.removeChild(task);
        }
    }

    if (tasks.length === 0) {
        sectionPara.style.display = 'block';
    }
}
