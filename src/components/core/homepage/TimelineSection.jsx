import React from 'react'
import TimelineImage from '../../../assets/Images/TimelineImage.png';
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"


const TimelineSection = () => {
  return (
    <div>
         <div className='mt-16 flex mx-auto w-10/12 max-w-maxContent gap-10'>
            <div className='flex flex-col w-1/2 gap-8 m-5'>
            <div className='flex gap-8'>
                    {/* <FiUser className='h-12 w-12'></FiUser> */}
                    <img src={Logo1} alt="" className='min-w-[24px]'/>
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-bold'>Leadership</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex gap-8'>
                    {/* <FiUser className='h-12 w-12'></FiUser> */}
                    <img src={Logo2} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-bold'>Responsibility</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex gap-8'>
                    {/* <FiUser className='h-12 w-12'></FiUser> */}
                    <img src={Logo3} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-bold'>Flexibility</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='flex gap-8'>
                    {/* <FiUser className='h-12 w-12'></FiUser> */}
                    <img src={Logo4} alt="" />
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-bold'>Solve the problem</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div>
            <img src={TimelineImage} alt="Alt text" className='h-[400px] w-[720px] ' />
            </div>
            </div>
    </div>
  )
}

export default TimelineSection