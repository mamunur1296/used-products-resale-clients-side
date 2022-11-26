import { useQuery } from "@tanstack/react-query";
import AllUserColl from "./AllUserColl";

const AllUserControl = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/alluerts", {
        headers: {
          authorization: `brr ${localStorage.getItem("token")}`,
        },
      });
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <p>Loding ....</p>;
  }

  return (
    <div>
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
    </div>
  );
};

export default AllUserControl;
