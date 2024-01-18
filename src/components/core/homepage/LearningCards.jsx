import React from 'react'
import Know_your_progress from '../../../assets/Images/Know_your_progress.png';
import  Plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png';
import Compare_with_others from '../../../assets/Images/Compare_with_others.png';


const LearningCards = () => {
  return (
    <div>
        <div className='flex gap-5 mt-16 mx-auto items-center justify-center w-10/12 max-w-maxContent'>
                <img src={Know_your_progress} alt="" className='z-0 w-[30%] max-w-[400px]' />
                <img src={Compare_with_others} alt="" className='z-1  w-[30%] max-w-[400px]' />
                <img src={Plan_your_lessons} alt="" className='z-2  w-[30%] max-w-[400px]' />               
        </div>
    </div>
  )
}

export default LearningCards