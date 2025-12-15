import { useEffect, useState } from "react";

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Time is flying away");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button className="count-btn" onClick={() => setCount(count + 5)}>
        Count button
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export default User;
