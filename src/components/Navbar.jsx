import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const Navbar = () => {
   const {user,logOut} = useContext(AuthContext)

   const logOutUser=()=>{
    logOut()
    .then(()=>{
        Swal.fire("User Remove successfully");
    })
    .then(error=>console.log(error))
   }
    
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h2>AZ. SPORTS</h2>
            </div>
            <ul className='flex gap-2'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/products'}>All Products</NavLink></li>
                <li><NavLink to={'/addproduct'}>Add Product</NavLink></li>
                {
                    user && <li><NavLink to={'/mylist'}>My Equipment</NavLink></li>
                }
                <li><NavLink to={'/register'}>Register</NavLink></li>
                {
                    user && <li><NavLink to={'/login'}>Login</NavLink></li>
                }
            </ul>
            <div className="dropdown dropdown-end">
                {
                    user ? 
                    <button className='btn btn-outline' onClick={logOutUser}>Logout</button> : 
                    <Link to={'/login'} className="btn btn-outline">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;