import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            userInfo:{
                name:"dummy",
                location : "default"
            }
        };
        // console.log(" child constructor")
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/AtulMishra1211");
        const json  = await data.json();
       
        this.setState({
            userInfo:json,
        });
        console.log(json);
    }
    render(){
        // console.log(" child render")

        const {name, location} = this.state.userInfo;
        return(
            <div className="userCard">
                <img src =
"https://avatars.githubusercontent.com/u/119334585?v=4"></img>
                <h1>Name: {name}</h1>
                <h2>Location : {location}</h2>
                <h2>Contact : 9839468684</h2>
            </div>
        );
    }
}
export default UserClass;