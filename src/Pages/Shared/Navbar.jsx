import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBusAlt } from "react-icons/fa";
import { AuthContext } from "../../Contex/AuthProvider";
import ThemeToggle from "../Shared/ThemeToggle";
import { useThemeToggle } from "../../Contex/ThemeContext";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import NavItem from "../Shared/NavItem";
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme } = useThemeToggle();
  const [isOpen, setIsOpen] = useState(false);
  console.log(user)

  const handleLogout = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You want to logout!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, logout',
  }).then((result) => {
    if (result.isConfirmed) {
      logOut()
        .then(() => {
          setIsOpen(false);
          Swal.fire(
            'Logged Out!',
            'You have been logged out successfully.',
            'success'
          );
        })
        .catch((error) => {
          console.error(error);
          Swal.fire(
            'Oops!',
            'Something went wrong during logout.',
            'error'
          );
        });
    }
  });
};

  const navClass = `shadow sticky top-0 z-50 ${
    theme === "dark" ? "bg-[#0f172a] text-white" : "bg-white text-gray-800"
  }`;

  const dropdownBg =
    theme === "dark"
      ? "bg-[#1e293b] text-white"
      : "bg-white text-gray-900";
  const hoverBg =
    theme === "dark" ? "hover:bg-gray-700" : "hover:bg-blue-100";

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          <FaBusAlt />
          WanderNest
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li><NavItem to="/" label="Home" /></li>
          <li><NavItem to="/packages" label="All Packages" /></li>
          <li><NavItem to="/about" label="About Us" /></li>
          {user && 
          <li><NavItem to="/my-bookings" label="My Bookings" /></li>
          }

          {!user ? (
            <li>
              <NavItem to="/login" label="Login" />
            </li>
          ) : (
            <li className="relative">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <img
                    src={user.photoURL || "/default.png"}
                    className="w-10 h-10 rounded-full border-2 border-blue-600 dark:border-blue-400"
                    alt="profile"
                    title={user.displayName || "User"}
                  />
                </div>
                <ul
                  tabIndex={0}
                  className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 ${dropdownBg}`}
                >
                  <li>
                    <NavItem to="/add-package" label="Add Package" />
                  </li>
                  <li>
                    <NavItem to="/manage-packages" label="Manage My Packages" />
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className={`w-full text-left px-4 py-2 ${hoverBg} rounded`}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          )}

          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`md:hidden px-6 pb-4 space-y-2 font-medium ${
            theme === "dark"
              ? "bg-[#0f172a] text-white"
              : "bg-white text-gray-800"
          }`}
        >
          <li>
            <NavItem to="/" label="Home" onClick={() => setIsOpen(false)} />
          </li>
          <li>
            <NavItem
              to="/packages"
              label="All Packages"
              onClick={() => setIsOpen(false)}
            />
          </li>
          <li>
            <NavItem
              to="/about"
              label="About Us"
              onClick={() => setIsOpen(false)}
            />
          </li>
          {user && (
            <li>
              <NavItem
                to="/my-bookings"
                label="My Bookings"
                onClick={() => setIsOpen(false)}
              />
            </li>
          )}

          {!user ? (
            <li>
              <NavItem
                to="/login"
                label="Login"
                onClick={() => setIsOpen(false)}
              />
            </li>
          ) : (
            <>
              <li>
                <NavItem
                  to="/add-package"
                  label="Add Package"
                  onClick={() => setIsOpen(false)}
                />
              </li>
              <li>
                <NavItem
                  to="/manage-packages"
                  label="Manage My Packages"
                  onClick={() => setIsOpen(false)}
                />
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
