import React from 'react'

function RegisterFundraiser({ formData, setFormData }) {
    return (
        <div className='flex flex-col md:gap-5 gap-3 items-center'>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>Startup Name</h4></label>
                <input value={formData.fundRaiser.startUpName}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, startUpName: e.target.value } })}
                    type='text'
                    required
                    className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md text-black px-5' />
            </div>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>Business Sector</h4></label>
                <select value={formData.fundRaiser.businessSector}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, businessSector: e.target.value } })}
                    className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md text-black px-5'>
                    <option>Tech</option>
                    <option>Agriculture</option>
                    <option>Garment</option>
                </select>
            </div>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>Business Stage</h4></label>
                <select value={formData.fundRaiser.businessStage}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, businessStage: e.target.value } })}
                    className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md text-black px-5'>
                    <option>Idea</option>
                    <option>Prototype</option>
                    <option>Early-Stage</option>
                    <option>Growht-Stage</option>
                </select>
            </div>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>Incorporation Date</h4></label>
                <input
                    name='incorporationDate'
                    value={formData.fundRaiser.incorporationDate}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, incorporationDate: e.target.value } })}
                    type='date'
                    required
                    className='bg-[#d9e1ff] w-[300px] rounded-md text-black px-5 md:w-[580px]' />
            </div>

            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>Business Description</h4></label>
                <textarea value={formData.fundRaiser.businessDesc}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, businessDesc: e.target.value } })}
                    required
                    rows={3}
                    className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md text-black px-5' />
            </div>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>TIN Number</h4></label>
                <input
                    name='tinNumber'
                    value={formData.fundRaiser.tinNumber}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, tinNumber: e.target.value } })}
                    type='text'
                    required
                    className='bg-[#d9e1ff] w-[300px] rounded-md text-black px-5 md:w-[580px]' />
            </div>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>Company License (PDF)</h4></label>
                <input
                    name='license'
                    value={formData.fundRaiser.license}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, license: e.target.value } })}
                    type='file'
                    accept='application/pdf'
                    required
                    className='bg-[#d9e1ff] w-[300px] rounded-md text-black px-5 md:w-[580px]' />
            </div>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>ID (Passport, Driver's License, or Kebele ID)</h4></label>
                <input
                    name='id'
                    value={formData.fundRaiser.id}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, id: e.target.value } })}
                    type='file'
                    accept='image/*,application/pdf'
                    required
                    className='bg-[#d9e1ff] w-[300px] rounded-md text-black px-5 md:w-[580px]' />
            </div>
        </div>
    )
}

export default RegisterFundraiser