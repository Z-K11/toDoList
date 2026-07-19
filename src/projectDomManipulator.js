import Projects from './project.js'
import taskDomProcessor from './taskDomManipulator.js';
export default class domManipulator
{
    #count=0;
    #projectList;
    #inputField;
    #tasks = document.querySelector('.tasks');
    #taskDomManager
    constructor(main)  
    {   
        this.#taskDomManager = new taskDomProcessor(main)
        console.log('Dom Object succesfully created');
        this.runner = main;
        this.modal = document.querySelector('.modalOverlay');
        this.#projectList = document.querySelector('#projectsList');
        this.#inputField = document.querySelector('#nameOfProject');
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
        });
        this.#projectList.addEventListener('click',(e)=>
        {
            const id = e.target.dataset.id;
            if(!id)return;
            if(id.includes('Remover'))
            {
                const projectId = id.replace('Remover','');
                this.removeElement(projectId);
            }
            else if(id.includes('projectDiv'))
            {
                const projectId=id.replace('projectDiv','');
                this.runner.selectProject(projectId);
                const editStyle= this.runner.returnSelectedProject();
                const domLocation = document.querySelector(`[data-id="${editStyle.id}"]`);
                domLocation.classList.add('selectedProject');
                this.removeSelectionHighlight();
                this.#tasks.innerHTML='';
                let currentProject=this.runner.returnSelectedProject();
                this.taskAppendor(currentProject);

            }
            

        });

        
        
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
            this.#inputField.value='';
    }
    submitProject()
    {
        const projectName = this.#inputField.value;
        const check=this.runner.addProjectToArray(new Projects(projectName));
        this.#inputField.value='';
        if(check!=false)
        {
        this.appendProjectToDom(this.runner.getProjectById(check));
        }
    }
    appendProjectToDom(projectId)
    {
        let listItem=document.createElement('li');
        listItem.dataset.id=projectId.id;
        listItem.classList.add('protjectStyles');
        let namePara = document.createElement('p');
        listItem.appendChild(namePara);
        namePara.textContent=projectId.name;
        namePara.dataset.id=projectId.id+`projectDiv`;
        let removeProjectButton = document.createElement('button');
        removeProjectButton.dataset.id=projectId.id+'Remover';
        removeProjectButton.textContent='-';
        removeProjectButton.classList.add('projectRemover');
        let removeWrapper=document.createElement('div');
        removeWrapper.dataset.id='removeWrapperId';
        removeWrapper.classList.add('removeWrapper');
        listItem.appendChild(removeWrapper);
        removeWrapper.appendChild(removeProjectButton);
        this.#projectList.appendChild(listItem);
    }
    removeElement(node)
    {
        document.querySelector(`[data-id="${node}"]`).remove();
        this.runner.removeProject(node);
    }
    removeSelectionHighlight()
    {
        const unSelectedProjects = this.runner.returnUnSelectedProjectNames();
        unSelectedProjects.forEach(element => 
        {
            const domObject = document.querySelector(`[data-id="${element}"]`);
            domObject.classList.remove('selectedProject');
        });
    }
    taskAppendor(currentProject)
    {
        this.#taskDomManager.appendTask(currentProject);
    }
    initializeTaskDomRemover()
    {
        this.#taskDomManager.initializeTaskRemover();
    }
}