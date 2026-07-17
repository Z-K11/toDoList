class logger
{
    //this class is a percfect example of why sometimes you don't need a constructor at all 
    info(message)
    {
        console.log(`[Info] ${message}`);
    }
    error(message)
    {
        console.log(`[ERROR] ${message}`);
    }

}
export default new logger();