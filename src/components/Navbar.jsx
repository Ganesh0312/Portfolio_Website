// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="  mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          {/* <img className=" mx-2 w-10 " src="GB" alt="logo" /> */}
          <h1 className=" mx-2 w-10 text-5xl">GB</h1>
        </div>
        <div className="mb-6 flex items-center justify-center gap-4 text-2xl  ">
          <a
            href="https://www.linkedin.com/in/ganesh-bobade-627b1722a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />{" "}
          </a>
          <a
            href="https://github.com/Ganesh0312?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <FaInstagram />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
