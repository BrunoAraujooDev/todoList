import { Trash } from 'phosphor-react';
import style from './Task.module.css';

function Task() {

    return (
        <>
        <div className={style.containerTask}>
            <div>
                <label htmlFor="input" className={style.label}> 
                    <input type="checkbox" className={style.inputCheckbox} name='input' id="input"/>
                    <span className={style.checkmark}></span>
                    como não ser triste
                </label>
            </div>
            <Trash size={24} />
        </div>
        </>
    )

}

export default Task;