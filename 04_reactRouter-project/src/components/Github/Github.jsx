import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/RajkrRabidas")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setdata(data);
//       });
//   }, []);

  return (
    <div className=" mx-20 text-orange-700 p-4">
      <h1 className="text-center text-3xl text-orange-700 p-4">
        User Name : {data.name}
      </h1>
      <div className="flex justify-around">
        <img src={data.avatar_url} alt="" width={200} />
        <div className="p-8 text-zinc-800">
          <h3 className="text-md font-medium">
            Follower : {data.followers}{" "}
            <span className="ml-3">Following : {data.following}</span>
          </h3>
          <p className="mt-2 text-md font-medium">Bio : {data.bio}</p>
          <h3 className="mt-2 text-md font-medium">Localtion : {data.location}</h3>
          <h2 className="mt-2 text-md font-medium">Repo : {data.public_repos}</h2>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/RajkrRabidas')
    return res.json()
}
