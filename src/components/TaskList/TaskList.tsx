import { PlusCircle } from 'phosphor-react';
import { useState, InvalidEvent, FormEvent, ReactEventHandler } from 'react';
import EmptyTask from '../EmptyTask/EmptyTask';
import Task from '../Task/Task';
import TaskInfo from '../TaskInfo/TaskInfo';
import style from './TaskList.module.css';

interface objChecked {
    task: string;
    isChecked: boolean;
}

function TaskList() {

    const [task, setTask] = useState('');
    const [list, setList] = useState<string[]>([]);
    const [doneTask, setDoneTask] = useState<number>(0);

    const getTask = (event: React.MouseEvent<HTMLButtonElement>, task: String): void => {

        event.preventDefault()


        let taskWithoutBlankSpace = task.trim()

        if(taskWithoutBlankSpace !== ''){
            setList((state: string[]) => [...state, taskWithoutBlankSpace ] )
            setTask('')
        } 
    }

    const handleInvalidTask = (event: InvalidEvent<HTMLInputElement>) => {
        event.target.setCustomValidity("Preencha o campo com alguma tarefa");
    }

    const handleDeleteTask = (task: string) => {

        const cleanedTasks = list.filter( item => item !== task);

        setList(cleanedTasks);
        const count = doneTask - 1
        setDoneTask(count)
    }

    const handleCheckedTask = (taskChecked: number) => {
        let auxDoneTask = doneTask
        const count = auxDoneTask + taskChecked

        setDoneTask(count)
    }

    return (
        <div className={style.containerTask}>
            <form className={style.containerCreateTask} id="form">
                <input type="text" placeholder='Criar uma nova tarefa' 
                    className={style.inputTask} 
                    onInvalid={handleInvalidTask}  
                    onChange={(event) => setTask(event.target.value)}
                    value={task}
                    required
                />
                <button type='button' className={style.buttonCreateTask} onClick={ (event) => getTask(event, task)}>
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
            <TaskInfo created={list.length} done={doneTask}/>
            {list.length  ? 
                list.map((item, index) => {
                    return (
                        <div className={style.tasks} key={index}>
                            <Task task={item} index={index} onDeleteTask={handleDeleteTask} onCheckTask={handleCheckedTask}/>
                        </div>

                    )
                }) : <EmptyTask /> 
            }
        </div>
    )
}

export default TaskList;

