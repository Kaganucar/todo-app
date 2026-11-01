import { useState } from 'react'

function TodoItem({ todo, onToggle, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)

  const handleSave = () => {
    if (!editTitle.trim()) return
    onUpdate(todo.id, editTitle)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditTitle(todo.title)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <li className="flex items-center gap-2 p-3 rounded-lg border border-emerald-300 bg-emerald-50">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSave()
            if (e.key === 'Escape') handleCancel()
          }}
          autoFocus
          className="flex-1 px-3 py-1.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button onClick={handleSave} className="px-3 py-1.5 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700">
          Kaydet
        </button>
        <button onClick={handleCancel} className="px-3 py-1.5 rounded-md bg-slate-200 text-slate-700 text-sm hover:bg-slate-300">
          İptal
        </button>
      </li>
    )
  }

  return (
    <li className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 accent-emerald-600 cursor-pointer"
      />
      <span className={todo.completed ? 'flex-1 line-through text-slate-400' : 'flex-1 text-slate-700'}>
        {todo.title}
      </span>
      <button onClick={() => setIsEditing(true)} className="px-3 py-1 rounded-md text-sm text-blue-600 hover:bg-blue-50">
        Düzenle
      </button>
      <button onClick={() => onDelete(todo.id)} className="px-3 py-1 rounded-md text-sm text-red-600 hover:bg-red-50">
        Sil
      </button>
    </li>
  )
}

export default TodoItem