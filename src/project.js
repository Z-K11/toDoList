import logix from "./logger.js";
import todo from './todo.js';
export default class projects
{   
        // #priorities = [1,2,3,4,5,6,7];
        #selected = false;
        #projectArray = [];
        #taskCount=0;
    constructor(name)
    {
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
}
export let defaultProject = new projects('Default');