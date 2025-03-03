import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogoutMutation } from "../redux/apis/userApiSlice";
import { logOut } from "../redux/features/auth/authslice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const [logout] = useLogoutMutation();

  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await logout().unwrap();
      dispatch(logOut(response));
      toast.success("Logout successful");
    } catch (error) {
      toast.error(error?.data?.message || "Logout failed");
      console.error(error);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-serif tracking-tight text-gray-900">
              SPECTRUM
            </span>
            <span className="ml-1 text-xs uppercase tracking-widest text-gray-500 mt-1">
              Hotel
            </span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/rooms"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Rooms
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA and Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="text-gray-600 hover:text-gray-900">
              <Search size={20} />
            </Link>

            {userInfo ? (
              <div className="flex space-x-2">
                <Link
                  to="/booking"
                  className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors rounded-sm"
                >
                  Book Now
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-800 text-white px-4 py-2 text-sm font-medium hover:bg-red-600 transition-colors rounded-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="border border-black px-5 py-1 text-sm font-medium text-black hover:bg-black hover:text-white transition-colors rounded-sm"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors rounded-sm"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/rooms"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Rooms
            </Link>
            <Link
              to="/amenities"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Amenities
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Contact
            </Link>
            <div className="mt-4 flex justify-between items-center px-3">
              {userInfo ? (
                <div className="flex space-x-2">
                  <Link
                    to="/booking"
                    className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors rounded-sm"
                  >
                    Book Now
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 text-sm font-medium hover:bg-red-600 transition-colors rounded-sm"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
