import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import HighlightedText from '../components/core/Homepage/HighlightedText'
import CTAButton from "../components/core/Homepage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/Homepage/CodeBlocks"
import InstructorSection from '../components/core/Homepage/InstructorSection'
import LearningCards from '../components/core/Homepage/LearningCards'
import TimelineSection from '../components/core/Homepage/TimelineSection'

const Home = () => {
  return (
    <div>
      {/*Section1  */}
      <div className='relative mx-auto flex flex-col w-10/12 max-w-maxContent items-center 
      text-white justify-between mb-10'>

        <Link to={"/signup"}>
            <div className=' group mt-12 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                    <p>Become an Instructor</p>
                    <FaArrowRight />
                </div> 
            </div>

        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your Future with
            <HighlightedText text={"Coding Skills"} />
        </div>

        <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>

        <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"}> 
                Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}> 
                Book a Demo
            </CTAButton>
        </div>

        <div className='mx-3 my-12 relative'>
        <video
            className='w-full h-auto'
            muted
            loop
            autoPlay
        >
        <source src={Banner} type="video/mp4" />
        </video>
        <div className="absolute right-0 bottom-0 w-3 h-full bg-yellow-50 shadow-md"></div>
        <div className="absolute right-0 bottom-0 w-full h-3 bg-yellow-50 shadow-md"></div>
        </div>

        {/* Code Section 1 */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightedText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<div>\n<h1>Hello There</h1>\n</div>\n</body>\n</html>`}
                codeColor={"text-yellow-25"}
                backgroudGradient={{
                    start: "yellow", // Change this to your desired starting color
                    end: "orange",   // Change this to your desired ending color
                  }}

            />
        </div>

        {/* Code Section 2 */}
        <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightedText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<div>\n<h1>Hello There</h1>\n</div>\n</body>\n</html>`}
                codeColor={"text-yellow-25"}
            />
        </div>

      </div>

      {/*Section 2  */}
      <div className='bg-pure-greys-5 text-richblack-700  '>
            <div className='homepage_bg h-[200px]'>
                    <div className='w-10/12  max-w-maxContent flex flex-col gap-5 items-center justify-center mx-auto'>
                        <div className='h-[80px]'></div>
                        <div className='flex gap-10 text-white '>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex gap-3 items-center'>
                                    Explore the catalog
                                    <FaArrowRight></FaArrowRight>
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div className='flex gap-3 items-center'>
                                    Learn More
                                </div>
                            </CTAButton>
                        </div>
                    </div>
            </div>
        
            <div className='flex mx-auto w-10/12 mt-10 gap-10  '>
                    <div className='text-3xl font-bold w-1/2 '>
                        Get the skill you need for a 
                        {" "}
                        <HighlightedText text={"job that is in demand"}/>
                    </div>
                    <div className=' flex flex-col justify-between items-start gap-4'>
                        <div className='font-[14px] '>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quisquam.lorem2 
                        </div>
                        <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
                    </div>
            </div>

           <TimelineSection/>

            <div className='flex  flex-col gap-5 mt-12 mx-auto items-center justify-center w-10/12 max-w-maxContent'>
                <div className='text-3xl font-bold'>Your Swiss knife of {" "}
                    <HighlightedText text={"learning any language"}/>
                </div>
                <p className='text-[14px] text-center tracking-[1px]'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, illum Lorem ipsum dolor <br/>sit amet consectetur adipisicing elit. Impedit, hic?!
                </p>
            </div>

            <LearningCards/>

            <div  className='bg-pure-grays-5 h-40 flex items-center justify-center '>
                <div className=' flex justify-center items-center  w-10/12'>
                    <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
                </div>
            </div>
        </div>  

        <InstructorSection/>
                

      {/*Section 3 */}


      {/*Footer */}


    </div>
  )
}

export default Home
