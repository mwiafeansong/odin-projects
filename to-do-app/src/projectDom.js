import plusIcon from './images/plus.svg';
import editIcon from './images/file-edit-outline.svg';
import trashIcon from './images/trash-can-outline.svg';
import { showForm, removeForm, clearInputs, addInputsToProjectForm, takeProjectInputs } from './forms';
import displayPage, { openPage } from './tabdisplay';
import { addAProjectToStorage, getTheProjectDomId, deleteProjectFromStorage, editProjectInStorage } from './project';


const projectForm = document.querySelector('.project-form');
const today = document.querySelector('#today');
const todayLink = document.querySelector('.first');
const allProjectsContainer = document.querySelector('.project-contents');
const projectFormEdit = document.querySelector('.project-form-edit');
const projectTitleEdit = document.querySelector('#project-title-edit');
const projectDescriptionEdit = document.querySelector('#project-description-edit');


export let projectBodies = [];
const allTaskContainers = document.querySelectorAll('.project-body');
for (const container of allTaskContainers) {
    if (container.getAttribute('data-id') === '3') {
        projectBodies.push(container);
    }
}



export function addAProject() {
    let newProject = addAProjectToStorage();
    let projectId = getTheProjectDomId(newProject);
    appendProjectToDom(newProject, projectId);
    appendTabLink(newProject, projectId);
    
    removeForm(projectForm);
    clearInputs(projectForm);
    
    //this is so new tablink and tabcontent are added to the flow
    displayPage();
}

export function AddFromStorage(project) {
    let projectId = getTheProjectDomId(project);
    appendProjectToDom(project, projectId);
    tablink(project.title, projectId);
    displayPage();
}


export function deleteProject(e) {

    let parent = e.target.parentElement.parentElement.parentElement.parentElement;
    let btnDataId = e.target.parentElement.getAttribute('data-id');

    deleteProjectFromStorage(btnDataId, parent);
    deleteProjectFromDom(btnDataId, parent);
}


export function editProject(needed) {
    let editInputs = takeProjectInputs(projectTitleEdit, projectDescriptionEdit);

    editProjectInStorage(needed[0], editInputs[0], editInputs[1]);
    editProjectInDom(needed[0], editInputs, needed[1], needed[2]);
}


//creates the project and adds it to DOM
function appendProjectToDom(newProject, projectId) {
    const allProjectsContainer = document.querySelector('.project-contents');

    let myNewproject = project(newProject.title, newProject.description, projectId);
    
    allProjectsContainer.appendChild(myNewproject);
}


//creates the tablink and ensures that its contents are displayed immediately the form is submitted
function appendTabLink(newProject, projectId) {
    let newTabLink = tablink(newProject.title, projectId);
    openPage(newProject.title.toLowerCase().replace(/ /g, ''), newTabLink);
}


//creates tablink for project
function tablink(projectTitle, projectId) {
    const projectBtns = document.querySelector('.project-btns');

    const listItem = document.createElement('li');
    const tabLink = document.createElement('button');
    tabLink.className = 'tablink project-btn';
    tabLink.setAttribute('data-id', projectId);
    tabLink.textContent = projectTitle;
    listItem.appendChild(tabLink);

    projectBtns.appendChild(listItem);

    //we will use this to open the tablink's page content right after it is created
    return tabLink;
}


//creates project elements to be added to DOM
function project(title, description, dataId) {
    

    const newProject = document.createElement('div');
    newProject.setAttribute('data-id', dataId);
    newProject.id = title.toLowerCase().replace(/ /g, '');
    newProject.className = 'tab-content';

    const projectHead = document.createElement('div');
    projectHead.className = 'project-head';
    const titleAddTaskDelete = document.createElement('div');
    titleAddTaskDelete.className = 'title-addtask-delete';
    const projectTitle = document.createElement('h3');
    projectTitle.className = 'project-titled';
    projectTitle.textContent = title;
    titleAddTaskDelete.appendChild(projectTitle);

    let btnIcons = [];
    for (let i = 0; i < 3; i++) {
        let btnIcon = document.createElement('button');
        btnIcon.className = 'btn-icon';
        btnIcons.push(btnIcon);
        titleAddTaskDelete.appendChild(btnIcon);
    }
    
    const plusImage = new Image();
    plusImage.src = plusIcon;
    const editImage = new Image();
    editImage.src = editIcon;
    editImage.className = 'edit-icon';
    const trashImage = new Image();
    trashImage.src = trashIcon;
    trashImage.className = 'delete-icon';

    btnIcons[0].appendChild(plusImage);
    btnIcons[0].classList.add('plus-task');
    btnIcons[1].appendChild(editImage);
    btnIcons[1].setAttribute('data-id', dataId);
    btnIcons[2].appendChild(trashImage);
    btnIcons[2].setAttribute('data-id', dataId)

    projectHead.appendChild(titleAddTaskDelete);

    const projectDescription = document.createElement('p');
    projectDescription.className = 'project-described';
    projectDescription.textContent = description;
    projectHead.appendChild(projectDescription);

    const projectBody = document.createElement('div');
    projectBody.setAttribute('data-id', dataId);
    projectBody.className = 'project-body';
    projectBodies.push(projectBody);

    newProject.append(projectHead, projectBody);

    return newProject;
}



function deleteProjectFromDom(btnDataId, parent) {

    //we remove the content page of that project
    if (btnDataId === parent.getAttribute('data-id')) {
        allProjectsContainer.removeChild(parent);
        today.style.display = 'block';
        todayLink.style.backgroundColor = '#ccc';
    }

    //we remove the link in the sidebar corresponding to that project
    const tabLinks = document.querySelectorAll('.project-btn');
    const projectBtns = document.querySelector('.project-btns');
    for (const link of tabLinks) {
        if (btnDataId === link.getAttribute('data-id')) {
            projectBtns.removeChild(link.parentElement);
            break;
        }
    }
}

function editProjectInDom(btnDataId, editInputs, titleElement, descriptionElement) {
    
    titleElement.textContent = editInputs[0];
    descriptionElement.textContent = editInputs[1];

    const tabLinks = document.querySelectorAll('.tablink');
    for (const link of tabLinks) {
        if (link.getAttribute('data-id') === btnDataId) {
            link.textContent = editInputs[0];
        }
    }
}


//the edit button data id wiil be used to edit that project in storage
export function showEditFormAndGetEditBtnDataId(e) {
    let needs = [];
    let titleElement = e.target.parentElement.previousElementSibling.previousElementSibling;
    let title = titleElement.textContent;
    let descriptionElement = e.target.parentElement.parentElement.nextElementSibling
    let description = descriptionElement.textContent;
    let btnDataId = e.target.parentElement.getAttribute('data-id');
    needs.push(btnDataId, titleElement, descriptionElement);

    showForm(projectFormEdit);
    addInputsToProjectForm(title, description);

    return needs;
}

