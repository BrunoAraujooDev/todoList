import  style from './App.module.css';
import CreateTask from './components/CreateTask/CreateTask';
import EmptyTask from './components/EmptyTask/EmptyTask';
import Header from './components/Header/Header';
import TaskInfo from './components/TaskInfo/TaskInfo';


function App() {
 
  return (
      <main className={style.principal}>
        <Header/>
        <article className={style.container}>
          <CreateTask/>
          <TaskInfo/>
          <EmptyTask/>
        </article>
      </main>
      
 
  )
}

export default App
