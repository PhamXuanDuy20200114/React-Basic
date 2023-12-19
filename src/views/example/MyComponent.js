import React from 'react'
import ChildComponent from './ChildComponent'

class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    }

    /* 
        - JSX -> return a block (nếu có 2 khối sẽ lỗi -> bọc vào 1 khối div)
            + Nếu k muốn bọc thêm khối thì ta có thể dùng khối React.Fragment hoặc <> </>
        - Để quy định class cho khối ta dùng className chứ k dùng class
    */

    handleChnageFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChnageLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Check data input: ', this.state)
    }

    render() {
        return (
            <>
                <div>Hello HTML Form</div>
                <form action="/action_page.php">
                    <label for="fname">First name:</label>
                    <br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChnageFirstName(event)} />
                    <br />
                    <label for="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChnageLastName(event)} />
                    <br />
                    <br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
                <ChildComponent name={'child-one'} />
                <ChildComponent name={'child-two'} />
                <ChildComponent name={'child-three'} />
            </>
        )
    }
}

export default MyComponent;