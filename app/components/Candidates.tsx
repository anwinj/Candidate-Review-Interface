'use client'
import React, { useState } from 'react'
import ToReview from './ToReview'
import Shortlisted from './Shortlisted'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Candidates = () => {

  const [showReview, setShowReview] = useState(true)

  const viewShortlist = ()=>{
    setShowReview(false)
  }

  const viewReview = ()=>{
    setShowReview(true)
  }

  return (
    <div>
      <div className='mt-5 flex'>
        <button onClick={viewReview} className={`flex px-3 py-2 text-xs rounded-xl font-bold me-3 ${showReview? 'shadow':'shadow-none'}`}><FontAwesomeIcon icon={faBox} className=' w-3 me-1 text-slate-500' />TO REVIEW</button>
        <button onClick={viewShortlist} className={`flex px-3 py-2 text-xs rounded-xl font-bold ${showReview? 'shadow-none':'shadow'}`}><FontAwesomeIcon icon={faFileCircleCheck} className=' w-3 me-1 text-slate-500' />SHORTLISTED</button>
      </div>

      {
        showReview?
        <div><ToReview/></div>:
        <div><Shortlisted/></div>
      }
    </div>
  )
}

export default Candidates