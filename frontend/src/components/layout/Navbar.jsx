import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="flex flex-row gap-3 text-lg underline">
      <Link to="/">home</Link>

      {!loggedIn && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </>
      )}

      {loggedIn && <Link to="/customers">Customers</Link>}
    </div>
  );
};

export default Navbar;
