import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }

    render() {
        console.log("Parent Render");
        return (
            <div className="about-wrapper">
                <span className="label">About us</span>
                <p className="about-title">Meet the team</p>
                <UserClass />
            </div>
        );
    }
}

export default About;