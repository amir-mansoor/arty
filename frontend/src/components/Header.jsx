import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="container-sm flex space-between mt-2">
      <h1 className="logo">Arty</h1>

      {!userInfo ? (
        <div className="mx-2">
          <Link to="/register">Register</Link>
          <Link className="ml-2" to="/login">
            Login
          </Link>
        </div>
      ) : (
        <img
          className="header-profile"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.2i5UaEHaQM3PYAYXQyM1AAAAAA%26pid%3DApi&f=1&ipt=e7c0b28d924791bddaa4cb3471355c916942a268d2160c8f39d726a08989721b&ipo=images"
        />
      )}
    </div>
  );
};

export default Header;
