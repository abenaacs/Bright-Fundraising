import React from 'react'

function DashboardPage() {
    return (
        <div class="flex min-h-screen bg-[#0c0a33">
            {/* <!-- Sidebar --> */}
            <div class="w-64 bg-gray-500 text-white flex flex-col pt-20">
                <div class="text-2xl font-bold p-4 text-center">Dashboard</div>
                <nav class="mt-6 flex-grow">
                    <a href="#" class="block py-2.5 px-4 rounded hover:bg-purple-400">Dashboard</a>
                    <a href="#" class="block py-2.5 px-4 rounded hover:bg-purple-400">My Campaigns</a>
                    <a href="#" class="block py-2.5 px-4 rounded hover:bg-purple-400">Create Campaign</a>
                    <a href="#" class="block py-2.5 px-4 rounded hover:bg-purple-400">Profile</a>
                    <a href="#" class="block py-2.5 px-4 rounded hover:bg-purple-400">Settings</a>
                    <a href="#" class="block py-2.5 px-4 rounded hover:bg-purple-400">Logout</a>
                </nav>
            </div>

            {/* <!-- Main Content Area --> */}
            <div class="flex-1 p-6 pt-20">
                <div class="text-2xl font-bold mb-6">Welcome to Your Dashboard</div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* <!-- Campaign Summary --> */}
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="font-bold text-lg">Campaign Summary</div>
                        <p class="mt-2 text-gray-600">Overview of your campaigns.</p>
                        {/* <!-- Add specific campaign metrics here --> */}
                    </div>
                    {/* <!-- Investor Activity --> */}
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="font-bold text-lg">Investor Activity</div>
                        <p class="mt-2 text-gray-600">Recent activities by investors.</p>
                        {/* <!-- Add specific activity details here --> */}
                    </div>
                    {/* <!-- Funding Status --> */}
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="font-bold text-lg">Funding Status</div>
                        <p class="mt-2 text-gray-600">Current status of your funding.</p>
                        {/* <!-- Add specific funding details here --> */}
                    </div>
                    {/* <!-- Notifications --> */}
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="font-bold text-lg">Notifications</div>
                        <p class="mt-2 text-gray-600">Recent notifications and alerts.</p>
                        {/* <!-- Add specific notifications here --> */}
                    </div>
                    {/* <!-- To-Do List --> */}
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="font-bold text-lg">To-Do List</div>
                        <p class="mt-2 text-gray-600">Your tasks and deadlines.</p>
                        {/* <!-- Add specific tasks here --> */}
                    </div>
                    {/* <!-- Profile Overview --> */}
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="font-bold text-lg">Profile Overview</div>
                        <p class="mt-2 text-gray-600">Quick view of your profile.</p>
                        {/* <!-- Add profile details here --> */}
                    </div>
                    {/* <!-- Upcoming Events --> */}
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="font-bold text-lg">Upcoming Events</div>
                        <p class="mt-2 text-gray-600">Calendar of events and deadlines.</p>
                        {/* <!-- Add event details here --> */}
                    </div>
                    {/* <!-- Insights & Analytics --> */}
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="font-bold text-lg">Insights & Analytics</div>
                        <p class="mt-2 text-gray-600">Detailed analytics on performance.</p>
                        {/* <!-- Add analytics here --> */}
                    </div>
                    {/* <!-- Recent Activity Feed --> */}
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="font-bold text-lg">Recent Activity</div>
                        <p class="mt-2 text-gray-600">Log of recent activities.</p>
                        {/* <!-- Add activity feed here --> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DashboardPage