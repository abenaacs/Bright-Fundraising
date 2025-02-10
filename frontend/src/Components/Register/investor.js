import React from 'react'

function RegisterInvestor({formData, setFormData}) {
  return (
    <div className='flex flex-col md:gap-5 gap-3 items-center'>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Investment Sector</h4></label>
            <select value={formData.investor.investSector}
                onChange={(e) => setFormData({ ...formData, investor: { ...formData.investor, investSector: e.target.value } })}
                className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5'>
                <option>Tech</option>
                <option>Agriculture</option>
                <option>Garment</option>
            </select>
        </div>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Investment Experience</h4></label>
            <textarea value={formData.investor.investExep}
                onChange={(e) => setFormData({ ...formData, investor: { ...formData.investor, investExep: e.target.value } })}
                required
                rows={4}
                className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] text-black px-5' />
        </div>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Linked Profile</h4></label>
            <input value={formData.investor.linkedIn}
                onChange={(e) => setFormData({ ...formData, investor: { ...formData.investor, linkedIn: e.target.value } })}
                type='text'
                required
                className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] text-black px-5' />
        </div>
    </div>
  )
}

export default RegisterInvestor