import React from "react";

/* type Prop = {
    setShowFilter: (filter: boolean) => void;
} */

const Filter = () => {
  return (
    <div className="h-fit absolute text-sm">
      <form className="flex flex-col gap-2 w-full bg-white py-5 px-6 shadow-xl rounded-lg">
        <div className="flex flex-col gap-1">
          <label htmlFor="organization">Organization</label>
          <input
            name="organization"
            id="organization"
            placeholder="Org"
            className="bg-white border rounded-md p-1"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="User"
            className="bg-white border rounded-md p-1"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="bg-white border rounded-md p-1"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date"
            className="bg-white border rounded-md p-1"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            name="number"
            id="number"
            placeholder="Phone Number"
            className="bg-white border rounded-md p-1"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="status">Status</label>
          <input
            name="status"
            id="status"
            placeholder="Status"
            className="bg-white border rounded-md p-1"
          />
        </div>

        <div className="flex justify-around my-2">
          <button className="border border-gray-300 py-1 px-4 bg-white rounded-lg">Reset</button>

          <button className="border border-none text-white py-1 px-4 bg-blue-400 rounded-lg">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
