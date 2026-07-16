import Projects from './project.js'
export default class domManipulator
{
    #count = 0;
    constructor(main)
    {
        console.log('Dom Object succesfully created');
        this.runner = main;
        let projectList = document.querySelector('.projectList');
    }
    initializeProjectCreation()
    {
        const creatorButton = document.querySelector('.projectCreator');
        creatorButton.addEventListener('click',()=>
        {
            // this.runner.addProjectToArray(new Projects('Default'));
            let projectDiv = document.createElement('div');
            count++;
            projectDiv.id=`project_${count}`;

        })
    }
}