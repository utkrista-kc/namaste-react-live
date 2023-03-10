import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    //Create State
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child - Constructor " + this.props.name);
  }

  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   // console.log("Namaste React OP");
    // }, 1000);
    //API call.
    const data = await fetch("https://api.github.com/users/utkrista-kc");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("json", json);
    console.log("Child - componentDidMount " + this.props.name);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    console.log("Component Did Update ");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("Component Will Unmount");
  }

  render() {
    console.log("Child - Render " + this.props.name);
    const { count } = this.state;
    return (
      <div>
        <h1 className="font-bold text-xl m-4">Profile Class Component</h1>
        <img
          className="w-40 m-4"
          src={this.state?.userInfo?.avatar_url}
          alt=""
        />
        <h2 className="m-4">Name: {this.state?.userInfo?.name}</h2>
        <h2 className="m-4">Location: {this.state?.userInfo?.location}</h2>
        <h2 className="m-4">Count: {count}</h2>
        <button
          className="m-4 p-2 bg-purple-500 text-white rounded-md hover:bg-violet-600"
          onClick={() => {
            // WE DONOT MUTATE STATE DIRECTLY
            // NEVER DO this.state = something
            this.setState({ count: 1 });
          }}
        >
          setCount
        </button>
      </div>
    );
  }
}

export default Profile;
