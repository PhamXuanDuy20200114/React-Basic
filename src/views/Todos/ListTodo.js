import React from "react";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import './ListTodo.scss'

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'Homework' },
            { id: 'todo2', title: 'Make video' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodo: [
                ...this.state.listTodo, todo
            ]
        })
        toast.success('Add success')
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodo;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currentTodos
        })
        toast.success('Delete success!')
    }

    handleUpdateTodo = (todo) => {
        let { editTodo, listTodo } = this.state
        let isEmptyObject = Object.keys(editTodo).length === 0;
        if (isEmptyObject === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo];
            let objIndex = listTodoCopy.findIndex(obj => obj.id === todo.id);
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success('Update todo succeed!')

        } else {
            this.setState({
                editTodo: todo
            })
        }

    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        console.log(editTodoCopy)
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObject = Object.keys(editTodo).length === 0;
        console.log(isEmptyObject)
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
                                    {
                                        isEmptyObject === true
                                            ?
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input type='text' value={editTodo.title} onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                                }


                                            </>
                                    }
                                    <button className="edit" onClick={() => this.handleUpdateTodo(item)}>
                                        {
                                            isEmptyObject === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}>Delete</button>
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