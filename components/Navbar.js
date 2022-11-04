import { BsFillMoonStarsFill } from "react-icons/bs";
const Navbar = (props) => {
  return (
    <nav className="py-10 flex justify-between dark:text-white">
      <h1 className="text-xl font-burtons">Abhay Sharma</h1>
      <ul className="flex items-center gap-8">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl" onClick={() => props.toggleTheme(!props.currentTheme)} />
        </li>
        <li>
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
