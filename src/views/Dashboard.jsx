import LeftNavigation from '@/components/shared/LeftNavigation'
import MyTask from '@/components/shared/MyTask'
import DonutChart from '@/components/shared/DonutChart'
import MyMeetings from '@/components/shared/MyMeetings'
import React from 'react'
import TopNavBar from '@/layouts/TopNavBar'
import { Input } from "@/components/ui/input"

function Dashboard() {
    return (
        <>
            <div>
                <div className='bg-purple-50 h-screen w-full px-2'>
                    {/* Top Navbar */}
                    <div>
                        <TopNavBar />
                    </div>

                    <div className='flex w-full py-5'>
                        {/* Left Navigation */}
                        <div>
                            <LeftNavigation />
                        </div>

                        {/* dashboard content */}
                        <div className='w-full px-4 '>

                            {/* Header with search bar */}
                            <div className='flex justify-between pb-6 '>
                                {/* Heading */}
                                <div>
                                    <p className='text-Black font-md leading-3'>Manage and track your projects</p>
                                    <h1 className='text-3xl font-extrabold text-Black'>Project Dashboard</h1>

                                </div>
                                {/* Search bar */}
                                <div className='w-1/3'>
                                    <Input placeholder='Search tasks, meetings, projects..' className='rounded-full w-full' />
                                </div>

                            </div>

                            <div className='flex gap-1'>
                                {/* My tasks */}
                                <div>
                                    <MyTask />
                                </div>

                                {/* My Meetings */}
                                <div>
                                    <MyMeetings />
                                </div>
                            </div>



                        </div>


                    </div>





                    {/* <div>
                        <DonutChart />
                    </div> */}
                </div>
            </div>


        </>
    )
}

export default Dashboard
