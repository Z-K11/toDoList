// TO Do list using oop principles.
//import domProcessor from it's module
import projectDomProcessor  from './projectDomManipulator.js';
import main from './manager.js';
import taskDomProcessor from './taskDomManipulator.js';
//importing an instance of project object for default project creation
import { defaultProject } from './project.js';
import { school } from './project.js';
import { anotherProject } from './project.js';
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
defaultProject.createTask('Gym','Head to the gym at 6pm','12/06/2023',2,'Go to the gymnasium to watch your school team play basketball against seniors');
runner.addProjectToArray(defaultProject);
runner.addProjectToArray(school);
runner.addProjectToArray(anotherProject);
const projectHandler = new projectDomProcessor(runner);
projectHandler.initializeProjectCreation();
projectHandler.appendProjectToDom(defaultProject);
projectHandler.taskAppendor(defaultProject);
projectHandler.initializeTaskDomRemover();
const projectArray=runner.returnProjectNames();
console.log(projectArray);
console.log(JSON.parse(JSON.stringify(projectArray)));