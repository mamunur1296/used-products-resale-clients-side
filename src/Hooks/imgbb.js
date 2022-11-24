export const useImgbb = (image) => {
  if (image) {
    const url = `https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_Imgbb}`;
    fetch(url, {
      method: "POST",
      body: image,
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }
};
