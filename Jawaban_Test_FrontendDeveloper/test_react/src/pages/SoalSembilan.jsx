import { useState, useEffect } from "react";

const SoalSembilan = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (form.username && form.password) {
      localStorage.setItem("username", form.username);
      localStorage.setItem("password", form.password);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-lg w-96">
        {!isLoggedIn ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                className="w-full p-2 border border-gray-300 rounded mt-2"
                value={form.username}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded mt-2"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full p-2 bg-blue-500 text-white rounded mt-4"
            >
              Login
            </button>
          </>
        ) : (
          <>
            <div className="text-lg text-gray-700 mb-4">
              Selamat datang, {form.username}!
            </div>
            <button
              onClick={handleLogout}
              className="w-full p-2 bg-red-500 text-white rounded mt-4"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default SoalSembilan;
