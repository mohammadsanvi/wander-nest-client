import React, { useContext } from 'react';
import { AuthContext } from '../../Contex/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Success", "Logged in with Google", "success");
        navigate(from, { replace: true });
      })
      .catch(err => {
        Swal.fire("Error", err.message, "error");
      });
  };

  return (
    <button onClick={handleGoogleLogin} className="btn btn-outline w-full flex items-center gap-2">
      <FcGoogle className="text-xl" />
      Continue with Google
    </button>
  );
};

export default SocialLogin;
