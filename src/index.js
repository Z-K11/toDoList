// TO Do list using oop principles.
//import domProcessor from it's module
import {domProcessor} from './dom.js';
//class to run the app in console
class main
{
    #mainStorage = [];
    constructor()
    {
    }
    displayProjects()
    {
        for(let i =0;i<this.#mainStorage.length;i++)
        {
            console.log(this.#mainStorage[i]);
        }
    }
    //Adds project object to an array of projectObjects for storage
    addProjectToArray(projectObject)
    {   
        this.#mainStorage.push(projectObject);
    }
    //Searches the array for object using it's name
    getProjectByName(name)
    {
        return this.#mainStorage.find(project => project.name === name);
    }
};
//class to create projects that will contain the todos
class projects
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
//class to create reminders
class todos
{
    //Private fields to keep data inaccessible outside of class
    #title;
    #description;
    #due;
    #priority;
    #notes;
    constructor(title,description,due,priority,notes)
    {
        this.#title= title;
        this.#description=description;
        this.#due=due;
        this.#priority=priority;
        this.#notes=notes;
        logix.info(`toDo Created with title {${this.title}} constructor definition at line 70`);
    }
    
}
//class to log messages or errors to the console
class logger
{
    //this class is a percfect example of why sometimes you don't need a constructor at all 
    info(message)
    {
        console.log(`[Info] ${message}`);
    }
    error(message)
    {
        console.log(`[ERROR] ${message}`);
    }

}
// Creating a logger object
const logix = new logger();
// Creating our runner object which will run the main functionality of our program
const runner = new main();
runner.addProjectToArray(new projects('Default'));
runner.displayProjects();
const defaultProject = runner.getProjectByName('Default');
defaultProject.createTask();
defaultProject.createTask();
defaultProject.createTask();
runner.addProjectToArray(new projects('User'));
runner.displayProjects();
const userProject = runner.getProjectByName('User');
userProject.createTask();