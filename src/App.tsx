import  style from './App.module.css';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';


function App() {
 
  return (
      <main className={style.principal}>
        <Header/>
        <article className={style.container}>
          <TaskList/>
        </article>
      </main>
      
 
  )
}

export default App
