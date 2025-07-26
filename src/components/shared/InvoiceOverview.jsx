import React from 'react'
import Invoice from '@/components/shared/Invoice'
import { Projector } from 'lucide-react'

function InvoiceOverview() {
    const invoiceData = [
        { type: 'Overdue', value: 70, color: 'red' },
        { type: 'Paid', value: 40, color: 'green' },
        { type: 'Unpaid', value: 80, color: 'yellow' },
        { type: 'Draft', value: 30, color: 'blue' },
    ];

    return (
        <>
            <div className='bg-White rounded-2xl p-2 flex flex-col gap-5'>

                {/* Headings */}
                <div className='flex justify-between items-center mb-2'>
                    <h1 className='text-Black font-bold'>Invoice Overview</h1>
                    <div>
                        <Projector size={30} className='border-1 border-lightGrey rounded-full p-1.5 size-8' />
                    </div>
                </div>
                <div className='px-1 flex flex-col gap-1'>
                    {invoiceData.map((item, index) => (
                        <Invoice key={index} {...item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default InvoiceOverview
