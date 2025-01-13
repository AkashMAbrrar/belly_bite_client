import React from "react";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaRegCreditCard, FaTruckMoving, FaUsers } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(stats);

  return (
    <div className="mt-2">
      <h2 className="text-3xl flex flex-wrap justify-center items-center">
        <span className="mr-2">Hi, Welcome</span>
        <p className="bg-green-400 p-4 rounded-t-badge font-bold">
          {user?.displayName ? user.displayName : "Back"}
          ...
        </p>
      </h2>

      <div className="stats shadow mt-6 w-full gap-4 flex sm:flex-wrap lg:flex-nowrap">
        {/* revenue */}
        <div className="stat  bg-gradient-to-tr  from-purple-600">
          <div className="stat-figure  text-3xl text-slate font-bold">
            <FaRegCreditCard />
          </div>
          <div className="stat-title text-center font-semibold">Revenue</div>
          <div className="stat-value">$: {stats?.revenue}</div>
          {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
        </div>
        {/* users */}
        <div className="stat bg-gradient-to-tr from-[#D3A256] ">
          <div className="stat-figure text-3xl text-slate font-bold">
            <FaUsers></FaUsers>
          </div>
          <div className="stat-title text-center font-semibold">Users</div>
          <div className="stat-value">{stats?.users}</div>
          {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
        </div>
        {/* products */}
        <div className="stat bg-gradient-to-tr from-blue-500 font-semibold">
          <div className="stat-figure  text-3xl text-slate">
            <SiCodechef />
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats?.menuItems}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        {/* orders */}
        <div className="stat bg-gradient-to-tr from-red-500 font-semibold">
          <div className="stat-figure text-slate text-3xl">
            <FaTruckMoving />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
