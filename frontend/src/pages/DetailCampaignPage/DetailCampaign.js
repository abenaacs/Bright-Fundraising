import { progress } from 'framer-motion';
import React from 'react'

function DetailCampaign() {
    const detailedCampaignData = {
        title: "Eco-Friendly Packaging Startup",
        category: "Sustainability",
        description: "We are developing innovative, eco-friendly packaging solutions to reduce plastic waste and promote sustainability. Our products are biodegradable and made from renewable resources. We are developing innovative, eco-friendly packaging solutions to reduce plastic waste and promote sustainability. Our products are biodegradable and made from renewable resources.",
        fundingDetails: {
            targetAmount: 100000,
            fundingType: "Equity",
            deadline: "30 days",
            fundsRaised: 60000,
            minimumInvestment: 500,
            progress: "60%"
        },
        companyInfo: {
            name: "GreenPack Solutions",
            overview: "GreenPack Solutions is committed to creating sustainable packaging alternatives. Our team is composed of experts in materials science and environmental engineering.",
            team: [
                { name: "Alice Johnson", role: "CEO" },
                { name: "Bob Smith", role: "CTO" }
            ]
        },
        mediaAndPitch: {
            pitchDeck: "https://example.com/pitchdeck.pdf",
            media: [
                "https://www.shutterstock.com/image-vector/vector-illustration-flat-style-business-260nw-1371521327.jpg",
                "https://www.simplilearn.com/ice9/free_resources_article_thumb/Best_marketing_campaigns.jpg",
                "https://online.sbu.edu/sites/default/files/field/image/successful%20marketing%20campaigns%20202.jpg",
                "https://www.kobadvertising.com/wp-content/uploads/2019/12/shutterstock_759471151-900x506.jpg"
            ],
            links: [
                "https://example.com/demo",
                "https://example.com/article"
            ]
        },
        investorInteraction: {
            messages: [
                { from: "Investor1", message: "Interested in learning more about your project." },
                { from: "Investor2", message: "Can we schedule a meeting?" }
            ],
            meetings: [
                { with: "Investor1", date: "2024-08-01", time: "10:00 AM" },
                { with: "Investor2", date: "2024-08-02", time: "02:00 PM" }
            ]
        },
        personalizedMessage: "We believe in a sustainable future and need your support to make it a reality. We believe in a sustainable future and need your support to make it a reality. We believe in a sustainable future and need your support to make it a reality.",
        motivationLetter: "Dear Investor, our motivation to create eco-friendly packaging stems from our commitment to the environment. With your investment, we can scale our operations and make a significant impact. With your investment, we can scale our operations and make a significant impact.",
        performanceMetrics: {
            totalFundsRaised: 60000,
            numberOfInvestors: 45,
            engagement: {
                views: 200,
                shares: 50
            }
        },
        contactInformation: {
            name: "Duncan Higgins",
            phone: "+1 (798) 148-3784",
            address: "Voluptatem Ut delec",
            email: "lejyqyge@mailinator.com"
        }
    };

    return (
        <div className='p-10 pt-20'>

            {/* image of the campaign */}
            <img
                className='w-full h-[300px] object-cover rounded-lg'
                height={100}
                width={100}
                alt='campaign image'
                src='https://media.istockphoto.com/id/1219580367/photo/marketing-campaign-brand-advertisement-business-strategy.jpg?s=2048x2048&w=is&k=20&c=nMmYCcGfAT-PxZ-KNLafMP9BqiC9oyKe2ZS535Gv2wU=' />

            {/* container to all of the details of the campaign */}
            <div>
                <h2 className='lg:text-5xl md:text-3xl text-2xl'>{detailedCampaignData.title}</h2>

                {/* container for the description of the campaign */}
                <div className='mt-5'>
                    <h3 className='text-xl md:text-2xl'>Description</h3>
                    <p className='text-gray-500 md:text-lg text-sm'>{detailedCampaignData.description}</p>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1'>
                    {/* card layout for the funding details part */}
                    <div class="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto w-full my-8">
                        <div class="md:text-2xl text-xl text-black font-bold text-center mb-6">Funding Details</div>

                        <div class="border-b border-gray-300 py-4">
                            <div class="lg:text-md text-sm font-bold text-gray-800">Target Amount:</div>
                            <div class="lg:text-md text-sm text-gray-600">${detailedCampaignData.fundingDetails.targetAmount}</div>
                        </div>

                        <div class="border-b border-gray-300 py-4">
                            <div class="lg:text-md text-sm font-bold text-gray-800">Funding Type:</div>
                            <div class="lg:text-md text-sm text-gray-600">{detailedCampaignData.fundingDetails.fundingType}</div>
                        </div>

                        <div class="border-b border-gray-300 py-4">
                            <div class="lg:text-md text-sm font-bold text-gray-800">Deadline:</div>
                            <div class="lg:text-md text-sm text-gray-600">{detailedCampaignData.fundingDetails.deadline}</div>
                        </div>

                        <div class="border-b border-gray-300 py-4">
                            <div class="lg:text-md text-sm font-bold text-gray-800">Progress:</div>
                            <div class="bg-gray-300 rounded-full overflow-hidden mt-2">
                                <div class="bg-purple-400 h-5 rounded-full" style={{ width: `${detailedCampaignData.fundingDetails.progress}` }}></div>
                            </div>
                        </div>

                        <div class="border-b border-gray-300 py-4">
                            <div class="lg:text-md text-sm font-bold text-gray-800">Funds Raised:</div>
                            <div class="lg:text-md text-sm text-gray-600">${detailedCampaignData.fundingDetails.fundsRaised}</div>
                        </div>

                        <div class="py-4">
                            <div class="lg:text-md text-sm font-bold text-gray-800">Minimum Investment:</div>
                            <div class="lg:text-md text-sm text-gray-600">${detailedCampaignData.fundingDetails.minimumInvestment}</div>
                        </div>
                    </div>

                    {/* card layout for the Company info part */}
                    <div class="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto my-8">
                        <div class="md:text-2xl text-xl text-black font-bold text-center mb-6">Company Info</div>

                        <div class="border-b border-gray-300 py-4">
                            <div class="lg:text-md text-sm font-bold text-gray-800">Company Name:</div>
                            <div class="lg:text-md text-sm text-gray-600">{detailedCampaignData.companyInfo.name}</div>
                        </div>

                        <div class="border-b border-gray-300 py-4">
                            <div class="lg:text-md text-sm font-bold text-gray-800">Overview:</div>
                            <div class="lg:text-md text-sm text-gray-600">
                                {detailedCampaignData.companyInfo.overview}
                            </div>
                        </div>

                        <div class="py-4">
                            <div class="lg:text-md text-sm font-bold text-gray-800">Team:</div>
                            <div class="lg:text-md text-sm text-gray-600">
                                {detailedCampaignData.companyInfo.team.map((team, index) => (
                                    <ul class="list-disc list-inside">
                                        <li id={index}>{team.name} ({team.role})</li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card layout for the contact info of the user */}
                    <div class="bg-white shadow-lg rounded-lg p-6 max-w-md w-full mx-auto my-8">
                        <div class="md:text-2xl text-xl font-bold text-center text-black mb-6">Contact Information</div>

                        <div class="mb-4">
                            <div class="lg:text-md text-sm font-bold text-gray-800">Name:</div>
                            <div class="lg:text-md text-sm text-gray-600">{detailedCampaignData.contactInformation.name}</div>
                        </div>

                        <div class="mb-4">
                            <div class="lg:text-md text-sm font-bold text-gray-800">Phone:</div>
                            <div class="lg:text-md text-sm text-gray-600">{detailedCampaignData.contactInformation.phone}</div>
                        </div>

                        <div class="mb-4">
                            <div class="lg:text-md text-sm font-bold text-gray-800">Address:</div>
                            <div class="lg:text-md text-sm text-gray-600">{detailedCampaignData.contactInformation.address}</div>
                        </div>

                        <div>
                            <div class="lg:text-md text-sm font-bold text-gray-800">Email:</div>
                            <div class="lg:text-md text-sm text-gray-600">{detailedCampaignData.contactInformation.email}</div>
                        </div>
                    </div>
                </div>

                {/* Container for the pitch and media part */}
                <div class="w-full px-6 py-8">
                    <h3 class="font-bold mb-6 text-xl md:text-2xl text-white">Pitch and Media</h3>

                    <div class="mb-8 flex items-center gap-5">
                        <h4 class="font-bold text-sm md:text-xl">Pitch Deck:</h4>
                        <a href={detailedCampaignData.mediaAndPitch.pitchDeck} class="text-teal-500 hover:underline text-sm md:text-xl">View Pitch Deck</a>
                    </div>

                    <div class="mb-8">
                        <h4 class="font-bold">Media Gallery:</h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
                            {detailedCampaignData.mediaAndPitch.media.map((media, index) => (
                                <img id={index} src={media} alt="Image 1" class="rounded-lg shadow-md h-[190px] w-full" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* cotainer for the Personalized and Motivation letter */}
                <div class="w-full px-6 py-8 bg-gray-50 rounded-lg">
                    <div class="md:text-2xl text-xl font-bold text-center mb-6 text-black">Personalized Message</div>
                    <div class="mb-8">
                        {/* <div class="font-bold text-gray-800">Personalized Message:</div> */}
                        <p class="text-sm md:text-xl text-gray-600 mt-2">
                            {detailedCampaignData.personalizedMessage}
                        </p>
                    </div>
                </div>
                <div class="w-full px-6 py-8 bg-gray-50 rounded-lg mt-10">
                    <div class="md:text-2xl text-xl font-bold text-center mb-6 text-black">Motivation Letter</div>
                    <div class="mb-8">
                        {/* <div class="font-bold text-gray-800">Personalized Message:</div> */}
                        <p class="text-sm md:text-xl text-gray-600 mt-2">
                            {detailedCampaignData.motivationLetter}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default DetailCampaign