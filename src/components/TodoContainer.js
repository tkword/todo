import React from "react"
import TodoList from "./List"
import Header from "./Header"
import InputTodo from "./Input"

import {v4 as uuidv4} from "uuid"

import "../App.css"

class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: uuidv4(),
                title: "item #1",
                completed: true
            },
            {
                id: uuidv4(),
                title: "item #2",
                completed: false
            },
            {
                id: uuidv4(),
                title: "item #3",
                completed: true
            }
        ]
    }

    handleChange = id => {

        this.setState(prevState => {
            return {
                todos: this.state.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        });
        console.log("clicked ", id);
    }

    deleteTodo = id => {
        console.log("delete", id);

        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    addTodoItem = title => {
        const newTodo = {
            id:uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    };

    render() {
        return (
            <div className="container">
                <Header />
                <InputTodo addTodoProps={this.addTodoItem} />
                <TodoList
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.deleteTodo}

                />
            </div>
        )
    }
}

export default TodoContainer