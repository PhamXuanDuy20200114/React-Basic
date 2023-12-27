import React from "react";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import './ListTodo.scss'

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'Homework' },
            { id: 'todo2', title: 'Make video' }
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodo: [
                ...this.state.listTodo, todo
            ]
        })
        toast.success('Add successfully!')
    }

    render() {
        let { listTodo } = this.state;
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {
                        listTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1} - {item.title}</span> <></> <button>Edit</button> <button>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;