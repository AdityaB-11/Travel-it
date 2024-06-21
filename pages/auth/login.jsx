import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Router from 'next/router';
import { login_me } from '/Services/auth';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUserData } from '/Utils/UserSlice';
import NavBar from '/components/NavBar';


export default function Login() {
  const dispatch = useDispatch()


  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (!formData.email) {
      setError({ ...error, email: "Email Field is Required" })
      return;
    }
    if (!formData.password) {
      setError({ ...error, password: "Password Field is required" })
      return;
    }

    const res = await login_me(formData);
    if(res && res.success)
    {
      Cookies.set('token', res?.finalData?.token);
      localStorage.setItem('user', JSON.stringify(res?.finalData?.user));
      dispatch(setUserData(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null));
      Router.push('/');
    }
    else
    {
      toast.error(res && res.message);
    }
  }


  useEffect(() => {
    if (Cookies.get('token')) {
      Router.push('/');
    }
  },[])


  return (
    <>
    <ar />
    <NavBar/>
    <div className='w-full h-screen bg-rose-200'>
      <div className="flex flex-col items-center  text-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white text-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
              <div className='text-left'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" name="email"
                 id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                  focus:ring-rose-200 focus:border-rose-200 block w-full p-2.5 " placeholder="name@company.com" required="" />
                {
                  error.email && <p className="text-sm text-red-500">{error.email}</p>
                }
              </div>
              <div className='text-left'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" 
                name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300
                 text-gray-900 sm:text-sm rounded-lg focus:ring-rose-200 focus:border-rose-200 block w-full p-2.5" required="" />
                {
                  error.password && <p className="text-sm text-red-500">{error.password}</p>
                }
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border
                     border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-rose-300   dark:focus:ring-rose-200 " required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <Link href="/auth/forget-password" className="text-sm font-medium text-rose-200 hover:underline ">Forgot password?</Link>
              </div>
              <button type="submit" className="w-full text-white bg-rose-200 hover:bg-rose-700 focus:ring-4 
              focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
               dark:bg-rose-200 dark:hover:bg-rose-700 dark:focus:ring-rose-800">Sign in</button>
              <p className="text-sm font-light ">
                Don’t have an account yet? <Link href="/auth/register" className="font-medium text-rose-200 hover:underline ">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    </>
  )
}