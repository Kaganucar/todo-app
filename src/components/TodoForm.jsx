import { useState } from "react";

function TodoForm({ onAdd }) {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) return
        onAdd(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Yeni görev ekle..."
                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
                type="submit"
                disabled={!title.trim()}
                className="px-5 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Ekle
            </button>
        </form>
    )
}

export default TodoForm