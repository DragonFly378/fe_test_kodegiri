import { NavLink } from "react-router";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <nav className="bg-white shadow-md p-4 rounded-lg">
          <ul className="flex flex-col space-y-2">
            <li>
              <NavLink
                to="/"
                className="block px-4 py-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/soalsatudua"
                className="block px-4 py-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-200"
              >
                Soal 1 - 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/soaltigaenam"
                className="block px-4 py-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-200"
              >
                Soal 3 - 6
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/soaltujuh"
                className="block px-4 py-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-200"
              >
                Soal 7
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/soaldelapan"
                className="block px-4 py-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-200"
              >
                Soal 8
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                to="/soalsembilan"
                className="block px-4 py-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-200"
              >
                Soal 9
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Home;
