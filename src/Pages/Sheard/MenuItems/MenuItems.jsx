import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const MenuItems = ({ item }) => {
const { user } = useAuth();
const navigate = useNavigate();
const location = useLocation();
const { name, image, recipe, price, _id } = item;

const handleClick = (food) => {
  if (user && user.email) {
    if (user.email && food) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        recipe,
        image,
      };

      axios.post("http://localhost:3000/carts", cartItem)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        .catch((err) => {
          console.error("Error adding to cart:", err);
        });
    }
  } else {
    Swal.fire({
      title: "You are not logged in",
      text: "Please login to add items to your cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Login!"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login", { state: { from: location } });
      }
    });
  }
};

  return (
    <div className=" flex  grid-cols-3">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} />
        </figure>
        <p className="bg-black px-2 right-0 mr-4 mt-4 absolute text-white w-14">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title text-center justify-center">{name}</h2>
          <p className="text-center">{recipe}</p>

          <div
            onClick={() => handleClick(item)}
            className="card-actions justify-end"
          >
            <p className="btn btn-primary uppercase">Add a cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
