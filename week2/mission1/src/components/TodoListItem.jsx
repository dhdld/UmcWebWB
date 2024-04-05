export default function TodoListItem({ todo, doneTodo }) {
    const { id, text, isDone} = todo;

    const done = () => {
        doneTodo(id);
    }
    return (
        <div>
            {isDone ? (
                null
            ) : (
                <li className="todo">
                    <span>{text}</span>
                    <button onClick={done}>완료</button>
                </li>
            )}
        </div>
    );
} 