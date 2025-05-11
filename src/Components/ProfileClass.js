import React from "react";
import User from "./UserClass";

class Profile extends React.Component {
  constructor() {
    super()
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <User name="awnish" area="Aurangabad" work="software developer" />
        <User name="amit" area="Aurangabad" work="software developer" />
      </div>
    );
  }
}

export default Profile;
