export default function DoneListItem({ done, deleteTodo }) {
    const { id, text, isDone} = done;
    const deleteDone = () => {
        deleteTodo(id);
    }
    return (
        <div>
            {isDone ? (
                <li className="todo">
                    <span>{text}</span>
                    <button onClick={deleteDone}>삭제</button>
                </li>
            ) : null
            }
        </div>
    )
}