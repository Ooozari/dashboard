'use client';
import { Cell, Pie, PieChart, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function DonutChart() {
  return (
    <div className="w-full flex justify-center">
      <PieChart width={370} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

 
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
            textAlign: 'center',
          }}
        />

        {/* Optional: Custom tooltip */}
        <Tooltip
          wrapperStyle={{

            backgroundColor: '#ff0000',
          }}
        />
      </PieChart>
    </div>
  );
}
