import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import HighlightedText from '../components/core/homepage/HighlightedText';
import CTAbutton from '../components/core/homepage/CTAbutton';

const Home = () => {
  return (
    <div>
    {/*Section1*/}
    <div className ="relative mx-auto flex  flex-col items-center w-8/12 text-white  bg-richblack-800 h-screen " >
        <Link to={"/signUp"}>
        <div className='mt-12 p-1 rounded-full bg-richblack-800 transition-all duration-200 group '>
            <div className='px-8 py-2 flex items-center font-bold gap-2 text-richblack-200 group-hover:bg-richblack-900 rounded-full '>
                <p>become an Instructor</p>
                <FaLongArrowAltRight/>
            </div>
        </div>
            
        </Link>

        <div className='mt-5 text-4xl'>
          <h1 className='font-bold'>Empower your future with  <HighlightedText text = {"EDUXCEL"}/></h1>
        </div>

        <div className='mt-4 text-lg  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptatum alias obcaecati perferendis <br/> nisi perspiciatis repellat exercitationem accusamus nobis, distinctio esse quam aperiam aliquam ratione.</div>

        <div className='flex mt-5 gap-5'>
          <CTAbutton active={true} linkto={"/signUp"}>Leran More</CTAbutton>
          <CTAbutton linkto={"/signUp"} active={false}>Book a Demo</CTAbutton>
        </div>

    </div>
    {/*Section2*/}
    {/*Section3*/}
    {/*Section4*/}
    </div>
  )
}

export default Home