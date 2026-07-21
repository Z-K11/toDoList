import logix from "./logger.js";
export default class
{
    #runner;
  
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
    saveToStorage(runner)
    {
        if(this.#storageAvailable('localStorage'))
        {
            localStorage.setItem('saved',JSON.stringify(runner.returnProjects()));
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
            console.log(projectData.length);
            //[projectsArray][projectNameString,tasksArray][specificTaskArray][taskValues]
        }
        else
        {
            logix.error('Could not fetch from local storage');
        }
    }
}
