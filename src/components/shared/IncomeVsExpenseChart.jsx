'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', income: 18000, expense: 12000 },
  { month: 'Feb', income: 22000, expense: 15000 },
  { month: 'Mar', income: 26000, expense: 17000 },
  { month: 'Apr', income: 24600, expense: 13290 },
  { month: 'May', income: 27000, expense: 19000 },
  { month: 'Jun', income: 31000, expense: 22000 },
  { month: 'Jul', income: 29500, expense: 21000 },
];
import { FunnelPlus, ArrowUpRight } from 'lucide-react'

// Custom Tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const income = payload.find(p => p.dataKey === 'income');
    const expense = payload.find(p => p.dataKey === 'expense');

    return (
      <div className="bg-gray-100 p-2 rounded shadow text-xs space-y-1">
        {income && <p>Income: ${income.value.toLocaleString()}</p>}
        {expense && <p>Expense: ${expense.value.toLocaleString()}</p>}
      </div>
    );
  }

  return null;
};

export default function IncomeVsExpenseChart() {
  return (
    <div className="bg-white rounded-2xl w-full h-full p-4 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h1 className="text-black font-bold text-lg">Income vs Expense</h1>
        <div className='flex gap-1.5'>
          <ArrowUpRight size={30} className="border border-lightGrey rounded-full p-1.5 size-8" />
          <FunnelPlus size={30} className='border-1 border-lightGrey rounded-full p-1.5 size-8' />
        </div>
      </div>

      <div className='flex justify-center items-center'>

    
      <ResponsiveContainer width={330} height={200}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1E90FF" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#1E90FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFA500" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#FFA500" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />

          <Tooltip content={<CustomTooltip />} />

          <Area type="monotone" dataKey="income" fill="url(#colorIncome)" stroke="none" />
          <Area type="monotone" dataKey="expense" fill="url(#colorExpense)" stroke="none" />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#1E90FF"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#FFA500"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
        </div>
    </div>
  );
}
