import { useEffect, useState } from "react";
//import Button from "./Button";
import Table from "./Table";
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
  return <Table person={userData}/>;
};

export default User;
