import React from 'react'
import { Link } from 'react-router-dom';


function Role() {
  return (
    <div className='h-screen m-0 flex flex-col justify-center md:gap-10 gap-5 items-center'>
        <div>
            <h1 className='text-white font-bold md:text-5xl text-2xl'>Select Your Role</h1>
        </div>
        <div className='md:flex-row gap-5 items-center flex flex-col'>
            <div className='flex flex-col items-center gap-5 md:p-8 p-5 rounded-lg border border-white'>
                <h3 className='text-white md:text-3xl'>Investor</h3>
                <div>
                <h4 className='text-center md:text-xl text-sm'>Join as an investor to discover</h4>
                <h4 className='text-center md:text-xl text-sm'>and invest in promising projects</h4>
                <h4 className='text-center md:text-xl text-sm'>and startups.</h4>
                </div>
                <Link to='/register?role=investor'><button className='text-sm md:text-xl'>Continue</button></Link>
            </div>
            <div className='flex flex-col items-center gap-5 md:p-8 p-5 rounded-lg border border-white'>
                <h3 className='text-white md:text-3xl'>Fund Raiser</h3>
                <div>
                <h4 className='text-center md:text-xl text-sm'>Join as a fund raiser to present</h4>
                <h4 className='text-center md:text-xl text-sm'>your project and raise funds from</h4>
                <h4 className='text-center md:text-xl text-sm'>investors.</h4>
                </div>
                <Link to='/register?role=fundRaiser'><button className='text-sm md:text-xl'>Continue</button></Link>
            </div>
            <div>

            </div>
        </div>  
    </div>
  )
}

export default Role