
const backDrop  = document.querySelector('.backdrop');
const aside = document.querySelector('aside');

const projectTitleEdit = document.querySelector('#project-title-edit');
const projectDescriptionEdit = document.querySelector('#project-description-edit');

const taskTitleEdit = document.querySelector('#task-title-edit');
const taskDescriptionEdit = document.querySelector('#task-description-edit');
const taskPriorityEdit = document.querySelector('#priority-edit');
const taskDueDateEdit = document.querySelector('#due-date-edit');

export function showForm(formType) {
    backDrop.classList.add('show');
    formType.style.visibility = 'visible';
    aside.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    aside.style.pointerEvents = 'none';
}

export function removeForm(formType) {
    backDrop.classList.remove('show');
    formType.style.visibility = 'hidden';
    aside.style.backgroundColor = '#eee';
    aside.style.pointerEvents = 'all';
}

export function clearInputs(formType) {
    const labels = formType.children;
    for (const label of labels) {
        if (label.tagName === 'LABEL' && (label.lastElementChild.tagName === 'INPUT' || label.lastElementChild.tagName === 'TEXTAREA')) {
            label.lastElementChild.value = '';
        }
    }
}

export function takeProjectInputs(titleInput, descriptionInput) {

    let projectInputs = [];
    projectInputs.push(titleInput.value, descriptionInput.value);

    return projectInputs;
}

export function takeTaskInputs(titleInput, descriptionInput, priorityInput, dueDateInput) {

    let taskInputs = [];
    taskInputs.push(titleInput.value, descriptionInput.value, priorityInput.value, dueDateInput.value);

    return taskInputs;
}

export function addInputsToProjectForm(title, description) {
    projectTitleEdit.value = title;
    projectDescriptionEdit.value = description;

}

export function addInputsToTaskForm(title, description, priority, dueDate) {
    taskTitleEdit.value = title;
    taskDescriptionEdit.value = description;
    taskPriorityEdit.value = priority;
    taskDueDateEdit.value = dueDate;
}

