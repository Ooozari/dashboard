import React from 'react'
import { Projector, Video, Camera } from 'lucide-react'
import Meeting from '@/components/shared/Meeting'
import Link from 'next/link';

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
    return (
        <>

            <div className='bg-White rounded-2xl p-2'>
                {/* Headings */}
                <div className='flex justify-between'>
                    <h1 className='text-Black font-bold'>My Meetings</h1>
                    <div>
                        <Projector size={30} className='border-1 border-lightGrey rounded-full p-1' />
                    </div>
                </div>

                <div className='px-1'>
                    {meetings.map((item, index) => (
                        <Meeting key={index} {...item} />
                    ))}
                </div>

                <div className='text-darkGrey font-md'><Link href='/'>See All Meetings </Link></div>

                <div className='px-1'>
                    {opentickets.map((item, index) => (
                        <OpenTickets key={index} {...item} />
                    ))}
                </div>


            </div>

        </>
    )
}

export default MyMeetings
