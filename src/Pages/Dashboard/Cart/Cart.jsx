import React from "react";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "./../../Sheard/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const Cart = () => {
  // Get cart items and refetch function from hook
  const [cart = [], refetch] = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Handle deletion of a cart item
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this item from cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const remainingCart = cart.filter((item) => item._id !== id);
        refetch(remainingCart);

        axios
          .delete(`http://localhost:3000/carts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Item has been removed.", "success");
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error!", "Something went wrong.", "error");
            refetch();
          });
      }
    });
  };

  return (
    <div className="p-4">
      <SectionTitle heading={"---My Cart---"} subHeading={"WANNA ADD MORE?"} />

      {/* Summary */}
      <div className="flex justify-between items-center gap-10 mb-6">
        <h2 className="text-2xl font-semibold">Total Items: {cart.length}</h2>
        <h2 className="text-2xl font-semibold">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
        <button className="btn btn-primary btn-sm" disabled={cart.length === 0}>
          Pay
        </button>
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-amber-600 text-white">
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error btn-sm text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  Your cart is empty 🛒
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
