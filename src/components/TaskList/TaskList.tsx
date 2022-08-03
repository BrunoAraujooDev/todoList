import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import EmptyTask from '../EmptyTask/EmptyTask';
import Task from '../Task/Task';
import TaskInfo from '../TaskInfo/TaskInfo';
import style from './TaskList.module.css';

function TaskList() {

    const [isTask, setIsTask] = useState(false);

    return (
        <div className={style.containerTask}>
            <div className={style.containerCreateTask}>
                <input type="text" placeholder='Criar uma nova tarefa' className={style.inputTask}/>
                <button type='button' className={style.buttonCreateTask}>
                Criar
                <PlusCircle size={20} />
                </button>
            </div>
            <TaskInfo/>
            { isTask ? <EmptyTask/> : 
                <div className={style.tasks}>
                    <Task/>
                    <Task/>
                </div>}
        </div>
    )
}

export default TaskList;

