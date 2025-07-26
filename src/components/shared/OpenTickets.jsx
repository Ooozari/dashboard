import React from 'react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

function OpenTickets({ imgIcon, clientName, order }) {
    return (
        <>
            <div className='border-1 border-lightGrey rounded-2xl flex gap-2 px-3 py-2 items-start'>
                <div className='w-7 h-7 rounded-full overflow-hidden'>
                    <Image
                        src={imgIcon}
                        alt='Profile photo'
                        width={28}
                        height={28}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className=''>
                    <div className='space-y-0.5 leading-4'>
                        <h6 className='text-[15px] font-bold'>{clientName}</h6>
                        <p className='text-darkGrey text-xs'>{order}</p>
                    </div>

                    <div className='bg-gray-100 rounded-2xl py-px px-1.5 cursor-pointer inline-flex items-center mt-2'>
                        <Link href='/dashboard' className='flex items-center gap-0.5 text-sm font-medium text-Black'>
                            Check <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OpenTickets
