import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Default",
                avatar_url : "http://img-photo/dummy_URL"
            },
        };
        // console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount(){ //In class-based component componentDidMount() uses to fetch api, So this is the way of doing api call in C-B-C.
        // console.log(this.props.name + "Child component-DidMount");
        // API CAll

        const data = await fetch("https://api.github.com/users/Ankit-1706");
        const json =  await data.json();

        this.setState({
            userInfo : json,
        });

        // console.log(json);
        
    }

    componentDidUpdate(){
        // console.log("componentDid Updated called");
    }

    componentWillUnmount(){
        // console.log("componentWillUnmount");
    }

    render(){
        // console.log(this.props.name + "Child Render");

        const { name, location, avatar_url } = this.state.userInfo; // Destructure it !!!
        
        return (
            <div className="user-card p-2 m-2 justify-items-center font-medium bg-gray-100">
                <img src={avatar_url} className="w-52 h-52" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: ankit@123</h4>
            </div>
        );
    };
};

export default UserClass;
/* React Class-Based Component */
/* Passing Props to the Class-Based Component */

/* this :- Used in class-Component, 
    So that props can be access anywhere inside the Class*/