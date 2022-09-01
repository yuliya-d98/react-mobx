import { observer } from 'mobx-react-lite';
import todo from './store/todo';

const Todos = observer(() => {
  return (
    <div>
      <button onClick={() => todo.fetchTodo()}>Fetch todos</button>
      {todo.todos.map(t => <div className='todo' key={t.id}>
        <input type='checkbox' checked={t.completed} onChange={() => todo.completeTodo(t)} id={`completed${t.id}`} />
        <label htmlFor={`completed${t.id}`}>{t.title}</label>
        <button onClick={() => todo.removeTodo(t.id)}>X</button>
      </div>)
      }
    </div >
  )
})

export default Todos;
