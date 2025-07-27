import React from 'react'
import Link from 'next/link'
function Page() {
    return (
        <div className='h-screen flex items-center justify-center font-bold text-neutral-600 '>
        Navigate to dashboard 
        <Link href='/dashboard' className='underline text-blue-600 ml-2'> click here</Link>
        </div>
    )
}

export default Page
