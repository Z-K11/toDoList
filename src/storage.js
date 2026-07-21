import logix from "./logger.js";
export default class
{
    #runner;
    constructor(main)
    {
        this.#runner = main;
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
            localStorage.setItem('saved',JSON.stringify(this.#runner.returnProjects()));
        }
        else
        {
            logix.error(`Could Not Save to local storage`);
        }
    }
}
