import { ClipboardText } from "phosphor-react";
import style from './EmptyTask.module.css';

function EmptyTask() {
    return (
        <div className={style.containerEmptyTask}>
            <ClipboardText size={60} />
            <span className={style.paragraph1}>Você ainda não tem tarefas cadastradas</span>
            <span className={style.paragraph2}>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}

export default EmptyTask;