import TodoListItem from './TodoListItem';

export default function TodoList({todos, doneTodo}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
        }}>
        <h3 className='todoTitle'>해야 할 일</h3>
        <ul>
            {todos.map(todo => (
                <TodoListItem todo={todo} key ={todo.id} doneTodo={doneTodo}/>
            ))}
        </ul>
        </div>
    )
}