import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log(this.props.name+ " constructor");
  }

  //mainly used for api operation
  //it runs after render()
  componentDidMount(){
    console.log(this.props.name+ " componentDidMount")
  }

  render() {
    console.log(this.props.name+ " render")
    return (
      <div className="user-container">
        <h1>{this.props.name}</h1>
        <h2>{this.props.area}</h2>
        <h2>{this.props.work}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count
        </button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default User;
