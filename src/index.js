// TO Do list using oop principles.

//class to run the app in console
class consoleMenu
{

};
//class to create reminders
class todos
{
    constructor(title,description,due,priority,notes)
    {
        this.title= title;
        this.description=description;
        this.due=due;
        this,priority=priority;
        this.notes=notes;
        logger.info(`toDo Created with title {${this.title}} constructor definition at line 11`);
    }
}
//class to log messages or errors to the console
class logger
{
    //this class is a percfect example of why sometimes you don't need a constructor at all 
    info(message)
    {
        console.log(`[Info] ${message}`);
    }

}
const logix = new logger();