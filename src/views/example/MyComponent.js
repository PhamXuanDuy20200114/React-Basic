import React from 'react'

class MyComponent extends React.Component {

    state = {
        name: 'Gau',
        chanel: 'Duy Gau'
    }

    /* 
        - JSX -> return a block (nếu có 2 khối sẽ lỗi -> bọc vào 1 khối div)
            + Nếu k muốn bọc thêm khối thì ta có thể dùng khối React.Fragment
        - Để quy định class cho khối ta dùng className chứ k dùng class
    */

    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className='name'>
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnchangeName(event)} />
                    Name: {this.state.name}
                </div>
                <div className='chanel'>Chanel: {this.state.chanel}</div>
            </React.Fragment>
        )
    }
}

export default MyComponent;