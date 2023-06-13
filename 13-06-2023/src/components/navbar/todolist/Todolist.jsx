import "./todolist.css"

const TodoList = ({data}) => {

    return(
        <div className="todolist-wrapper">
            <h2>Todo-list</h2>
            <ul className="todolist">
                {
                    data.map((item) => (
                        <li>{item.todo}</li>
                    ))
                }
      
            </ul>
        </div>
    )
        

}

export default TodoList