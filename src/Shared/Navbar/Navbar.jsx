import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.jpg"

const NavBar = () => {

  const {user,logOut,setUser } = useAuth();



  const handleLogOut = () => {
    logOut()
    .then(result => {
      console.log(result.user)
      setUser(null)
    })
    .catch((error) => {
      console.log(error);
    });
  }



  const navLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
     
      
    
     
     <Link to="/dashboard/cart">
          <button className="btn btn-ghost">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            {/* <div className="badge badge-secondary">+{cart.length}</div> */}
          </button>
        </Link>
    
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 container bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">
            <img className="h-8" src={logo} alt="" />
            Fast Speed</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>






        <div>
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="w-full h-full rounded-full cursor-pointer"
                  >
                    <div className="w-10 rounded-full flex justify-center items-center">
                      {/* <FaUserAlt className="bg-white text-orange-500 w-8 h-8 rounded-full"> </FaUserAlt> */}
                      {user ? (
              <div className="mask h-12 w-12 mask-circle">
                <img src={user.photoURL} />
              </div> ): ( <FaUserAlt className="bg-white text-orange-500 w-8 h-8 rounded-full"> </FaUserAlt>
            )}

                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-500 rounded-box w-52"
                  >
                    <li className="text-white text-center bg-red-500 p-3 rounded-lg mb-3">
                      {user.displayName}
                    </li>
                    <li className="text-white mb-3">
                      <Link to={`/dashboard`} className="justify-between">
                     Dashboard
                      </Link>
                    </li>
                

                    <li className="text-white mb-3">
                      <button onClick={handleLogOut}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <li className="text-white mb-3 list-none btn btn-primary">
                  <Link to="/login">Login</Link>
                </li>
              )}
            </div>
       
      </div>
    </div>
  );
};

export default NavBar;
