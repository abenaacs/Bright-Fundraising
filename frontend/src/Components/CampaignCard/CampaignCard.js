import { FilePenLine, Trash2 } from 'lucide-react'
import React, { useState } from 'react'

function CampaignCard({ campaign, index }) {
  const [showViewButton, setShowViewButton] = useState(false);

  const handleCardClick = () => {
    setShowViewButton(!showViewButton);
  }
  return (
    // <div id={index} className='relative flex flex-col bg-white p-5 rounded-lg shadow-md'>
    //   {/* Hover effect and View button */}
    //   <div className='absolute inset-x-0 top-0 h-1/4 bg-transparent group'>
    //     <div className='relative h-full'>
    //       <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg'>
    //         <a href='/detailCampaign' className='p-2'>View</a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Card Content */}
    //   <img src={campaign.image} alt='image' width={100} height={100} className='w-full rounded-lg' />
    //   <h3 className='text-black line-clamp-1'>{campaign.title}</h3>
    //   <h4 className='text-gray-500 text-[17px] mt-3'>Status: {campaign.status}</h4>
    //   <h4 className='text-gray-500 text-[17px]'>Funds Raised: ${campaign.fundsRaised}/{campaign.targetAmount}</h4>
    //   <h4 className='text-gray-500 text-[17px]'>Investors: {campaign.investors}</h4>
    //   <h4 className='text-gray-500 text-[17px]'>Days Remaining: {campaign.daysRemaining}</h4>
    //   <div className='flex justify-end gap-5 mt-3'>
    //     <div className='relative group'>
    //       <button className='bg-transparent p-0' onClick={() => console.log('edit')}><FilePenLine color='blue' /></button>
    //       <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-40 p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg">
    //         Edit Campaign
    //       </div>
    //     </div>
    //     <div className='relative group'>
    //       <button className='bg-transparent p-0' onClick={() => console.log('delete')}><Trash2 color='red' /></button>
    //       <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-40 p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg">
    //         Delete the Campaign
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      id={index}
      className="relative flex flex-col bg-white p-5 rounded-lg shadow-md"
      onClick={handleCardClick}
    >
      {/* Hover effect and View button */}
      <div className={`absolute inset-x-0 top-0 h-1/2 bg-transparent group ${showViewButton ? '' : 'group-hover'}`}>
        <div className="relative h-full">
          <div
            className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold ${showViewButton ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg`}
          >
            <a href='/detailCampaign' className="p-2">
              View
            </a>
          </div>
        </div>
      </div>
      {/* Card Content */}
      <img src={campaign.image} alt="image" width={100} height={100} className="w-full rounded-lg" />
      <h3 className="text-black line-clamp-1">{campaign.title}</h3>
      <h4 className="text-gray-500 text-[17px] mt-3">
        Status: {campaign.status}
      </h4>
      <h4 className="text-gray-500 text-[17px]">
        Funds Raised: ${campaign.fundsRaised}/{campaign.targetAmount}
      </h4>
      <h4 className="text-gray-500 text-[17px]">Investors: {campaign.investors}</h4>
      <h4 className="text-gray-500 text-[17px]">
        Days Remaining: {campaign.daysRemaining}
      </h4>
      <div className="flex justify-end gap-5 mt-3">
        <div className="relative group">
          <button
            className="bg-transparent p-0"
            onClick={(e) => {
              e.stopPropagation();
              console.log('edit');
            }}
          >
            <FilePenLine color="blue" />
          </button>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-40 p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg">
            Edit Campaign
          </div>
        </div>
        <div className="relative group">
          <button
            className="bg-transparent p-0"
            onClick={(e) => {
              e.stopPropagation();
              console.log('delete');
            }}
          >
            <Trash2 color="red" />
          </button>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-40 p-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg">
            Delete the Campaign
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignCard