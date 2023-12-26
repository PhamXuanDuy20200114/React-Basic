import React from 'react'

class ChildComponent extends React.Component {

    /* 
        - JSX -> return a block (nếu có 2 khối sẽ lỗi -> bọc vào 1 khối div)
            + Nếu k muốn bọc thêm khối thì ta có thể dùng khối React.Fragment hoặc <> </>
        - Để quy định class cho khối ta dùng className chứ k dùng class
    */

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handeleOnClickDelete = (job) => {
        console.log(job)
        this.props.deleteJon(job);
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false
                    ?
                    <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        <div className='job-lists'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></> <span onClick={() => this.handeleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     console.log('>>> Check props: ', props)
//     let { name, age, arrJobs } = props;

//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary > 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }

//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;