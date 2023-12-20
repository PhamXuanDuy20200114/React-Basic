import React from 'react'

// class ChildComponent extends React.Component {

//     /* 
//         - JSX -> return a block (nếu có 2 khối sẽ lỗi -> bọc vào 1 khối div)
//             + Nếu k muốn bọc thêm khối thì ta có thể dùng khối React.Fragment hoặc <> </>
//         - Để quy định class cho khối ta dùng className chứ k dùng class
//     */

//     render() {
//         let { name, age, arrJobs } = this.props;
//         console.log('>>Check props: ', this.props);
//         return (
//             <>
//                 <div className='job-lists'>
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }

const ChildComponent = (props) => {
    console.log('>>> Check props: ', props)
    let { name, age, arrJobs } = props;

    return (
        <>
            <div className='job-lists'>
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ChildComponent;