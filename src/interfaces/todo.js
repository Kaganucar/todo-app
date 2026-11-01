/**
 * @typedef {Object} Todo
 * @property {string}  id
 * @property {string}  title
 * @property {boolean} completed
 * @property {string}  createdAt
 */

export function createTodo(title){
    return {
        id: crypto.randomUUID(),
        title: title.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
    }
}