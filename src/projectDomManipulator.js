import Projects from './project.js'
// import main from './manager.js';
export default class domManipulator
{
    #count=0;
    #projectList;
    #inputField;
    constructor(main)  
    {
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
            const id = e.target.id;
            if(id.includes('Remover'))
            {
                const name = id.replace('Remover','');
                this.removeElement(name);
            }
            else if(id.includes('projectDiv'))
            {
                console.log(`ID = ${id}`);
                const name=id.replace('projectDiv','');
                this.runner.selectProject(name);
                const editStyle= this.runner.returnSelectedProject();
                const domLocation = document.querySelector(`#${editStyle.name}`);
                domLocation.classList.add('selectedProject');
                this.removeSelectionHighlight();
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
        if(check)
        {
        this.appendProjectToDom(this.runner.getProjectByName(projectName));
        }
    }
    appendProjectToDom(projectName)
    {
        let listItem=document.createElement('li');
        listItem.id=projectName.name;
        listItem.classList.add('protjectStyles');
        let namePara = document.createElement('p');
        listItem.appendChild(namePara);
        namePara.textContent=projectName.name;
        namePara.id=projectName.name+`projectDiv`;
        let removeProjectButton = document.createElement('button');
        removeProjectButton.id=projectName.name+'Remover';
        removeProjectButton.textContent='-';
        removeProjectButton.classList.add('projectRemover');
        let removeWrapper=document.createElement('div');
        removeWrapper.classList.add('removeWrapper');
        listItem.appendChild(removeWrapper);
        removeWrapper.appendChild(removeProjectButton);
        this.#projectList.appendChild(listItem);
    }
    removeElement(node)
    {
        document.getElementById(node).remove();
        this.runner.removeProject(node);
    }
    removeSelectionHighlight()
    {
        const unSelectedProjects = this.runner.returnUnSelectedProjectNames();
        unSelectedProjects.forEach(element => 
        {
            const domObject = document.querySelector(`#${element}`);
            domObject.classList.remove('selectedProject');
        });
    }
}