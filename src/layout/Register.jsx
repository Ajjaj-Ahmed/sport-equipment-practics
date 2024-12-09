import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate, useNavigation } from 'react-router-dom';

const Register = () => {
    const {signUpUser,user} = useContext(AuthContext);
    const navigate = useNavigate()
    

    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name = form.name.value;
        const email =form.email.value;
        const password = form.password.value;
        const photo = form.password.value;
        console.log({name,email,password,photo})

        signUpUser(email,password)
        .then(result=>{
            console.log(result.user)
            navigate('/')
        })
        .catch(error=>console.log(error.message))
    }
    console.log('user come from auth:',user?.email
    )
    return (
        <div>
             <div className='py-5'>
            <Navbar></Navbar>
            </div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                       
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='URL' placeholder="Photo URL" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;