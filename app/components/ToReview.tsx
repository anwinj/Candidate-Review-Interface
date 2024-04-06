import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/context'

const ToReview = () => {

    const {userid,setUserid} = useAppContext();
    const [users,setUsers] = useState([])

    const viewReview = async()=>{
        const res = await fetch('https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev/assignment_candidates?status=review&limit=10&offset=0')
        setUsers(await res.json())
        // console.log(users);
    }



    useEffect(()=>{
        viewReview()
    },[])
    

  return (
    <div>
        <div className='flex justify-between px-6 mt-4'>
            <p className='text-slate-400 text-xs font-bold'>CANIDATE</p>
            <p className='text-slate-400 text-xs font-bold'>SCORE</p>
        </div>
            
            {
                users?.map((user:any,index)=>(
                    <div onClick={()=>setUserid(user.id)} key={index} className='cursor-pointer mt-3 flex justify-between px-3 py-1 '>
                        <div className='flex'>
                        <Image className='rounded-2xl' src="/Images/photo-placeholder.jpg" alt="" width={40} height={40} />
                        <div className='ms-2'>
                        <p className='text-sm font-bold'>{user.full_name}</p>
                        <p className='text-xs text-slate-400'>{user.email}</p>
                    </div>
                </div>
                <p className='me-4 text-green-500 font-medium'>{user.score}</p>
            </div>
            ))
            }

        
    </div>
  )
}

export default ToReview