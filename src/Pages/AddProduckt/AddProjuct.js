import moment from "moment/moment";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";

const AddProjuct = () => {
  const { user } = useContext(AuthContext);
  const [loding, setLoding] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handalPostFrom = (data) => {
    setLoding(true);
    const imgdata = new FormData();
    imgdata.append("image", data.userImg[0]);
    console.log(imgdata);
    const url = `https://api.imgbb.com/1/upload?&key=${process.env.REACT_APP_Imgbb}`;
    fetch(url, {
      method: "POST",
      body: imgdata,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        const postinfo = {
          title: data.title,
          price: data.price,
          location: data.location,
          resalesPrice: data.reselPrice,
          usedtime: data.oldtime,
          phon: data.phon,
          discription: data.discription,
          codition: data.codition,
          img: imgdata.data.display_url,
          catagory: data.catagory,
          posttime: moment().format("MMMM Do YYYY, h:mm:ss a"),
          salarname: user?.displayName,
          selaremail: user?.email,
          salarsimg: user?.photoURL,
        };
        const allcatagory = {
          catagory: data.catagory,
        };
        fetch("http://localhost:5000/produckt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(postinfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setLoding(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoding(false);
      });
  };
  return (
    <div>
      <div className="w-1/3 mx-auto">
        <p className="text-5xl font-bold mb-10">Add your produckt</p>
        <form onSubmit={handleSubmit(handalPostFrom)}>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Name of your product
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              {...register("title", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Price
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              {...register("price", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Resales Price
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              {...register("reselPrice", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your Location
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              {...register("location", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>

          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              years of used
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              {...register("oldtime", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your Phon Number
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              {...register("phon", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>

          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Conition
            </label>

            <select
              id="countries"
              {...register("codition")}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="good">Good</option>
              <option value="Mediam">Mediam</option>
              <option value="Old">Old</option>
            </select>
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Select an Catagory
            </label>
            <select
              id="countries"
              {...register("catagory")}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="Foreign Language Books">
                Foreign Language Books
              </option>
              <option value="Political">Political</option>
              <option value=" Motivational and Meditation">
                Motivational and Meditation
              </option>
            </select>
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Product Image
            </label>
            <input
              type="file"
              placeholder="Enter your Password"
              {...register("userImg", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
          </div>
          <div className="mt-10">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Your message
            </label>
            <textarea
              rows="4"
              {...register("discription", { required: true })}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white text-3xl  w-full mt-5 bg-gray-800 hover:bg-gray-700  font-medium rounded-full text-sm px-5 py-2 text-center  "
          >
            {loding ? "Loding..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProjuct;
