import Projects from './project.js'
export default class domManipulator
{
    constructor(main)
    {
        console.log('Dom Object succesfully created');
        this.runner = main;
    }
    initializeProjectCreation()
    {
        const creatorButton = document.querySelector('.projectCreator');
        creatorButton.addEventListener('click',()=>
        {
            // this.runner.addProjectToArray(new Projects('Default'));
        })
    }
}