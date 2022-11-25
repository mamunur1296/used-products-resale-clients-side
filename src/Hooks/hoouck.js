import { useEffect, useState } from "react";

export const useUsers = () => {
  const [dbuser, setDbuser] = useState([]);
  const [userloder, setUserloder] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/alluerts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDbuser(data.user);
        setUserloder(false);
      });
  }, []);
  return [dbuser, userloder];
};
