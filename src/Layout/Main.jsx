
import { Outlet } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import NavBar from '../Shared/Navbar/Navbar';



const Main = () => {
  //   const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  // if (loading) {
  //   return (
  //     <div className="h-screen w-full flex justify-center items-center">
  //       <span className="loading loading-spinner loading-lg"></span>
  //     </div>
  //   );
  // }
    return (
        <div>
           
            <NavBar></NavBar>
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default Main;