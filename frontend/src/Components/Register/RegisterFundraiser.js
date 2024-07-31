import React from 'react'

function RegisterFundraiser({formData, setFormData}) {
  return (
    <div className='flex flex-col md:gap-5 gap-3 items-center'>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Startup Name</h4></label>
            <input value={formData.startUpName}
                onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, startUpName: e.target.value } })}
                type='text'
                required
                className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5' />
        </div>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Business Sector</h4></label>
            <select value={formData.businessSector}
                onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, businessSector: e.target.value } })}
                className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5'>
                <option>Tech</option>
                <option>Agriculture</option>
                <option>Garment</option>
            </select>
        </div>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Business Stage</h4></label>
            <select value={formData.businessStage}
                onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, businessStage: e.target.value } })}
                className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5'>
                <option>Idea</option>
                <option>Prototype</option>
                <option>Early-Stage</option>
                <option>Growht-Stage</option>
            </select>
        </div>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Business Description</h4></label>
            <textarea value={formData.businessDesc}
                onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, businessDesc: e.target.value } })}
                required
                rows={4}
                className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] text-black px-5' />
        </div>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Business Website</h4></label>
            <input value={formData.businessWebsite}
                onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, businessWebsited: e.target.value } })}
                type='text'
                required
                className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5' />
        </div>
        <div className='flex flex-col gap-0'>
            <label><h4 className='text-lg md:text-xl'>Pitch Deck Url</h4></label>
            <input value={formData.fundRaiser.pitchDeck}
                onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, pitchDeck: e.target.value } })}


                type='text'
                required
                className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md md:h-[32px] h-[28px] text-black px-5' />
        </div>
    </div>
  )
}

export default RegisterFundraiser