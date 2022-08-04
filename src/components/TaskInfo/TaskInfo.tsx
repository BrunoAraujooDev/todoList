import style from './TaskInfo.module.css';

interface TaskInfoProps {
    created: number;
    done: number;
}

function TaskInfo({created , done} : TaskInfoProps) {
    return (
        <div className={style.TaskList}>
            <section className={style.CountTasks}>
                <p className={style.paragraphCreated}>Tarefas criadas <span>{created}</span></p>
                <p className={style.paragraphConcluded}>Tarefas Concluídas <span>{done}</span></p>
            </section>
        </div>
    )
}

export default TaskInfo;