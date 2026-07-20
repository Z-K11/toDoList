export default class
{
    constructor()
    {

    }
    storageAvailable(type)
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
}
