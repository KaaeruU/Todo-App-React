import { useState } from 'react'
import TodoItem from './TodoItem'

function TodoList() {
  const [todos, setTodos] = useState<string[]>([])
  const [todo, setTodo] = useState('')


  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo])
      setTodo('')
      console.log(todos)
    }
  }

  const deleteTodo = (todo_id: number) => {
    setTodos(todos.filter((_, index) => index +1 !== todo_id))
    console.log(todos)
  }



  return (
    <>
    <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-4 text-center text-gray-800'>Add Your Tasks</h1>
      <div className='flex mb-4'>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Add your tasks'
        className='flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400'
      />
      <button
        onClick={() => {addTodo()}}
        className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition-colors'
      >
        Add
      </button>
      </div>
      <div>
      <ol className='list-decimal list-inside space-y-2'>
        {todos.map((item, index)=> {
        return <li key={index} className='bg-gray-100 rounded px-3 py-2 list-none'>
          <TodoItem text={item} id={index +1} delete={deleteTodo}/>
        </li>
        })}
      </ol>
      </div> 
    </div>
    </>
  )
}


export default TodoList

