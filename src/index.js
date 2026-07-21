// TO Do list using oop principles.
//import domProcessor from it's module
import { runner } from "./manager.js";
import projectDomProcessor  from './projectDomManipulator.js';
import storage from './storage.js';
//importing an instance of project object for default project creation
import { defaultProject } from './project.js';
//Adding css to the project
import './style.css';
//class to run the app in console
//class to create reminders

// Creating a logger object
// Creating our runner object which will run the main functionality of our program
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
defaultProject.isSelected=true;
defaultProject.createTask('Gym','Head to the gym at 6pm','12/06/2023',2,'Go to the gymnasium to watch your school team play basketball against seniors');
runner.addProjectToArray(defaultProject);
const projectHandler = new projectDomProcessor(runner);
projectHandler.initializeProjectCreation();
projectHandler.appendProjectToDom(defaultProject);
projectHandler.taskAppendor(defaultProject);
projectHandler.initializeTaskDomRemover();
let memomry = new storage(runner);
memomry.saveToStorage();