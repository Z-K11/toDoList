import logix from "./logger.js";
import projects from "./project.js";
import { runner } from "./manager.js";
export default class memory
{
    #runner;
    constructor(main)
    {
        this.#runner=main;
    }
    #storageAvailable(type)
    {
        let storage
        try
        {
            storage = window[type];
            const x = 'test';
            storage.setItem(x,x);
            storage.removeItem(x,x);
            return true;
        }
        catch(e)
        {
            return(   
                    e instanceof DOMException && e.name ==="QuotaExceededError" && storage && storage.length!==0
                    );}   
    }
    saveToStorage()
    {
        if(this.#storageAvailable('localStorage'))
        {
            console.log('Saving:', this.#runner.returnProjects());
            localStorage.setItem('saved',JSON.stringify(this.#runner.returnProjects()));
        }
        else
        {
            logix.error(`Could Not Save to local storage`);
        }
    }
    fetchFromStorage(projectHandler)
    {
        if(this.#storageAvailable('localStorage'))
        {
            let projectData=JSON.parse(localStorage.getItem('saved'));
            for(let i=0;i<projectData.length;i++)
            {   
                console.log(projectData[i][0]);
                let x = new projects(projectData[i][0]);
                let xId = this.#runner.addProjectToArray(x);
                projectHandler.appendProjectToDom(this.#runner.getProjectById(xId));
                for(let j=0;j<projectData[i][1].length;j++)
                {
                    console.log(projectData[i][1][j]);
                    x.createTask(projectData[i][1][j][0],projectData[i][1][j][1],projectData[i][1][j][2],projectData[i][1][j][3],projectData[i][1][j][4]);
                    projectHandler.taskAppendor(x);
                }
            }
            //[projectsArray][projectNameString,tasksArray][specificTaskArray][taskValues]
            console.log(projectData);
        }
        else
        {
            logix.error('Could not fetch from local storage');
        }
    }
}
export const storage = new memory(runner);
