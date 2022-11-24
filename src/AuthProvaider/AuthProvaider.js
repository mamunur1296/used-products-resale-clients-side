import React, { createContext, useState } from "react";
export const AuthContext = createContext();
const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [loder, setLoder] = useState(true);

  const allInfo = {
    user,
    dbUser,
    loder,
    setDbUser,
    setLoder,
  };
  return (
    <div>
      <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvaider;
