import logger from "./logger.js";
const logix = new logger();
export default class projects
{   
        #projectArray = [];
        #taskCount=0;
    constructor(name)
    {
        this.name=name;
        logix.info(`New project created by the name :${this.name} definition at line 37`);
    }
    //Function to create a todo task and append it to the end of array that contains all project tasks
    createTask(name,description,due,priority,notes)
    {
        this.#taskCount++;
        if(this.#taskCount<=7)
        {
            this.#projectArray.push(new todos(name,description,due,priority,notes));
            logix.info(`created task for ${this.name} task count = ${this.#taskCount}`);
        }
        else
        {
            logix.error("Cant't create anymore tasks maximus number of tasks per object reached");
        }
    }
}