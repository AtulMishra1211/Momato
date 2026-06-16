import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default",
                avatar_url: ""
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/AtulMishra1211");
        const json = await data.json();
        this.setState({ userInfo: json });
    }

   render() {
    const { name, location, avatar_url } = this.state.userInfo;
    const initials = name && name !== "dummy"
        ? name.split(" ").map(n => n[0]).join("")
        : "AM";

    return (
        <div className="userCard">
            {avatar_url ? (
                <img src={avatar_url} alt={name} className="user-avatar-img" />
            ) : (
                <div className="user-avatar">{initials}</div>
            )}
            <div>
                <div className="user-name">{name}</div>
                <div className="user-location">📍 {location}</div>
                <div className="user-contact">📞 9839468684</div>
            </div>
        </div>
    );
}
}

export default UserClass;