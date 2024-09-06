import { controls } from './elements.js';
import { sounds } from './elements.js';
import * as actions from './actions.js';



export function registerControls(){
    controls.addEventListener('click',(event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function'){
            return
        }

        actions[action]() 
    });
    
}

export function registerSounds(){
    sounds.addEventListener('click',(event) => {
        const som = event.target.dataset.som
        if(typeof actions[som] != 'function'){
            return
        }

        actions[som]() 
    });
    
}