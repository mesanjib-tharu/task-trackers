import {   useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../components/login/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error,token } = useSelector((state) => state?.auth); // adjust slice name if different

  const initState = {
    email: "",
    password: ""
  };

  const [formData, setFormData] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authLogin(formData)); 
    setFormData(initState);
  };

  useEffect(()=>{
    const token = localStorage.getItem('token');
    const rt = localStorage.getItem('rt');
    if(token && rt){
      navigate("/dashboard");
    }
   },[])

 useEffect(()=>{
  if(token?.access_token && token?.refresh_token){
    localStorage.setItem('token', JSON.stringify(token?.access_token));
    localStorage.setItem('rt', JSON.stringify(token?.refresh_token));
    toast.success("Login Successfull",{
      position: "bottom-right"
    })
    navigate("/dashboard");
  }
 },[token,navigate])

  return (
    <div className='flex justify-center items-center bg-sky-200 space-y-4 p-5 rounded-md m-10 w-72'>
      <form className='mb-6' onSubmit={handleSubmit}>
        <h2 className='text-xl font-semibold mb-3 text-indigo-500'>Login</h2>

        <div className='mb-4'>
          <input
            type='email'
            placeholder='Your Email'
            name='email'
            className='w-full placeholder-gray-400 px-3 py-2 border rounded-md focus:outline-none focus:ring-2'
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='mb-4'>
          <input
            type='password'
            placeholder='Your password'
            name='password'
            className='w-full placeholder-gray-400 px-3 py-2 border rounded-md focus:outline-none focus:ring-2'
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          type='submit'
          className='w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700'
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
