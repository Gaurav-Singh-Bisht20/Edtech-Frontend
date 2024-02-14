import React from 'react'
import { useSelector } from 'react-redux'
import CourseInfoForm from './CourseInfo/CourseInfoForm'
import { FaCheck } from "react-icons/fa";


const RenderSteps = () => {
  const {step}= useSelector((state)=>state.course)

  const steps =[
    {
      id:1,
      title:"Course Information"
    },
    {
      id:2,
      title:"Course builder"
    },
    {
      id:3,
      title:"Publish"
    }
  ]
  return (<div>
   <div>
  {steps.map((item) => (
    <div className={`${step === item.id ? "bg-yellow-900 border-yellow-25 text-yellow-50" : "border-richblack-700 bg-richblack-800 text-richblack-300"}`}>
      {
        step > item.id ? (<FaCheck />) : (item.id)
      }
    </div>
  ))}
  </div>

    <div>
      {steps.map((item)=>{
        <div>
          <p>{item.title}</p>
        </div>
      })}
    </div>
    {
      step===1 && <CourseInfoForm/>
    }
    {/* {
      step===2 && <CourseBuilderForm/>
    }
    {
      step===3 && <PublishCourse/>
    } */}
  </div>
  )
}

export default RenderSteps