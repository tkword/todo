import React from "react"
import TodoItem from "./Item"

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleChangeProps={this.props.handleChangeProps}
                            deleteTodoProps={this.props.deleteTodoProps}
                        />
                    ))
                }
            </div>
            )
    }
}

export default TodoList