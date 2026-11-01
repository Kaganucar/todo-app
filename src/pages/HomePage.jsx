import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { createTodo } from "../interfaces/todo";

const STORAGE_KEY = 'todos'

const ornekGorevler = [
    { id: '1', title: 'React temellerini öğren', completed: true, createdAt: '2026-11-01T10:00:00.000Z' },
    { id: '2', title: 'Tailwind ile arayüz tasarla', completed: false, createdAt: '2026-11-01T11:00:00.000Z' },
    { id: '3', title: "Projeyi Netlify'a yükle", completed: false, createdAt: '2026-11-01T12:00:00.000Z' },
]

function loadTodos() {
    try {
        const kayit = localStorage.getItem(STORAGE_KEY)
        return kayit ? JSON.parse(kayit) : ornekGorevler
    } catch {
        return ornekGorevler
    }
}

function HomePage() {
    const [todos, setTodos] = useState(loadTodos)

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    const addTodo = (title) => {
        setTodos([createTodo(title), ...todos])
    }

    const toggleTodo = (id) => {
        setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
    }

    const updateTodo = (id, newTitle) => {
        setTodos(todos.map(t => t.id === id ? { ...t, title: newTitle.trim() } : t))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id))
    }

    const tamamlananSayisi = todos.filter(t => t.completed).length

    return (
        <div className="min-h-screen bg-slate-100 py-10 px-4">
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
                <h1 className="text-3xl font-bold text-slate-800">Görev Listem</h1>
                <p className="text-slate-500 mt-1 mb-6">
                    {todos.length} görev · {tamamlananSayisi} tamamlandı
                </p>
                <TodoForm onAdd={addTodo} />
                <TodoList
                    todos={todos}
                    onToggle={toggleTodo}
                    onUpdate={updateTodo}
                    onDelete={deleteTodo}
                />
            </div>
        </div>
    )
}

export default HomePage