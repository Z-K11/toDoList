// TO Do list using oop principles.
//import domProcessor from it's module
import projectDomProcessor  from './projectDomManipulator.js';
import main from './manager.js';
//Adding css to the project
import './style.css';
//class to run the app in console
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

// Creating a logger object
// Creating our runner object which will run the main functionality of our program
const runner = new main();
// runner.addProjectToArray(new projects('Default'));
// runner.displayProjects();
// const defaultProject = runner.getProjectByName('Default');
// defaultProject.createTask();
// defaultProject.createTask();
// defaultProject.createTask();
// runner.addProjectToArray(new projects('User'));
// runner.displayProjects();
// const userProject = runner.getProjectByName('User');
// userProject.createTask();
const projectHandler = new projectDomProcessor(runner);
projectHandler.initializeProjectCreation();