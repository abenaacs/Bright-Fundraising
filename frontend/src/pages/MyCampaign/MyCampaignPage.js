import React from 'react'
import CampaignCard from '../../Components/CampaignCard/CampaignCard';

function MyCampaignPage() {
    const campaignData = [
        {
          image: "https://media.istockphoto.com/id/1219580367/photo/marketing-campaign-brand-advertisement-business-strategy.jpg?s=2048x2048&w=is&k=20&c=nMmYCcGfAT-PxZ-KNLafMP9BqiC9oyKe2ZS535Gv2wU=",
          title: "Eco-Friendly Packaging Startup",
          status: "Active",
          progress: 60,
          fundsRaised: 60000,
          targetAmount: 100000,
          investors: 45,
          daysRemaining: 20
        },
        {
          image: "https://media.istockphoto.com/id/1219580367/photo/marketing-campaign-brand-advertisement-business-strategy.jpg?s=2048x2048&w=is&k=20&c=nMmYCcGfAT-PxZ-KNLafMP9BqiC9oyKe2ZS535Gv2wU=",
          title: "AI-Based Health Diagnostics",
          status: "Active",
          progress: 40,
          fundsRaised: 40000,
          targetAmount: 100000,
          investors: 30,
          daysRemaining: 25
        },
        {
          image: "https://media.istockphoto.com/id/1219580367/photo/marketing-campaign-brand-advertisement-business-strategy.jpg?s=2048x2048&w=is&k=20&c=nMmYCcGfAT-PxZ-KNLafMP9BqiC9oyKe2ZS535Gv2wU=",
          title: "Sustainable Fashion Brand",
          status: "Completed",
          progress: 100,
          fundsRaised: 100000,
          targetAmount: 100000,
          investors: 70,
          daysRemaining: 0
        },
        {
          image: "https://media.istockphoto.com/id/1219580367/photo/marketing-campaign-brand-advertisement-business-strategy.jpg?s=2048x2048&w=is&k=20&c=nMmYCcGfAT-PxZ-KNLafMP9BqiC9oyKe2ZS535Gv2wU=",
          title: "Renewable Energy Solutions",
          status: "Active",
          progress: 70,
          fundsRaised: 70000,
          targetAmount: 100000,
          investors: 50,
          daysRemaining: 10
        },
        {
          image: "https://media.istockphoto.com/id/1219580367/photo/marketing-campaign-brand-advertisement-business-strategy.jpg?s=2048x2048&w=is&k=20&c=nMmYCcGfAT-PxZ-KNLafMP9BqiC9oyKe2ZS535Gv2wU=",
          title: "EdTech Platform for Remote Learning",
          status: "Active",
          progress: 80,
          fundsRaised: 80000,
          targetAmount: 100000,
          investors: 60,
          daysRemaining: 15
        },
        {
          image: "https://media.istockphoto.com/id/1219580367/photo/marketing-campaign-brand-advertisement-business-strategy.jpg?s=2048x2048&w=is&k=20&c=nMmYCcGfAT-PxZ-KNLafMP9BqiC9oyKe2ZS535Gv2wU=",
          title: "Organic Skincare Products",
          status: "Active",
          progress: 50,
          fundsRaised: 50000,
          targetAmount: 100000,
          investors: 35,
          daysRemaining: 18
        }
      ];
      
  return (
    <div className='p-10 pt-20'>
        <h2 className=''>My Campaigns</h2>
        <div className='mt-10 grid grid-cols-3 gap-7'>
            {campaignData.map((campaign, index)=>(
                <CampaignCard campaign={campaign} index={index} />
            ))}
        </div>
    </div>
  )
}

export default MyCampaignPage