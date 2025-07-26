import React from 'react'
import {ArrowUpRight} from 'lucide-react'

function Meeting({time,title,meetAppIcon,meetAppName}) {
    return (
        <>
            <div className='border-1 border-lightGrey rounded-2xl p-2 flex justify-between'>
                <div className='flex gap-1'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-Grey text-sm'>My Meetings</p>
                        <p className='text-sm text-Black font-semibold'>{time}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium text-Black'>{title}</p>
                        <div className='flex gap-0.5'>
                            <div className='w-5 h-5'> 
                                {meetAppIcon}
                            </div>
                            <p className='text-Grey'>{meetAppName}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <ArrowUpRight />
                </div>
            </div>
        </>
    )
}

export default Meeting
