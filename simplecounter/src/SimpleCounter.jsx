import React, { useState } from 'react';
import { Button } from '@mui/material';

const SimpleCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
           <div className=' w-full flex justify-center items-center h-screen'>
           <div className=" text-center bg-white shadow-2xl rounded-lg p-10 flex-col">
            <h1 className='text-4xl mb-6'>Simple Counter</h1>
              <h2 className='text-black text-center text-3xl mb-10'>Count:{count}</h2>
               <div className="flex  gap-2 ">
                 <Button variant="contained" className='mr-2' color="primary" onClick={() => setCount(count + 1)}>Increase</Button>
                <Button variant="contained" color="primary" onClick={() => setCount(0)}>Reset</Button>
                <Button variant="contained" color="primary" onClick={() => setCount(count - 1)}>Decrease</Button>

               </div>
           </div>
           </div>
        </>
    )
}

export default SimpleCounter