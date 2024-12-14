import React from 'react';

const UpdateUser = () => {
     const handelUpdate = (event) => {
       event.preventDefault();
       const evTarget = event.target;
       const name = evTarget.name.value;
       const email = evTarget.email.value;
       const age = evTarget.age.value;
       const users = {
         name,
         email,
         age,
       };
       console.log(users);
     };
    return (
      <div>
        <h1 className="text-center mt-8 text-5xl ">Update User</h1>

        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">age</span>
                </label>
                <input
                  type="number"
                  placeholder="age"
                  name="age"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className=" btn btn-outline">submite</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateUser;