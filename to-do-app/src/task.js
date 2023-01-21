import { Project } from "./project";
import { myProjects } from ".";
import { takeTaskInputs } from "./forms";

const taskTitle = document.querySelector('#task-title');
const taskDescription = document.querySelector('#task-description');
const taskPriority = document.querySelector('#priority');
const taskDueDate = document.querySelector('#due-date');


export class Task extends Project {
    constructor(title, description, priority, dueDate) {
        super(title, description);
        this.priority = priority;
        this.dueDate = dueDate;
    }   
}


//takes the inputs from the task form, creates a task with those input and adds the task to its calling project
export function addTaskToStorage(projectId) {
    let taskInputs = takeTaskInputs(taskTitle, taskDescription, taskPriority, taskDueDate);
    let newTask = new Task(taskInputs[0], taskInputs[1], taskInputs[2], taskInputs[3]);
    myProjects[projectId - 3].projectTasks.push(newTask);

    localStorage.setItem("projects", JSON.stringify(myProjects));

    return newTask;
}


//gets the index of the newTask added in its parent project's projectTasks array
//this will be used to give a dataId to each task created in that particular project
export function getIndexOfTask(projectId, newTask) {

    return myProjects[projectId - 3].projectTasks.indexOf(newTask);

}


export function deleteTaskFromStorage(e, grandParent) {
    let projectId = grandParent.getAttribute('data-id');
    projectId = parseInt(projectId) - 3;

    let taskId = e.target.getAttribute('data-id');

    myProjects[projectId].projectTasks.splice(taskId, 1);

    localStorage.setItem("projects", JSON.stringify(myProjects));
}


export function editTaskInStorage(btnDataId, projectBodyDataId, newTitle, newDescription, newPriority, newDueDate) {
    
    let projectIndex = parseInt(projectBodyDataId) - 3;
    let taskIndex = parseInt(btnDataId);

    myProjects[projectIndex].projectTasks[taskIndex].title = newTitle;
    myProjects[projectIndex].projectTasks[taskIndex].description = newDescription;
    myProjects[projectIndex].projectTasks[taskIndex].priority = newPriority;
    myProjects[projectIndex].projectTasks[taskIndex].dueDate = newDueDate;
    
    localStorage.setItem("projects", JSON.stringify(myProjects));

}
