import React from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-CA ON Consultator`;
  }, [title]);
};

export default useTitle;
