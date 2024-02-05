import React from "react";
import Color from "../HOC/Color";
import './ListUser.scss';

import axios from "axios";

class ListUser extends React.Component {
    state = {
        listUser: []
    };
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    render() {
        let { listUser } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list user
                </div>
                <div className="list-user-content">
                    {listUser && listUser.length > 0 && listUser.map((user, index) => {
                        return (
                            <div key={user.id} className="child">
                                {index + 1}. {user.first_name} {user.last_name}
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Color(ListUser);