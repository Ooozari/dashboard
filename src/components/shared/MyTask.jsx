import React from 'react'
import Task from './Task'
import { Button } from '../ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Plus, CalendarCheck,
    FileText,
    MessageCircle,
    ShieldCheck,
} from "lucide-react";


function MyTask() {
    const tasks = [
        {
            bgColor: "bg-green-100",
            icon: <CalendarCheck className="text-green-600 w-5 h-5" />,
            heading: "Meeting Scheduled",
            context: "Team meeting is set for 3 PM today.",
        },
        {
            bgColor: "bg-blue-100",
            icon: <FileText className="text-blue-600 w-5 h-5" />,
            heading: "Report Uploaded",
            context: "Monthly performance report is available.",
        },
        {
            bgColor: "bg-yellow-100",
            icon: <MessageCircle className="text-yellow-600 w-5 h-5" />,
            heading: "New Message",
            context: "You have a message from the project lead.",
        },
        {
            bgColor: "bg-red-100",
            icon: <ShieldCheck className="text-red-600 w-5 h-5" />,
            heading: "Security Update",
            context: "System firewall was updated successfully.",
        },
    ];
    return (
        <>
            <div className='bg-White rounded-2xl p-2'>
                {/* Headings */}
                <div className='flex justify-between'>
                    <h1 className='text-Black font-bold'>My Tasks</h1>
                    <div>
                        <Plus size={30} className='border-1 border-lightGrey rounded-full p-1' />
                    </div>
                </div>

                <div className='px-1'>
                    {/* Tabs */}
                    <div>
                        <Tabs defaultValue="account" className="">
                            <TabsList className="gap-1 h-8">
                                <TabsTrigger
                                    value="Today"
                                    className="px-3 py-0 h-8 text-xs leading-none"
                                >
                                    Today
                                </TabsTrigger>
                                <TabsTrigger
                                    value="Week"
                                    className="px-3 py-0 h-8 text-xs leading-none"
                                >
                                    Tomorrow
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                    {/* Drop down */}
                    <div className='py-2'>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="flex items-center justify-between gap-2">
                                    {/* Task count on left */}
                                    <div className="bg-Black text-White p-1.5 rounded-full text-sm w-7 h-7 flex items-center justify-center">
                                        {tasks.length}
                                    </div>
                                    {/* Label */}
                                    <span className="text-sm font-medium text-black">Ongoing Tasks</span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul>
                                        <li>Task1</li>
                                        <li>Task2</li>
                                        <li>Task3</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    {/* Mytask cards */}
                    <div className='flex flex-col gap-1'>
                        {tasks.map((task, index) => (
                            <Task
                                key={index}
                                bgColor={task.bgColor}
                                icon={task.icon}
                                heading={task.heading}
                                context={task.context}
                            />
                        ))}
                    </div>
                </div>



            </div>
        </>
    )
}

export default MyTask
