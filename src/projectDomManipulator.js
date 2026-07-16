import Projects from './project.js'
// import main from './manager.js';
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
                this.hideModal();
                this.#count--;
            }
            else if (target==='submitProject')
            {
                this.submitProject();
                this.hideModal();
            }
        })
        
        
    }
    initializeProjectCreation()
    {
        const creatorButton = document.querySelector('.projectCreator');
        creatorButton.addEventListener('click',()=>
        {
            // this.runner.addProjectToArray(new Projects('Default'));
            // let projectDiv = document.createElement('div');
            this.#count++;
            this.modal.classList.remove('hidden');

        })
    }
    hideModal()
    {
            this.modal.classList.add('hidden');
    }
    submitProject()
    {
        const inputField = document.querySelector('#nameOfProject');
        const projectName = inputField.value;
        this.runner.addProjectToArray(new Projects(projectName));
        inputField.value='';
        this.appendProjectToDom(this.runner.getProjectByName(projectName));
    }
    appendProjectToDom(projectName)
    {
        const projectList = document.querySelector('#projectsList');
        let listItem=document.createElement('li');

        listItem.classList.add('protjectStyles');
        listItem.textContent=projectName.name;
        projectList.appendChild(listItem);
    }

}