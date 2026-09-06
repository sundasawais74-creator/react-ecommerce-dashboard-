import { useState } from 'react'
function TodoApp() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const addTask = () => { if(task === '') return; setTasks([...tasks, {id: Date.now(), text: task, done: false}]); setTask('') }
  const deleteTask = (id) => { setTasks(tasks.filter(t => t.id!== id)) }
  const toggleTask = (id) => { setTasks(tasks.map(t => t.id === id? {...t, done:!t.done} : t)) }
  return (
    <div className="container">
      <h1>TodoApp</h1>
      <div className="search-box">
        <input type="text" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todo-list">
        {tasks.map(t => (
          <div key={t.id} className="todo-item">
            <span style={{textDecoration: t.done? 'line-through' : 'none'}}>{t.text}</span>
            <div>
              <button onClick={() => toggleTask(t.id)} className="btn-green">✓</button>
              <button onClick={() => deleteTask(t.id)} className="btn-red">✕</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TodoApp