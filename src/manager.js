export default class main
{
    //Array used for the storage of projects
    #mainStorage = [];
    //variable to keep count of number of projects
    
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