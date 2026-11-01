import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onUpdate, onDelete }) {
    if (todos.length === 0) {
        return <p className="text-center text-slate-400 py-8">Henüz görev yok. Yukarıdan yeni bir görev ekle.</p>
    }

    return (
        <ul className="space-y-2">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    )
}

export default TodoList