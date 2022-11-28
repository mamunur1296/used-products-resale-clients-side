import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState();
  const [isAdminLoding, setIsAdminLoding] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://recycle-server.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
          setIsAdminLoding(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoding];
};
export default useAdmin;
