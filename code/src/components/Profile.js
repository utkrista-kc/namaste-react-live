import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  console.log("render function");
  useEffect(() => {
    // API Call
    // console.log("useEffect")
    // const timer = setInterval(() => {
    //   console.log("Namaste React OP");
    // }, 1000);
    return () => {
      // clearInterval(timer);
      console.log("useEffect return");
    };
  }, []);
  return (
    <div>
      <h1>Profile Component</h1>
      <h2>Name: {props.name} </h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(1)}>Count</button>
    </div>
  );
};

export default Profile;
