import logix from "./logger.js";
import todo from './todo.js';
export default class projects
{   
        // #priorities = [1,2,3,4,5,6,7];
        #selected = false;
        #projectArray = [];
        #taskCount=0;
        #id;
    constructor(name)
    {
        this.#id=crypto.randomUUID();
        this.name=name;
        logix.info(`New project created by the name :${this.name} definition in file src/project.js`);
    }
    //Function to create a todo task and append it to the end of array that contains all project tasks
    createTask(name,description,due,priority,notes)
    {
        this.#taskCount++;
        if(this.#taskCount<=6)
        {
            this.#projectArray.push(new todo(name,description,due,priority,notes));
            logix.info(`created task for ${this.name} task count = ${this.#taskCount}`);
        }
        else
        {
            logix.error("Cant't create anymore tasks maximus number of tasks per object reached");
        }
    }
    logArray()
    {
        for(let i =0;i<this.#projectArray.length;i++)
        {
            logix.info(this.#projectArray[i]);
        }
    }
    returnTaskById(id)
    {
        return this.#projectArray.find((task)=>task.id===id);
    }
    get isSelected()
    {
        return this.#selected;
    }
    set isSelected(value)
    {
        this.#selected=value;
    }
    returnSortedTasks()
    {
        return this.#projectArray.sort((b,a)=>a.priority - b.priority);
    }
    removeTask(id)
    {
        const task = this.returnTaskById(id);
        const index = this.#projectArray.indexOf(task);
        console.log(index);
        if(index>-1)
        {
            this.#projectArray.splice(index,1);
            logix.info(`${task.name} : task removed`);
            this.#taskCount--;
            this.logArray();
        }
    }
    get id()
    {
        return this.#id;
    }
    returnTasks()
    {
        return this.#projectArray.map(task=>
        {
            return [task.name,task.description,task.due,task.priority,task.notes];
        }
        );
        
    }
    set taskArrayLength(x)
    {
        this.#projectArray.length=x;
    }
}
export let defaultProject = new projects('Default');