// TO Do list using oop principles.

//class to run the app in console
class main
{
    constructor()
    {
        this.mainStorage = [];
    }
    displayProjects()
    {
        for(let i =0;i<this.mainStorage.length;i++)
        {
            console.log(this.mainStorage[i]);
        }
    }
    addProjectToArray(projectObject)
    {   
        this.mainStorage.push(projectObject);
    }
};
//class to create projects that will contain the todos
class projects
{   
    constructor(name)
    {
        this.name=name;
        this.projectArray = [];
    }
    createTask(name,description,due,priority,notes)
    {
        this.projectArray.push(new todos(name,description,due,priority,notes));
        logix.info(`createTask called on line 29`);
    }
}
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
        logix.info(`toDo Created with title {${this.title}} constructor definition at line 11`);
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
const runner = new main();
runner.addProjectToArray(new projects('Default'));
runner.displayProjects();