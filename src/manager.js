import logix from './logger.js';
class main
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
            logix.info(this.#mainStorage[i]);
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
            return projectObject.id;
        }
        else
        {
            logix.error(`maximun number of projects reached ${this.#count}`);
            return false;
        }
    }
    //Searches the array for object using it's name
    getProjectById(id)
    {
        return this.#mainStorage.find(project => project.id === id);
    }
    selectProject(id)
    {
        this.#mainStorage.forEach((project)=>
        {
            project.isSelected=(project.id===id);
        })
    }
    returnSelectedProject()
    {
        return this.#mainStorage.find(project=>project.isSelected);
    }
    removeProject(id)
    {
        const project = this.getProjectById(id);
        const index = this.#mainStorage.indexOf(project);
        if (index>-1)
        {
            this.#mainStorage.splice(index,1);
            logix.info(`Project : ${project.name} removed`);
            this.#count--;
        }
    }
    returnUnSelectedProjectNames()
    {
        return this.#mainStorage.filter(project =>!project.isSelected).map(project=>project.id);
    }
    returnProjects()
    {
        return this.#mainStorage.map(project => [project.name,project.returnTasks()]);
        
    }


};
export let runner = new main();