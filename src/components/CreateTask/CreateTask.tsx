import { PlusCircle } from 'phosphor-react';
import style from './CreateTask.module.css';

const CreateTask = () => {

    return (
        <div className={style.containerTask}>
            <input type="text" placeholder='Criar uma nova tarefa' className={style.inputTask}/>
            <button type='button' className={style.buttonCreateTask}>
                Criar
                <PlusCircle size={20} />
            </button>

        </div>

    )

}

export default CreateTask;