import User from "./user";
import UserClass from "./UserClass";
import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent component Did-Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1 className="p-2 m-2 font-bold text-6xl text-center">About Us</h1>

        <div>
          {/**loggedIn User */} {/*useContext is used here in classBased Component*/}
          <UserContext.Consumer> 
            {({ loggedInUser }) => {
              return (
              <h1 className="text-xl font-bold text-center">{loggedInUser}</h1>
            );
            }}
          </UserContext.Consumer>
        </div>
        
        <h3 className="p-2 m-2 font-medium text-center">
          This is Food Delivery Web Application, Order Food Online From India's
          Best Food Delivery Service
        </h3>
        {/* <User name={"Ankit Telase (Functional Component)"}/> */}

        <UserClass
          name={"Ankit Telase (Class-Based Component)"}
          Location={"Hyderabad (Class)"}
        />
      </div>
    );
  }
}
export default About;

// const About = () => {
//     return (
//     <div>
//         <h1>About Us</h1>
//         <h3>This is Food Delivery Web Application, Order Food Online From India's Best Food Delivery Service</h3>
//         {/* <User name={"Ankit Telase (Functional Component)"}/> */}

//         <UserClass name={"Ankit Telase (Class-Based Component)"} Location={"Hyderabad (Class)"}/>

//     </div>
//     );
// };
