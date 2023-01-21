import { takeProjectInputs } from "./forms";
import { myProjects } from ".";


const projectTitle = document.querySelector('#project-title');
const projectDescription = document.querySelector('#project-description');

export class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    addProjectToStorage() {
        myProjects.push(this);
    }

    // getProjectId() {
    //     return myProjects.indexOf(this);
    // }
    
    projectTasks = [];

    // addTask(task) {
    //     this.projectTasks.push(task);
    // }

}


//takes the inputs from the form, creates a project object, stores it in memory
export function addAProjectToStorage() {
    //take the user's inputs from the form
    let projectInputs = takeProjectInputs(projectTitle, projectDescription);
        
    //instantiate a new project object with the inputs taken and store it
    const newProject = new Project(projectInputs[0], projectInputs[1]);
    newProject.addProjectToStorage();
    localStorage.setItem("projects", JSON.stringify(myProjects));

    return newProject;
}

//gets the data-id of the project
export function getTheProjectDomId(newProject) {
    let projectId = myProjects.indexOf(newProject);
    projectId = projectId + 3;

    return projectId;
}


//finds the project in array of all projects in storage and deletes it
export function deleteProjectFromStorage(btnDataId, parent) {
    if (btnDataId === parent.getAttribute('data-id')) {
        myProjects.splice(parseInt(btnDataId) - 3, 1);
        localStorage.setItem("projects", JSON.stringify(myProjects));
    }
}


//changes projects details in storage
export function editProjectInStorage(btnDataId, newTitle, newDescription) {
    
    let projectIndex = parseInt(btnDataId) - 3;
    myProjects[projectIndex].title = newTitle;
    myProjects[projectIndex].description = newDescription;
    localStorage.setItem("projects", JSON.stringify(myProjects));

}
