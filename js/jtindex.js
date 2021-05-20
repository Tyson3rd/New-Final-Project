let taskList = [];
// Select the New Task Form
const newTaskForm = document.querySelector('#newTaskForm');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');
    const errorMessage = document.querySelector('#alertMessage');
    
    
    /*
        Validation code here
    */

    // Get the values of the inputs
    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
    if(!validFormFieldInput(name)){
        errorMessage.innerHTML = "Invalid name input";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
        taskList.push(new Task(name, description, assignedTo, "TODO", dueDate, taskList.length+1) );
        console.log(taskList);
        displayTask();
    }

});
function displayTask(){
    let data = [];
    taskList.forEach(task =>{
        data.push(task.displayTask());   
    });
document.querySelector('#taskList').innerHTML = data.join('\n');
}
function validFormFieldInput(data){
    return data != null && data != '';
}