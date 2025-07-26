import React from 'react'
import { CircleCheck } from "lucide-react";

function Task({ bgColor, icon, heading, context }) {
    return (
        <>
            <div className={`${bgColor} flex flex-col rounded-xl p-2 space-y-0.3`}>
                <div className='flex justify-between'>
                    {/* Icon */}
                    <div>
                        {icon}
                    </div>
                    {/* Button Circle */}
                    <div>
                        <CircleCheck />
                    </div>
                </div>


                {/* H5 */}
                <h5 className='text-Black font-bold text-md '>{heading}</h5>
                {/* context */}
                <p className='text-Grey text-sm'>{context}</p>
            </div>

        </>
    )
}

export default Task
