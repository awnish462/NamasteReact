import React from "react";

class User extends React.Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <div className="user-container">
        <h1>{this.props.name}</h1>
        <h2>{this.props.area}</h2>
        <h2>{this.props.work}</h2>
      </div>
    );
  }
}

export default User;
