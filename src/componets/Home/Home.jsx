import { useEffect, useState } from "react";

function Home() {
  const [forntUsers, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  //console.log(forntUsers);

  return (
    <>
      <h1 className="text-5xl text-center my-24">
        api facth by express : {forntUsers.length}{" "}
      </h1>
      <div className=" container mx-auto">
        <div className="grid grid-cols-3 gap-2">
          {forntUsers.map((user) => (
            <div className="card bg-primary text-primary-content basis-3 ">
              <div className="card-body">
                <li>id:{user._id} </li>
                <li>name:{user.name} </li>
                <li>email:{user.email} </li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
