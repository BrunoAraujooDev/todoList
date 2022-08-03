import style from './TaskInfo.module.css';

function TaskInfo() {
    return (
        <div className={style.TaskList}>
            <section className={style.CountTasks}>
                <p className={style.paragraphCreated}>Tarefas criadas <span>0</span></p>
                <p className={style.paragraphConcluded}>Tarefas Concluídas <span>0</span></p>
            </section>
        </div>
    )
}

export default TaskInfo;