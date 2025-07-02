import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { AuthContext } from "../../Contex/AuthProvider";
import { useThemeToggle } from "../../Contex/ThemeContext";
import Swal from 'sweetalert2';
import ThemeToggle from "../Shared/ThemeToggle";
import axios from "axios";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme } = useThemeToggle();
  const [isOpen, setIsOpen] = useState(false);

  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-base-100/50 backdrop-blur-md shadow-sm`;

  const dropdownBg =
    theme === "dark" ? "bg-[#1e293b] text-white" : "bg-white text-gray-900";
  const hoverBg = theme === "dark" ? "hover:bg-gray-700" : "hover:bg-blue-100";

  const handleLogout = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await logOut();
          const res = await axios.post(
            'https://wander-nest-server.vercel.app/logout',
            {},
            { withCredentials: true }
          );
          if (res.data.success) {
            setIsOpen(false);
            localStorage.removeItem("wander-token");
            await Swal.fire('Logged Out!', 'You have been logged out successfully.', 'success');
          }
        } catch (error) {
          console.error('Logout failed', error);
          Swal.fire('Oops!', 'Something went wrong during logout.', 'error');
        }
      }
    });
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/packages", label: "All Packages" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-primary"
        >
          <img
            src="https://i.ibb.co/RG51Tmxt/wendar-removebg-preview.png"
            alt="logo"
            className="w-40 md:w-24 lg:w-52 h-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className={`hidden md:flex items-center gap-6 font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>


          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition duration-200 ${isActive
                    ? "font-semibold text-blue-400"
                    : "hover:text-blue-600 dark:hover:text-blue-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {user && (
            <li>
              <NavLink
                to="/my-bookings"
                className={({ isActive }) =>
                  `transition duration-200 ${isActive
                    ? "font-semibold text-blue-400"
                    : "hover:text-blue-600 dark:hover:text-blue-400"
                  }`
                }
              >
                My Bookings
              </NavLink>
            </li>
          )}
          {!user ? (
            <li className="btn btn-primary">
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <li className="relative">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <img
                    src={user.photoURL || "https://i.ibb.co/k6X7nJrF/e87ab0a15b2b65662020e614f7e05ef1.jpg"}
                    className="w-10 h-10 rounded-full border-2 border-blue-600 dark:border-blue-400"
                    alt="profile"
                    title={user.displayName || "User"}
                  />
                </div>
                <ul className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${dropdownBg}`}>
                  <li><NavLink to="/add-package">Add Package</NavLink></li>
                  <li><NavLink to="/manage-packages">Manage My Packages</NavLink></li>
                  <li>
                    <button onClick={handleLogout} className={`w-full text-left px-4 py-2 ${hoverBg} rounded`}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          )}
          <li><ThemeToggle /></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`md:hidden px-6 py-4 space-y-2 font-medium ${theme === "dark" ? "bg-base-200 text-white" : "bg-white text-black"
            }`}
        >
          {links.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition duration-200 ${isActive
                    ? "font-semibold text-blue-400"
                    : "hover:text-blue-600 dark:hover:text-blue-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          {user && (
            <li>
              <NavLink
                to="/my-bookings"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition duration-200 ${isActive
                    ? "font-semibold text-blue-400"
                    : "hover:text-blue-600 dark:hover:text-blue-400"
                  }`
                }
              >
                My Bookings
              </NavLink>
            </li>
          )}
          {!user ? (
            <Link
              to="/login"
              className="btn  btn-primary flex justify-center items-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          ) : (
            <>
              <li>
                <NavLink to="/add-package" onClick={() => setIsOpen(false)}>
                  Add Package
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage-packages" onClick={() => setIsOpen(false)}>
                  Manage My Packages
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>

      )}
    </nav>
  );
};

export default Navbar;
