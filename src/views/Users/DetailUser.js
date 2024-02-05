import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        let id = this.props.match.params.id;
        let res = await axios.get(`https://reqres.in/api/users/${id}`);
        this.setState({
            user: res && res.data && res.data.data ? res.data.data : {}
        })
    }
    render() {
        let { user } = this.state;
        let isEmptyObject = Object.keys(user).length === 0;
        return (
            <>
                {isEmptyObject === false &&
                    <>
                        <div>User's name: {user.first_name}</div>
                        <div>User's last name: {user.last_name}</div>
                        <div>User's email: {user.email}</div>
                        <div><img src={user.avatar} alt="avatar" /></div>
                        <div>
                            <button onClick={() => this.props.history.push('/user')}>Back</button>
                        </div>
                    </>
                }

            </>
        );
    }
}

export default withRouter(DetailUser);