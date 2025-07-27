'use client';

import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'In Progress', value: 12, color: '#FFA500' },
  { name: 'Completed', value: 26, color: '#0088FE' },
  { name: 'Not Completed', value: 58, color: '#D3D3D3' },
];

export default function DonutChart() {
  return (
    <div className="bg-white rounded-2xl p-4 w-full h-full  flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h1 className="text-black font-bold text-lg">Invoice Overview</h1>
        <ArrowUpRight size={30} className="border border-lightGrey rounded-full p-1.5 size-8" />
      </div>

      <div className="flex justify-center items-center">
        <PieChart width={250} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm leading-0">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-darkGrey">{item.name}:</span>
            <span className="text-darkGrey">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
