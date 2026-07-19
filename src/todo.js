import logix from './logger.js';
export default class todos
{
    //Private fields to keep data inaccessible outside of class
    #title;
    #description;
    #due;
    #priority;
    #notes;
    #id;
    constructor(title,description,due,priority,notes)
    {
        this.#id=crypto.randomUUID();
        this.#title= title;
        this.#description=description;
        this.#due=due;
        this.#priority=priority;
        this.#notes=notes;
        logix.info(`toDo Created with title {${this.#title}} constructor definition at line 70`);
    }
    get priority()
    {
        return this.#priority;
    }
    get name()
    {
        return this.#title;
    }
    get description()
    {
        return this.#description;
    }
    get due()
    {
        return this.#due;
    }
    get notes()
    {
        return this.#notes;
    }
    get id()
    {
        return this.#id;
    }
}