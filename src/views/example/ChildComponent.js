import React from 'react'

class ChildComponent extends React.Component {

    /* 
        - JSX -> return a block (nếu có 2 khối sẽ lỗi -> bọc vào 1 khối div)
            + Nếu k muốn bọc thêm khối thì ta có thể dùng khối React.Fragment hoặc <> </>
        - Để quy định class cho khối ta dùng className chứ k dùng class
    */

    render() {
        return (
            <>
                <div>Child Component: {this.props.name}</div>

            </>
        )
    }
}

export default ChildComponent;