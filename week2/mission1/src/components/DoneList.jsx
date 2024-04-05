import DoneListItem from "./DoneListItem"
export default function DoneList({todos, deleteTodo}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
        }}>
        <h3 className="todoTitle">해낸 일</h3>
        <ul>
            {todos.map(done => (
                <DoneListItem done={done} key ={done.id} deleteTodo={deleteTodo}/>
            ))}
        </ul>
        </div>
    )
}