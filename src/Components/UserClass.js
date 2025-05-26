import React from "react";
import UserContext from "../../utils/usercontext"
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: {
        name: "Dummy Name",
        avatar_url: "Dummy Url",
      },
    };
    console.log(this.props.name + " constructor");
  }

  //mainly used for api operation
  //it runs after render()
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/awnish462");
    const json = await data.json();

    this.setState({
      user: json,
    });
  }

  componentDidUpdate(){
    console.log("component did updata");
  }

  componentWillUnmount(){
    console.log("component did unmount");
  }
  render() {
    console.log(this.props.name + " render");
    const { name, avatar_url } = this.state.user;
    return (
      <div className="user-container pt-10 px-2">
        <h1>{name}</h1>
        <UserContext.Consumer>
          {(data)=><h3>{data.userName}</h3>}
        </UserContext.Consumer>
        <img src={avatar_url} />
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
