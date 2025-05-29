import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

export default function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const add = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <form 
                onSubmit={add} 
                className="flex flex-col sm:flex-row gap-3 bg-slate-800 p-4 rounded-xl shadow-lg"
            >
                <input
                    type="text"
                    className="flex-grow bg-slate-700 rounded-lg border border-slate-600 
                           focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 
                           text-base outline-none text-white py-2 px-4 
                           transition-colors duration-200 placeholder:text-slate-400"
                    placeholder="Add a new task..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white bg-indigo-600 py-2 px-6 rounded-lg
                           font-medium hover:bg-indigo-700 focus:outline-none 
                           focus:ring-2 focus:ring-indigo-500/50 
                           transition-all duration-200 shadow-md hover:shadow-lg
                           disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!input.trim()}
                >
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Add Task
                    </span>
                </button>
            </form>
        </div>
    )
}