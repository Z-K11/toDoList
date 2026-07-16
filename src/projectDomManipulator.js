import Projects from './project.js'
export default class domManipulator
{
    #count=0;
    constructor(main)
    {
        console.log('Dom Object succesfully created');
        this.runner = main;
        this.projectList = document.querySelector('.projectList');
        this.modal = document.querySelector('.modalOverlay');
        let createOptions = document.querySelector('.creatorOptions');
        createOptions.addEventListener('click',(e)=>
        {
            let target = e.target.id;
            if(target==='cancel')
            {
                this.cancelButton()
            }
        })
        
        
    }
    cancelButton()
    {
            this.modal.classList.add('hidden');
    }
    initializeProjectCreation()
    {
        const creatorButton = document.querySelector('.projectCreator');
        creatorButton.addEventListener('click',()=>
        {
            // this.runner.addProjectToArray(new Projects('Default'));
            let projectDiv = document.createElement('div');
            this.#count++;
            projectDiv.id=`project_${this.#count}`;
            this.modal.classList.remove('hidden');

        })
    }
}