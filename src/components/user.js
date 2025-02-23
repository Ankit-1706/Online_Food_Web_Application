import { useState } from "react";

const User = (props) => {

    const [Count1] = useState(0);
    const [Count2] = useState(1);

    return (
    <div className="user-card">
        <h1>Count1 = {Count1}</h1>
        <h1>Count2 = {Count2}</h1>
        <h2>name: {props.name}</h2>
        <h3>Location: Nagpur</h3>
        <h4>Contact: ankit@123</h4>
    </div>
    );
};

export default User;

// we are using state variable useState inside Functional Component...