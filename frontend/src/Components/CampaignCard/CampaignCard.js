import React from 'react'

function CampaignCard({campaign, index}) {
  return (
    <div id={index} className='flex flex-col bg-white p-5 rounded-lg'>
                    <img src={campaign.image} 
                    alt='image' 
                    width={100} 
                    height={100}
                    className='w-full rounded-lg'/>
                    <h3 className='text-black line-clamp-1'>{campaign.title}</h3>
                    <h4 className='text-gray-500 text-[17px] mt-3'>Status: {campaign.status}</h4>
                    <div className='py-[5px] rounded-full bg-[#5664F5]'></div>
                    <h4 className='text-gray-500 text-[17px]'>Funds Raised: ${campaign.fundsRaised}/{campaign.targetAmount}</h4>
                    <h4 className='text-gray-500 text-[17px]'>Investors: {campaign.investors}</h4>
                    <h4 className='text-gray-500 text-[17px]'>Days Remaining: {campaign.daysRemaining}</h4>
                    <div className='flex justify-between mt-3'>
                        <button className='bg-[#5664F5]'>Edit</button>
                        <button className='bg-red-500'>Delete</button>

                    </div>
                </div>
  )
}

export default CampaignCard