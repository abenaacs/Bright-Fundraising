import React from 'react'
import countries from './country'

function RegisterCommon({formData, setFormData}) {
  return (
    <div className='flex flex-col md:gap-5 gap-3 items-center'>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Full Name</h4></label>
            <input value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                type='text'
                required
                className='bg-[#d9e1ff] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5 md:w-[580px]' />
        </div>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Email</h4></label>
            <input value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                type='email'
                required
                className='bg-[#d9e1ff] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5 md:w-[580px]' />
        </div>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Phone</h4></label>
            <input value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                type='number'
                required
                className='bg-[#d9e1ff] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5 md:w-[580px]' />
        </div>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Location</h4></label>
            <select value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className='bg-[#d9e1ff] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5 md:w-[580px]'>
                {countries.map((country, index) => (
                    <option key={index}><img src={country.flag} width={50} />{country.name}</option>
                ))}
            </select>
        </div>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Password</h4></label>
            <input value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                type='password'
                required
                className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5' />
        </div>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Confirm Password</h4></label>
            <input type='password' required className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md h-[28px] md:h-[32px] text-black px-5' />
        </div>
    </div>
  )
}

export default RegisterCommon