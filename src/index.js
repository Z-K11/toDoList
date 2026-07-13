// TO Do list using oop principles.

//class to run the app in console
class main
{
    displayToDos(arr)
    {
        for(let i =0;i<arr.length;i++)
        {
            console.log(arr[i]);
        }
    }
    addtoarray(arr,toDoObject)
    {   
        arr.push(toDoObject);
    }
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
let todoArray = [];
let menu = new main();
let newDo = menu.addtoarray(todoArray,new todos('App','todoApp','25',1,'nothing'));
menu.displayToDos(todoArray);