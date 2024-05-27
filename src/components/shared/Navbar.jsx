import { useContext } from 'react';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../provider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import userDefaultPic from '../../assets/user-2.png'


const Navbar = () => {

 const { user, logOut } = useContext(AuthContext);

 const handleSignOut = () => {
     logOut()
         .then()
         .catch()
 }

 const navLinks = <>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/recipes">Recipes</NavLink></li>
     <li><NavLink to="/add-recipe">Add Recipes</NavLink></li>
     <li><NavLink to="/coins">Coins</NavLink></li>
     <li><NavLink to="/login">Login</NavLink></li>
 </>

  return (

    <div className="navbar bg-base-100">
      <div className="flex-1">
           <img className='h-16 w-16 rounded-lg' src={logo} alt="" />
           <a className="btn btn-ghost text-3xl font-bold font-serif text-red-400">Recipes</a>
        </div>
    <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks}
            </ul>
        </div>

    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navLinks}
        </ul>
    </div>
    <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">


              {
                user&& 
                <img src={user.photoURL} alt="" />
                
              }
                <img src={userDefaultPic} />
            </div>
        </label>
        {
            user ?
                <button onClick={handleSignOut} className="btn">Sign Out</button>
                :
                <Link to="/login">
                    <button className="btn">Login</button>
                </Link>
        }

    </div>
</div>









    // <div>
    //   <div className="navbar bg-base-100">
    //     <div className="flex-1">
    //         <img className='h-16 w-16 rounded-lg' src={logo} alt="" />
    //       <a className="btn btn-ghost text-3xl font-bold font-serif text-red-400">Recipes</a>
    //     </div>
    //     <div className="flex-none gap-2">
    //       <div className="form-control">
    //         <input
    //           type="text"
    //           placeholder="Search"
    //           className="input input-bordered w-24 md:w-auto"
    //         />
    //       </div>
    //       <div className="dropdown dropdown-end">
    //         <div
    //           tabIndex={0}
    //           role="button"
    //           className="btn btn-ghost btn-circle avatar"
    //         >
    //           <div className="w-10 rounded-full">
    //             <img
    //               alt="Tailwind CSS Navbar component"
    //               src={userDefaultPic}
    //             />
    //           </div>
    //         </div>
    //         <ul
    //           tabIndex={0}
    //           className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
    //         >
    //           <li>
    //             <a className="justify-between">
    //               Profile
    //               <span className="badge">New</span>
    //             </a>
    //           </li>
    //           {
    //             user ? 
    //                <button className='btn'>Sign Out</button>
                         
    //             :
    //             <Link to="/login">
    //             <button className='btn'>Login</button>
    //           </Link>
    //           }
            
    //           <li>
    //             <a>Logout</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
