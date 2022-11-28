import { useQuery } from "@tanstack/react-query";
import Loder from "../../../Components/Loder/Loder";
import AllUserColl from "./AllUserColl";

const AllUserControl = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://recycle-server.vercel.app/alluerts", {
        headers: {
          authorization: `brr ${localStorage.getItem("token")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loder></Loder>;
  }

  return (
    <>
      {data.length === 0 ? (
        <>
          <div className="flex items-center justify-center h-screen space-x-2">
            <h1 className="text-5xl text-black font-bold">No data Available</h1>
          </div>
        </>
      ) : (
        <>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Produckt Img</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>delet</th>
                  <th>add</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((user) => (
                  <AllUserColl
                    key={user._id}
                    refetch={refetch}
                    user={user}
                  ></AllUserColl>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default AllUserControl;
