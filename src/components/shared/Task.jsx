import React from 'react'
import { Check} from "lucide-react";

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
                        <Check size={30} className='border-2 border-darkGrey rounded-full p-0.5 size-6'/>
                    </div>
                </div>


                {/* H5 */}
                <h5 className='text-Black font-bold text-sm '>{heading}</h5>
                {/* context */}
                <p className='text-Grey text-xs'>{context}</p>
            </div>

        </>
    )
}

export default Task
