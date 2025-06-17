import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RegisterLottie from '../../assets/register.json';
import SocialLogin from '../Shared/SocialLogin';
import { AuthContext } from '../../Contex/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const photo = form.photo.value.trim();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Password must be at least 6 characters and contain 1 uppercase & 1 lowercase letter.'
      });
    }

    try {
      await createUser(email, password);

      await updateUserProfile({ displayName: name, photoURL: photo });


      await Swal.fire({
        icon: 'success',
        title: 'Registered Successfully!',
        text: `Welcome, ${name}!`
      });

      form.reset();
      navigate(from, { replace: true });
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.message
      });
    }
  };

  return (
   <>
   <Helmet><title>Register - WanderNest</title></Helmet>
    <div className="hero min-h-screen my-4 lg:my-20 bg-base-200 text-base-content pt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Animation Side */}
          <div className="hidden lg:block">
            <Lottie animationData={RegisterLottie} loop={true} />
          </div>

          {/* Form Side */}
          <div className="bg-base-100 shadow-xl p-8 rounded-xl w-full">
            <h2 className="text-3xl font-bold text-center mb-2">Register</h2>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">Create your WanderNest account</p>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" required placeholder="Full Name" className="input input-bordered w-full"/>
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" required placeholder="Email Address" className="input input-bordered w-full" />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="At least 6 chars with uppercase & lowercase"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Paste your photo URL" className="input input-bordered w-full" />
              </div>

              <div className="text-sm text-right">
                <a href="#" className="link link-hover">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary w-full">Register</button>
            </form>

            <div className="divider">OR</div>
            <SocialLogin />

            <p className="text-sm text-center mt-4">
              Already have an account?
              <Link to="/login" className="link link-primary ml-1">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Register;
