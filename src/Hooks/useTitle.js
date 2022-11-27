import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Recycle Book`;
  }, [title]);
};

export default useTitle;
