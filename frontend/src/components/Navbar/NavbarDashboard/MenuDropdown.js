/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { NavbarContext } from "../../../contexts/NavbarContext";

const MobileMenuDropdown = ({ isBar, isMenuOpen }) => {
  const { changeItems, openDropDown, changeOpenDropdown } =
    useContext(NavbarContext);

  return (
    openDropDown &&
    isMenuOpen && (
      <div className="absolute w-full z-10 bg-white mt-2 border-t-2  py-2 shadow-md rounded-b-lg">
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
              changeItems("JanjiTemu");
              changeOpenDropdown(!openDropDown);
            }}
            className="block py-2 hover:text-blue-400"
          >
            Janji Temu
          </button>

          <a href="/" className="block py-2 hover:text-blue-400">
            Partner Obat Keluarga
          </a>
          <a href="/tentang-kami" className="block  py-2  hover:text-blue-400">
            Tentang Kami
          </a>
        </div>
      </div>
    )
  );
};
export default MobileMenuDropdown;
