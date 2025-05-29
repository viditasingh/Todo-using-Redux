import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center text-white mb-8 drop-shadow-lg">
          Redux Todo App
        </h1>
        <AddTodo/>
        <Todos/>
      </div>
    </div>
  )
}

export default App