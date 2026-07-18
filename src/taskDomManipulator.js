import logix from './logger.js'
export default class taskDomProcessor
{
    #submitButton = document.querySelector('#submitTask');
    #title = document.querySelector('#title');
    #description = document.querySelector('#description');
    #dueDate = document.querySelector('#due');
    #priority = document.querySelector('#priority');
    #notes = document.querySelector('#notes');
    #runner;
    #task = document.querySelector('.tasks');
    
    constructor(main)
    {
        this.#runner=main;
        this.#submitButton.addEventListener('click',()=>
        {
            const checkinput = this.inputValidator();
            if(checkinput===0)
            {
                logix.error('Empty Strings');
            }
            else if(checkinput===1)
            {
                logix.error('Invalid Priority Value');
            }
            else if (checkinput===2)
            {
                let currentProject = this.#runner.returnSelectedProject();
                currentProject.createTask(this.#title.value,this.#description.value,this.#dueDate.value,this.#priority.value,this.#notes.value);
                this.appendTask(currentProject);
            }
            // this.clearInput();
        });
    }
    inputValidator()
    {
        if(!this.#description.value||!this.#dueDate.value||!this.#notes.value||!this.#priority.value||!this.#title.value)
        {
            return 0;
        }
        else if(this.#priority.value<1||this.#priority.value>7)
        {
            return 1;
        }
        else
        {
            return 2;
        }
    }
    clearInput()
    {
        this.#description.value='';
        this.#dueDate.value='';
        this.#notes.value='';
        this.#priority.value='';
        this.#title.value='';
    }
    appendTask(currentProject)
    {
        this.#task.innerHTML='';
        let taskSortedArray=currentProject.returnSortedTasks();
        taskSortedArray.forEach((task)=>
        {
            let taskList = document.createElement('li');
            taskList.classList.add('taskList');
            let taskTitle = document.createElement('h5');
            taskTitle.textContent = task.name;
            let taskDescription = document.createElement('p');
            taskDescription.textContent=task.description;
            let taskDueDate = document.createElement('p');
            taskDueDate.textContent=task.due;
            let taskNotes = document.createElement('p');
            taskNotes.textContent=task.notes;
            taskList.append(taskTitle,taskDescription,taskNotes,taskDueDate);
            this.#task.appendChild(taskList);
        });
            
    }
};