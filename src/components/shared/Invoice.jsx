import React from 'react';
import { Progress } from "@/components/ui/progress";

function Invoice({ type, value, color }) {
  // Tailwind-safe color map
  const colorMap = {
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
  };

  return (
    <div className='space-y-2'>
      <div className='flex justify-between'>
        <p className='text-sm font-semibold text-darkGrey'>{type}</p>
        <p className='text-sm text-Grey'>5 | USD {value}</p>
      </div>
      <Progress
        value={value}
        indicatorColor={colorMap[color] || "bg-gray-500"}
      />
    </div>
  );
}

export default Invoice;
