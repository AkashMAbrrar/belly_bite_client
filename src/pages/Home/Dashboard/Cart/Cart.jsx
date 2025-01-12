import React from "react";
import useCart from "../../../../hooks/useCart";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { MdAddTask, MdDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="mb-6">
        <SectionTitle
          subHeading={"From 10.00 am to 5.00 am"}
          heading={"Order Online"}></SectionTitle>
      </div>

      <div className="rounded-2xl bg-[#e3b96a] flex justify-evenly items-center gap-10">
        <h2 className="text-3xl font-semibold ">Total Items: {cart.length}</h2>
        <h2 className="text-3xl font-semibold ">Total Price $: {totalPrice}</h2>
        <div className="flex justify-end items-end">
          {cart.length ? (
            <Link to="/dashboard/payment">
              <button className="btn btn-accent">Pay Now</button>
            </Link>
          ) : (
            <button disabled className="btn btn-accent">
              Pay Now
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto   mt-14 rounded-2xl">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#e3b96a]  text-black font-semibold">
            <tr>
              <th>no:</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <th>
                  <p>$:{item.price}</p>
                </th>
                <td>
                  <button className="btn bg-black btn-xs btn-outline text-white font-bold text-2xl">
                    <MdAddTask />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-xs btn-outline text-red-500 font-bold text-2xl">
                    <MdDeleteSweep />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
