import React from 'react';
import Link from 'next/link';
function Icons({ Icon, size = 16 }) {
  return (
    <Link href='/'>
    <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center  hover:bg-Black group cursor-pointer'>
      <Icon size={size} className="text-Grey group-hover:text-White" />
    </div>
    </Link>
    
  );
}

export default Icons;
