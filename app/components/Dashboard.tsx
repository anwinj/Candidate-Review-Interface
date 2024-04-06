import React from 'react'
import Assignment from './Assignment'
import CandidateDetails from './CandidateDetails'

const Dashboard = () => {
  return (
    <div className='p-5 w-full'>
      <div>
        <p className='text-xs font-medium text-slate-400'>Pages <span className='text-slate-950'>/ Assignment</span></p>
        <p className='text-sm font-bold mt-1'>Sales BDE</p>
      </div>

      <div className='lg:flex mt-4'>
        <div className='lg:w-2/6 h-fit bg-slate-50 rounded-2xl mb-4'>
          <Assignment/>
        </div>
        <div className='lg:w-4/6 h-fit bg-slate-50 lg:ms-4 rounded-2xl'>
          <CandidateDetails/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard