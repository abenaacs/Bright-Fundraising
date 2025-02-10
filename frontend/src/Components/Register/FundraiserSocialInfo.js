import React from 'react'

function FundraiserSocialInfo({ formData, setFormData }) {
    const handleChange = () => {
        console.log('changed')
    }
    return (
        <div className='flex flex-col md:gap-5 gap-3 items-center'>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>Telegram Username</h4></label>
                <input
                    name='telegram'
                    value={formData.fundRaiser.telegram}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, telegram: e.target.value } })}
                    type='text'
                    required
                    className='bg-[#d9e1ff] w-[300px] rounded-md text-black px-5 md:w-[580px]' />
            </div>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>WhatsApp Number</h4></label>
                <input
                    name='whatsapp'
                    value={formData.fundRaiser.whatsapp}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, whatsapp: e.target.value } })}
                    type='text'
                    required
                    className='bg-[#d9e1ff] w-[300px] rounded-md text-black px-5 md:w-[580px]' />
            </div>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>LinkedIn Profile URL</h4></label>
                <input
                    name='linkedin'
                    value={formData.fundRaiser.linkedin}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, linkedin: e.target.value } })}
                    type='url'
                    required
                    className='bg-[#d9e1ff] w-[300px] rounded-md text-black px-5 md:w-[580px]' />
            </div>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>Instagram Username</h4></label>
                <input
                    name='instagram'
                    value={formData.fundRaiser.instagram}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, instagram: e.target.value } })}
                    type='text'
                    required
                    className='bg-[#d9e1ff] w-[300px] rounded-md text-black px-5 md:w-[580px]' />
            </div>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>Twitter Username</h4></label>
                <input
                    name='twitter'
                    value={formData.fundRaiser.twitter}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, twitter: e.target.value } })}
                    type='text'
                    required
                    className='bg-[#d9e1ff] w-[300px] rounded-md text-black px-5 md:w-[580px]' />
            </div>
            <div className='flex flex-col gap-0'>
                <label><h4 className='text-lg md:text-xl'>Business Website</h4></label>
                <input value={formData.fundRaiser.businessWebsite}
                    onChange={(e) => setFormData({ ...formData, fundRaiser: { ...formData.fundRaiser, businessWebsite: e.target.value } })}
                    type='text'
                    required
                    className='bg-[#d9e1ff] md:w-[580px] w-[300px] rounded-md text-black px-5' />
            </div>
        </div>
    )
}

export default FundraiserSocialInfo