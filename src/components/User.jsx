import { useEffect, useState } from "react";
import Button from "./Button";
const User = ({ count }) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://dummyjson.com/users/${count || 1}`);
      const result = await response.json();
      setUserData([result]);
      //console.log(result);
    };
    fetchUser();
  }, [count]);
  return (
    <div>
      {userData.map((user) => (
        <h2 key={user.id}>
          {user.firstName} {user.lastName}
        </h2>
      ))}
    </div>
  );
};

export default User;
