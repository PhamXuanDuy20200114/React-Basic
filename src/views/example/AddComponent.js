import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChnageTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChnageSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params!')
            return;
        }
        console.log('Check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        });
        this.setState({
            title: '',
            salary: ''
        })

    }

    render() {
        return (
            <form action="/action_page.php">
                <label for="fname">Job's Title:</label>
                <br />
                <input type="text" value={this.state.title} onChange={(event) => this.handleChnageTitleJob(event)} />
                <br />
                <label for="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => this.handleChnageSalary(event)} />
                <br />
                <br />
                <input type="submit" value="Submit"
                    onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}

export default AddComponent;