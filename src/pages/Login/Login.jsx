import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";
import loginBg from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { authContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const { signInUser } = useContext(authContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.table(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => {
        console.log(error.message);
      });
  };

  const handleValidCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Belly BiteB | Login Form</title>
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
            <form onSubmit={handleLogin} className="card-body">
              {/* Email field */}
              <div className="form-control">
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered rounded"
                  required
                />
              </div>
              {/* password field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered rounded"
                  required
                />
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="Enter the captcha code"
                  className="input input-bordered rounded"
                  required
                />
                <button
                  onClick={handleValidCaptcha}
                  className="btn btn-outline btn-info btn-xs mt-2">
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-info"
                  disabled={disable}
                  type="submit"
                  value="Login"
                />
              </div>
              <label className="label">
                <Link to="/register" className=" link-hover text-blue-700">
                  I don't have an account. Register...
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <span className="text-black font-semibold text-sm mt-3 border-2 border-green-600 px-3 cursor-pointer rounded-xl hover:scale-105 duration-100 py-2 w-4/12">
Check Captcha
</span> */
}

export default Login;
