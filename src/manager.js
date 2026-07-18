import logix from './logger.js';
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
            logix.info('Project Created');
            return true;
        }
        else
        {
            logix.error(`maximun number of projects reached ${this.#count}`);
            return false;
        }
    }
    //Searches the array for object using it's name
    getProjectByName(name)
    {
        return this.#mainStorage.find(project => project.name === name);
    }
    selectProject(name)
    {
        this.#mainStorage.forEach((project)=>
        {
            project.isSelected=(project.name===name);
        })
        this.displayProjects();
    }
    returnSelectedProject()
    {
        return this.#mainStorage.find(project=>project.isSelected);
    }
    removeProject(name)
    {
        const project = this.getProjectByName(name);
        const index = this.#mainStorage.indexOf(project);
        if (index>-1)
        {
            this.#mainStorage.splice(index,1);
            logix.info(`Project : ${name} removed`);
            this.#count--;
        }
        this.displayProjects();
    }
    returnUnSelectedProjectNames()
    {
        return this.#mainStorage.filter(project =>!project.isSelected).map(project=>project.name);
    }
};