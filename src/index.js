// TO Do list using oop principles.
//import domProcessor from it's module
import projectDomProcessor  from './projectDomManipulator.js';
import main from './manager.js';
import taskDomProcessor from './taskDomManipulator.js';
//importing an instance of project object for default project creation
import { defaultProject } from './project.js';
//Adding css to the project
import './style.css';
//class to run the app in console
//class to create reminders

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
defaultProject.isSelected=true;
runner.addProjectToArray(defaultProject);
const projectHandler = new projectDomProcessor(runner);
projectHandler.initializeProjectCreation();
projectHandler.appendProjectToDom(defaultProject);
let task = new taskDomProcessor();