import { useEffect, useState } from "react";

export const useUsers = () => {
  const [dbuser, setDbuser] = useState([]);
  const [userloder, setUserloder] = useState(true);
  useEffect(() => {
    fetch("https://recycle-server.vercel.app/alluerts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDbuser(data.user);
        setUserloder(false);
      });
  }, []);
  return [dbuser, userloder];
};
