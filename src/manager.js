import logger from './logger.js';
const logix = new logger();
export default class main
{
    //Array used for the storage of projects
    #mainStorage = [];
    //variable to keep count of number of projects
    #count=0;
    
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
        if(this.#count<=6)
        {
            this.#mainStorage.push(projectObject);
            this.#count++;
        }
        else
        {
            logix.error(`maximun number of projects reached ${this.#count}`);
        }
    }
    //Searches the array for object using it's name
    getProjectByName(name)
    {
        return this.#mainStorage.find(project => project.name === name);
    }
};