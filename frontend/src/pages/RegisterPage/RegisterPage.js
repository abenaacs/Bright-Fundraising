import React from 'react'
import Register from '../../Components/Register/register'
import signup from '../../assets/signup.png'
function RegisterPage() {
  return (
    <div className='lg:grid lg:grid-cols-2 lg:gap-5 flex h-screen justify-center items-center md:pt-80 lg:pt-10'>
      <div className='pr-10 hidden md:hidden lg:flex lg:justify-center lg:mt-10'>
        <img src={signup} width={400} className='h-[600px]' />
      </div>
      <div>
        <div className='flex flex-col md:mt-0 gap-5 md:gap-10 md:p-10 items-center mt-14'>
          <div className='flex flex-col items-center'>
            <h2 className='text-white text-center text-3xl md:text-5xl md:mb-5'>Sign Up</h2>
            <h6 className='text-center text-sm md:text-md'>Enter Your info to proceed</h6>
          </div>
          {/* Regiser form component */}
          <Register />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
