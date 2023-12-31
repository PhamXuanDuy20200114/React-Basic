import React from "react";

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTiTle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        if (!this.state.title) {
            alert('Missing required params!')
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <div className="add-todo" >
                <input type="text" onChange={(event) => this.handleOnChangeTiTle(event)} />
                <button type="button" className="add" onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;