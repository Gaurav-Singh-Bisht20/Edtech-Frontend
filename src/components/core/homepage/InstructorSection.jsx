import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png";
import {FaArrowRight} from "react-icons/fa"
import CTAButton from "../Homepage/Button"
import HighlightedText from './HighlightedText';


const InstructorSection = () => {
  return (
    <div>
        <div className='w-10/12  flex gap-10 max-w-maxContent mx-auto '>
                <div className='w-1/2'>
                <img src= {Instructor} alt="" className='m-5 h-[445px]' />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='h-[120px]'></div>
                    <div className='text-3xl text-white font-bold'>
                        Become an {" "} 
                        <HighlightedText text={"Instructor"}/>
                    </div>
                    <p className='font-bold text-white text-[14px]'>Lorem, ipsum dolor sit amet consectetur<br></br> adipisicing elit. Quidem, consequuntur?</p>
                    <div className ='flex items-end justify-start mt-4'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3'>
                            Start teaching today
                            <FaArrowRight/></div>
                        </CTAButton>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default InstructorSection