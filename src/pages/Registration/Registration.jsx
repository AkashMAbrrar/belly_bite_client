import React, { useContext } from "react";
import loginImg from "../../assets/others/authentication2.png";
import loginBg from "../../assets/others/authentication.png";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { authContext } from "../../provider/AuthProvider";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(authContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.table({ loggedUser });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Belly BiteB | Registration Form</title>
      </Helmet>
      <div
        className="hero bg-base-200 min-h-screen "
        style={{
          backgroundImage: `url(${loginBg})`,
        }}>
        <div className="hero-content flex ">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card  md:w-1/2 max-w-sm shrink-0 rounded-none ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Email field */}
              <div className="form-control">
                <h1 className="text-5xl font-bold text-center">
                  Register now!
                </h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered rounded"
                  required
                />
                {errors.email && (
                  <span className="text-red-700">Email is required</span>
                )}
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered rounded"
                />
                {errors.name && (
                  <span className="text-red-700">Name is required</span>
                )}
              </div>
              {/* password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,12}$/,
                  })}
                  placeholder="password"
                  className="input input-bordered rounded"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password Is Required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    Password must be 6 character Required
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password shouldn't be longer than 12 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Use A special symbol and at least one uppercase and a
                    lowercase
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-info"
                  type="submit"
                  value="registration"
                />
              </div>
              <label className="label">
                <Link to="/login" className=" link-hover text-blue-700">
                  Already Have An Account? Login
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
