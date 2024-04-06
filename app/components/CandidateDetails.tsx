'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/context'

const CandidateDetails = () => {

  const {userid,setUserid} = useAppContext();
  const [userDetails,setUserDetails] = useState<{full_name: string; email: string;about_me: string;experience: string;hobbies: string;introduction: string,score: number,scores:any}>({full_name: '',email: '',about_me: '',experience: '',hobbies:'',introduction:'',score: 0,scores:[]})

  const getUserDetails = async()=>{
    // console.log(userid);
    if(userid){
      const res = await fetch(`https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/candidate_assignment_data?user_id=${userid}&assignment_id=assignment123`,{cache:'no-store'})
      setUserDetails(await res.json())
      // console.log(userDetails);
    }
    else{
      const res = await fetch(`https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/candidate_assignment_data?user_id=1&assignment_id=assignment123`,{cache:'no-store'})
      setUserDetails(await res.json())
    }
      
  }

  useEffect(()=>{
    getUserDetails()
  },[userid])

  return (
    <div className='flex flex-wrap lg:flex-nowrap p-4'>
      <div className='p-4'>
        {/* name and image */}
        <div className='flex justify-between items-center mb-8'>
          <div className='flex items-center'>
            <Image className='rounded-xl' src="/Images/photo-placeholder.jpg" alt="" width={80} height={80}/>
            <div className='ms-3'>
              <p className='font-bold'>{userDetails.full_name}</p>
              <p className='text-slate-500  text-sm'>{userDetails.email}</p>
            </div>
          </div>
          <div>
            <p className='text-3xl text-green-600 font-semibold'>{userDetails.score}%</p>
          </div>
        </div>

        {/* bar values */}
        {
          userDetails.scores.map((value:any,index:number)=>(
            <div key={index} className='flex lg:flex-nowrap sm:flex-wrap sm:w-full justify-between items-center mb-5'>
              <p className='text-sm text-slate-500 me-10 font-semibold'>{value.score_type}</p>
              <div className='flex items-center'>
                <div className=" bg-gray-100 rounded-full h-2.5 w-20 lg:w-60 ">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${value.user_score*10}%`}} ></div>
              </div>
              <p className='text-green-600 font-bold ms-2'>{value.user_score}/10</p>
              </div>
            </div>
          ))
        }

        {/* About experience Hobbies introduction */}
        <div className='mt-6'>
          <p className='font-bold'>About</p>
          <p className='text-slate-500 text-sm mt-2'>{userDetails.about_me}</p>
        </div>

        <div className='mt-4'>
          <p className='font-bold'>Experience</p>
          <p className='text-slate-500 text-sm mt-2'>{userDetails.experience}</p>
        </div>

        <div className='mt-6'>
          <p className='font-bold'>Hobbies</p>
          <p className='text-slate-500 text-sm mt-2'>{userDetails.hobbies}</p>
        </div>

        <div className='mt-6'>
          <p className='font-bold'>Introduction</p>
          <p className='text-slate-500 text-sm mt-2'>{userDetails.introduction}</p>
        </div>

        <div className='flex justify-center mt-5'><button className='bg-teal-400 text-slate-50 px-10 py-1 rounded-xl font-bold'>SHORTLIST</button></div>

      </div>
      <div>
        <Image className='rounded-xl' src="/Images/image.jpg" alt="" width={350} height={600}/>
      </div>
    </div>
  )
}

export default CandidateDetails