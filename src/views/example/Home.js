import React from "react";
import Color from "../HOC/Color";
import gau from "../../assets/images/gau.jpg";

class Home extends React.Component {
    render() {
        return (
            <>
                <div>Hello Home

                </div><div>
                    <img src={gau} alt="gau" />
                </div>
            </>
        )
    }
}
export default Color(Home);