import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../contexts/UserAuthentication";
import { useContext } from "react";

const LoginButton = ({ changeClassName }) => {
  const { accestoken } = useContext(AuthContext);
  return (
    <a href="/login">
      <button
        className={`${changeClassName} mx-2 h-10 bg-gray-200 text-gray-600 py-2 px-4 rounded-[25px] hover:bg-blue-300`}
      >
        <FontAwesomeIcon icon={faUser} className="text-gray-600 mr-2" />
        <span>{accestoken ? "Beranda" : "Login"}</span>
      </button>
    </a>
  );
};

export default LoginButton;
