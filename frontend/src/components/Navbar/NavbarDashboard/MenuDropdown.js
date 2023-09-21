/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { NavbarContext } from "../../../contexts/Navbar";

const MobileMenuDropdown = ({ isBar, isMenuOpen }) => {
  const { changeItems, openDropDown, changeOpenDropdown } =
    useContext(NavbarContext);

  return (
    openDropDown &&
    isMenuOpen && (
      <div className="absolute w-full bg-white mt-2 border-t-2  py-2 shadow-md rounded-b-lg">
        <div className="px-4">
          <button
            onClick={() => {
              changeItems("Profile");
              changeOpenDropdown(!openDropDown);
            }}
            className="block py-2 hover:text-blue-400"
          >
            Profile
          </button>
          <button
            onClick={() => {
              changeItems("janjiTemu");
              changeOpenDropdown(!openDropDown);
            }}
            className="block py-2 hover:text-blue-400"
          >
            Janji Temu
          </button>
          <button
            onClick={() => {
              changeItems("janjiTemu");
              changeOpenDropdown(!openDropDown);
            }}
            className="block py-2 hover:text-blue-400"
          >
            Layanan
          </button>
          <button
            onClick={() => {
              changeItems("janjiTemu");
              changeOpenDropdown(!openDropDown);
            }}
            className="block py-2 hover:text-blue-400"
          >
            Partner
          </button>
          <button
            onClick={() => {
              changeItems("janjiTemu");
              changeOpenDropdown(!openDropDown);
            }}
            className="block py-2 hover:text-blue-400"
          >
            Tentang Kami
          </button>
        </div>
      </div>
    )
  );
};
export default MobileMenuDropdown;