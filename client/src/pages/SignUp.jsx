import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import OAuth from '../components/OAuth'

function SignUp() {
        const [formData, setFormData] = useState({})
        const [error, setError] = useState(null)
        const [loading, setLoading] = useState(false)
        const navigate = useNavigate();
        const handleChange = (e) => {
            setFormData({
              ...formData,
              [e.target.id]: e.target.value
            })
        }

        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
         
            setLoading(true);
            const res = await fetch('/api/auth/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data); 
            if(data.success === false){
              setError(data.message);
              setLoading(false);
              return;
            }
            setLoading(false); 
            setError(null);
            navigate('/sign-in')
        } catch (error) {
          setLoading(false);
          setError(error.message);
        }
      }


  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
        <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Username' 
            className='border p-3 rounded-lg' 
            id='username'
            onChange={handleChange}
            />
            <input 
            type='email' 
            placeholder='Email' 
            className='border p-3 rounded-lg' 
            id='email'
            onChange={handleChange}
            />
            <input 
            type='password'
             placeholder='Password' 
             className='border p-3 rounded-lg' 
             id='password'
             onChange={handleChange}
             />

             <button 
             disabled={loading}
             className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity:80'>
             {loading ? 
              <div className='flex gap-1 mx-auto items-center justify-center'>
                    Loading... <AiOutlineLoading3Quarters /> 
              </div>
              : 'Sign up'}</button>
              <OAuth />
        </form>
        <div className='flex gap-2 mt-5'>
          <p>Have an account?</p>
          <Link to='/sign-in'>
            <span className='text-blue-700'>sign in</span>
          </Link>
        </div>
    </div>
  )
}

export default SignUp