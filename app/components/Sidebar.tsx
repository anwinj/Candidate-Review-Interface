import Image from 'next/image'
import React from 'react'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = () => {
  return (
    <div className='px-7 py-6 flex flex-col'>
        <div className='flex justify-start items-baseline'>
            <Image src="/Images/logo.png" width={40} height={40} alt="logo" />
            <h1 className='font-semibold ms-1 text-sm'>Hi, AltWorld</h1>
        </div>

        <hr className='mt-5' />

        <div className='mt-6 flex justify-start items-center'>
          <div className='p-2 bg-slate-50 rounded-full'><FontAwesomeIcon icon={faHouse} className=' w-4 text-teal-400' /></div>
          <p className='text-xs font-bold ms-2'>Dashboard</p>
        </div>
        
        <div className='bg-teal-400 flex justify-start flex-col p-3 rounded-lg mt-7'>
          <button className='p-2 w-8 bg-slate-50 rounded-xl'><FontAwesomeIcon icon={faPlus} className=' w-4 text-slate-500' /></button>
          <p className='text-slate-50 text-sm mt-4 font-medium'>New Assignment?</p>
          <p className='text-slate-50 text-xs lg:max-w-52 mt-2'>Select from pre-defined questions to have a quick turnaround</p>
          <button className='px-3 py-2 bg-slate-50 rounded-lg mt-3 text-xs font-bold'>Create New Assignment</button>
        </div>

    </div>
  )
}

export default Sidebar