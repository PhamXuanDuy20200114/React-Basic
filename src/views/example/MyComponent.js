import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'developer', salary: '500' },
            { id: 'abcJob2', title: 'project manager', salary: '1500' },
            { id: 'abcJob3', title: 'tester', salary: '700' }
        ]
    }

    addNewJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs.push(job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            //arrJobs: currentJobs
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id != job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }

    /* 
        - JSX -> return a block (nếu có 2 khối sẽ lỗi -> bọc vào 1 khối div)
            + Nếu k muốn bọc thêm khối thì ta có thể dùng khối React.Fragment hoặc <> </>
        - Để quy định class cho khối ta dùng className chứ k dùng class
    */

    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJon={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent; 