'use client'
import React, { useEffect, useState } from 'react'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Candidates from './Candidates'

const Assignment = () => {

  const [assignment,setAssignment] = useState<{title: string; status: string;link: string;id: string;ends_at: number; duration_in_seconds:number}>({title: '',status: '',link: '',id: '',ends_at: 0,
  duration_in_seconds:0})

  const getAssignmentDetails = async ()=>{
    const res = await fetch('https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_details')
    setAssignment(await res.json())
  }

  useEffect(()=>{
    getAssignmentDetails()
  },[])

  return (
    <div className='p-3'>
      <div className='flex justify-between items-center'>
        <p className='font-bold'>{assignment.title}</p>
        <div className='flex items-center text-green-500 font-bold'>{assignment.status}<button className='p-2 shadow rounded ms-2 border'><FontAwesomeIcon icon={faPenToSquare} className=' w-3 text-slate-500' /></button></div>
      </div>

      <div className="flex justify-between mt-3">
        <p className='text-sm font-medium text-slate-500'>Assignment Link</p>
        <Link href="/" className='text-sm font-medium text-blue-500'>{assignment.link}</Link>
      </div>

      <div className="flex justify-between mt-2">
        <p className='text-sm font-medium text-slate-500'>Assignment Hour</p>
        <p className='text-sm font-medium text-slate-500'>{assignment.duration_in_seconds/3600}</p>
      </div>

      <div className="flex justify-between mt-2">
        <p className='text-sm font-medium text-slate-500'>Assignment Ends at</p>
        <p className='text-sm font-medium text-slate-500'>{assignment.ends_at}</p>
      </div>

      <Candidates/>
      
    </div>
  )
}

export default Assignment