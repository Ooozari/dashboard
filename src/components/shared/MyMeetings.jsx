import React from 'react'
import { Projector, Video, Camera, FunnelPlus } from 'lucide-react'
import Meeting from '@/components/shared/Meeting'
import OpenTickets from '@/components/shared/OpenTickets';
import Link from 'next/link';
import { client1, client2, client3, } from '@/assets';

function MyMeetings() {
    const meetings = [
        {
            time: "7:00 PM",
            title: "App Project",
            meetAppIcon: <Video className="text-Blue" size={16} />,
            meetAppName: "Zoom",
        },
        {
            time: "7:00 PM",
            title: "User Research",
            meetAppIcon: <Camera className="text-Green" size={16} />,
            meetAppName: "Google Meet",
        },
    ];
    const tickets = [
        {
            imgIcon: client1,
            clientName: "Ayesha Malik",
            order: "I need 3 more new features for my website.",
        },
        {
            imgIcon: client2,
            clientName: "Usman Tariq",
            order: "Can you add a payment gateway to the site?",
        },
        {
            imgIcon: client3,
            clientName: "Zara Rehman",
            order: "Please integrate a blog section with CMS support.",
        },
    ];

    return (
        <>

            <div className='bg-White rounded-2xl p-2 flex flex-col gap-5'>
                <div>
                    {/* Headings */}
                    <div className='flex justify-between items-center mb-2'>
                        <h1 className='text-Black font-bold'>My Meetings</h1>
                        <div>
                            <Projector size={30} className='border-1 border-lightGrey rounded-full p-1.5 size-8' />
                        </div>
                    </div>

                    <div className='px-1 flex flex-col gap-1'>
                        {meetings.map((item, index) => (
                            <Meeting key={index} {...item} />
                        ))}
                    </div>

                    <div className='text-darkGrey text-[16px] py-1.5'><Link href='/'>See All Meetings </Link></div>
                </div>

                <div>
                    <div className='flex justify-between items-center mb-2'>
                        <h1 className='text-Black font-bold'>Open Tickets</h1>
                        <div>
                            <FunnelPlus size={30} className='border-1 border-lightGrey rounded-full p-1.5 size-8' />
                        </div>
                    </div>
                    <div className='px-1 flex flex-col gap-1'>
                        {tickets.map((item, index) => (
                            <OpenTickets key={index} {...item} />
                        ))}
                    </div>
                </div>

            </div>

        </>
    )
}

export default MyMeetings
