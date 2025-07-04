import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import loginLottie from '../../assets/login.json';
import Lottie from 'lottie-react';
import SocialLogin from '../Shared/SocialLogin';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { user,loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = e => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (!email || !password) {
    Swal.fire("Warning", "Please fill in all fields", "warning");
    return;
  }

  loginUser(email, password)
    .then(result => {
      Swal.fire("Success!", "Login Successful", "success");
      navigate(from, { replace: true });

      const loggedUser = { email: result.user.email }; 

      fetch("https://wander-nest-server.vercel.app/jwt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loggedUser),
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem("wander-token", data.token);
        });
    })
    .catch(error => {
      Swal.fire("Error!", error.message, "error");
    });
};


  return (
  <>
  <Helmet><title>Login - WanderNest</title></Helmet>
    <div className="hero min-h-screen my-4 md:my-20 bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-10">
        {/* Lottie Animation */}
        <div className="w-full max-w-md">
          <Lottie animationData={loginLottie} loop={true} />
        </div>

        {/* Login Card */}
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-4">Welcome Back 👋</h2>
            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="text-right">
                <a href="#" className="text-sm link link-hover">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary w-full">Login</button>
            </form>

            <div className="divider">OR</div>

            <SocialLogin />

            <p className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <Link to="/register" className="link link-primary" state={{ from: location.state?.from || { pathname: '/' } }}>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Login;
