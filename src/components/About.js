import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        console.log(" Parent constructor")
        super(props);
    }
    render(){
        console.log(" Parent Render")

    return(
        <div>About
        <UserClass name = {"Atul Mishra"} location = {"Dehradun"}/>
        </div>
    );
}
}
export default About;