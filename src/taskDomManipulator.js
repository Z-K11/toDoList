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
            this.clearInput();
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
            taskList.dataset.id=task.id;
            let taskRemover = document.createElement('div');
            let removeButton = document.createElement('button');
            removeButton.dataset.id=task.id+'Remover';
            removeButton.textContent='Remove';
            removeButton.classList.add('removeTask');
            taskList.classList.add('taskList');
            let taskTitle = document.createElement('h3');
            taskTitle.textContent = task.name;
            let taskDescription = document.createElement('p');
            taskDescription.textContent=task.description;
            taskDescription.classList.add('taskDescription');
            let taskDueDate = document.createElement('p');
            taskDueDate.textContent=task.due;
            let taskNotes = document.createElement('p');
            taskNotes.textContent=task.notes;
            taskRemover.appendChild(removeButton);
            taskList.append(taskTitle,taskDescription,taskNotes,taskDueDate,taskRemover);
            this.#task.appendChild(taskList);
        });
            
    }
    removeTaskNode(id)
    {
        document.querySelector(`[data-id="${id}"]`).remove();
        let project = this.#runner.returnSelectedProject();
        project.removeTask(id);

    }
    initializeTaskRemover()
    {
        this.#task.addEventListener('click',(e)=>
        {
            let target = e.target.dataset.id;
            if(target.includes('Remover'))
            {
                const id = target.replace('Remover','');
                this.removeTaskNode(id);
            }
        })
    }
};