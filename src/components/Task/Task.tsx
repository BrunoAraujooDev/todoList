import { Trash } from 'phosphor-react';
import React, { useState } from 'react';
import style from './Task.module.css';


interface TaskProps {
    task: string;
    index: number;
    onDeleteTask: (task: string) => void;
    onCheckTask: (task: boolean) => void;
}

function Task({task, index, onDeleteTask, onCheckTask}: TaskProps) {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    const deleteTask = (): void => {
        onDeleteTask(task)
    }

    const checkedTask = (): void => {

        setIsChecked(!isChecked)  
        onCheckTask(isChecked)
        
    }

    return (
        <>
        <div className={style.containerTask}  >
            <div >
                <label htmlFor={task + index} className={ style.label} > 
                    <input type="checkbox" className={style.inputCheckbox} name='input' id={task + index} />
                    <span className={style.checkmark} onClick={checkedTask}></span>
                    <p className={isChecked ?  style.labelChecked : ''} onClick={checkedTask}>{task}</p>
                </label>
            </div>
            <Trash size={24} onClick={deleteTask}/>
        </div>
        </>
    )

}

export default Task;