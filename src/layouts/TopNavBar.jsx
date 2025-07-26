import React from 'react'
import Icons from '@/components/shared/Icons';
import {
    Settings,
    Bell,
    HelpCircle,
    Mail
} from 'lucide-react'
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import userImg from '@/assets/userImg.jpg'
import Link from 'next/link';

function TopNavBar() {
    const icons = [

        Settings,
        Bell,
        HelpCircle,
        Mail,
    ];
    return (
        <>
            <nav className='flex justify-between items-center py-1'>
                {/* logo */}
                <div>
                    <Link href='/dashboard'><h1 className='font-extrabold text-Black text-2xl'>PANZE</h1></Link>
                </div>
                {/* menu bar */}
                <div>
                    <Tabs defaultValue="account" className="">
                        <TabsList>
                            <TabsTrigger value="Today">Today</TabsTrigger>
                            <TabsTrigger value="Week">This Week</TabsTrigger>
                            <TabsTrigger value="Month">This Month</TabsTrigger>
                            <TabsTrigger value="Reports">Reports</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                {/* user profile and icons */}
                <div className='flex gap-1 items-center'>
                    {/* icons */}
                    <div className='inline-flex gap-1 '>
                        {icons.map((Icon, index) => (
                            <Icons key={index} Icon={Icon} size={14} />
                        ))}
                    </div>
                    {/* User profile img and text */}
                    <div className='flex gap-1 items-center'>
                        <div className='w-7 h-7 rounded-full overflow-hidden'>
                            <Image
                                src={userImg}
                                alt='Profile photo'
                                width={28}
                                height={28}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h6 className='text-sm font-semibold text-Black'>John Smith</h6>
                            <p className='text-xs text-darkGrey'>Project Manager</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default TopNavBar
