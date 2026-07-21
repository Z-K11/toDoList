// TO Do list using oop principles.
//import domProcessor from it's module
import { runner } from "./manager.js";
import { storage } from "./storage.js";
//importing an instance of project object for default project creation
import { defaultProject } from './project.js';
import { projectHandler } from "./projectDomManipulator.js";
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
const rawData = localStorage.getItem('saved')
const hasData = rawData !== null && JSON.parse(rawData).length>0; 
if(hasData)
{
storage.fetchFromStorage(projectHandler);
}
else
{
    defaultProject.isSelected=true;
    defaultProject.createTask('Gym','Head to the gym at 6pm','12/06/2023',2,'Go to the gymnasium to watch your school team play basketball against seniors');
    runner.addProjectToArray(defaultProject);
    projectHandler.appendProjectToDom(defaultProject);
    projectHandler.taskAppendor(defaultProject);
}
projectHandler.initializeProjectCreation();
projectHandler.initializeTaskDomRemover();