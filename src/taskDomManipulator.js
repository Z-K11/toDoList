import logix from './logger.js'
export default class taskDomProcessor
{
    #submitButton = document.querySelector('#submitTask');
    #title = document.querySelector('#title');
    #description = document.querySelector('#description');
    #dueDate = document.querySelector('#due');
    #priority = document.querySelector('#priority');
    #notes = document.querySelector('#notes');
    constructor(projectObject)
    {
        this.#submitButton.addEventListener('click',()=>
        {
            const checkinput = this.inputValidator();
            if(checkinput===0)
            {
                logix.error('Empty Strings');
            }
            else if(checkinput===1)
            {
                logix.error('Invalid Priority Value');
            }
            else if (checkinput===2)
            {
                logix.info('no errors');
            }
        });
    }
    inputValidator()
    {
        this.clearInput();
        if(!this.#description.value||!this.#dueDate.value||!this.#notes.value||!this.#priority.value||!this.#title.value)
        {
            return 0;
        }
        else if(this.#priority.value<1||this.#priority.value>7)
        {
            return 1;
        }
        else
        {
            return 2;
        }
    }
    clearInput()
    {
        this.#description.value='';
        this.#dueDate.value='';
        this.#notes.value='';
        this.#priority.value='';
        this.#title.value='';
    }
};