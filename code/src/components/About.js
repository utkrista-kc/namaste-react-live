import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

const About2 = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>
        This is the Namaste React Live Course Chapter 07 - Finding the path{" "}
      </p>
      <ProfileFunctionalComponent name={"Utkrista"} />
      <Profile name={"Utkrista Class"} xyz={"ABC"} />
    </div>
  );
};

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an API call.
    console.log("Parent - componentDidMount");
  }

  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1 className="font-bold text-xl m-4">About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="font-bold text-xl p-10">
              {user.name} - {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <p className="m-4">
          This is the Namaste React Live Course Chapter 07 - Finding the path
        </p>
        {/* <ProfileFunctionalComponent name={"Utkrista"} /> */}
        <Profile name={"Child"} xyz={"ABC"} />
        {/* <Profile name={"Second Child"} xyz={"ABC"} />
        <Profile name={"Third Child"} xyz={"ABC"} /> */}
      </div>
    );
  }
}

export default About;
