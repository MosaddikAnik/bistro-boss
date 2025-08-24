import React, { useContext } from "react";
import "../Login/login.css";
import img from "../../assets/others/authentication.png";
import img2 from "../../assets/others/authentication2.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
  const { createUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          title: "Success!",
          text: "Your account has been created successfully 🎉",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error(error);

        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="login hero bg-base-200 min-h-screen">
      <img src={img} alt="" className="shadow-black" />
      <div className="flex w-full">
        <div>
          <img src={img2} alt="" />
        </div>
        <div className="hero-content -mt-14 w-[500px] h-[486px] flex-col">
          <div className="text-center w-full lg:text-left">
            <h1 className="text-3xl font-bold text-center">SignIn now!</h1>
          </div>
          <form
            onSubmit={handleLogin}
            className="card bg-base-100 w-full shadow-2xl"
          >
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Name"
                  required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <input
                  type="submit"
                  className="btn btn-neutral w-80 items-center mt-4"
                  value="Sign in"
                />
              </fieldset>
            </div>
            <div className="mx-12 mb-4 text-xl">
              <h3>
                Goto{" "}
                <span className="text-blue-800">
                  <Link to="/login">Login</Link>
                </span>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
