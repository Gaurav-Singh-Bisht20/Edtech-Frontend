import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import HighlightedText from '../components/core/Homepage/HighlightedText'
import CTAButton from "../components/core/Homepage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/Homepage/CodeBlocks"

const Home = () => {
  return (
    <div>
      {/*Section1  */}
      <div className='relative mx-auto flex flex-col w-10/12 max-w-maxContent items-center 
      text-white justify-between'>

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
                

      {/*Section 3 */}


      {/*Footer */}


    </div>
  )
}

export default Home
