import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
// import fetchCourseCategories from
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
const CourseInfoForm = () => {

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState:{errors},
  } = useForm();

  const dispatch = useDispatch();
  const {course,editCourse} = useSelector((state)=>state.course);
  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(()=>{
    // const getCategories = async ()=>{
    //   setLoading(true);
    //   const categories = await fetchCourseCategories();
    //   if(categories.length >0){
    //     setCourseCategories(categories)
    //   }
    //   setLoading(false);
    // }
    if(editCourse){
      setValue("courseTitle",course.courseName);
      setValue("courseShortDesc",course.courseDescription);
      setValue("coursePrice",course.Price);
      setValue("courseTag",course.tag);
      setValue("courseBenefits",course.whatWillYouLearn);
      setValue("courseCategory",course.category);
      setValue("courseRequirements",course.instructions);
      setValue("courseImage",course.thumbnail);
    }
    // getCategories();
  },[])

  const onSubmit = async(data)=>{

  }
  return (
    <div className='text-white'>
      <h1>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className='rounded-md border-richblack-700 bg-richblack-800 p-6 space-y-6'
        >
          <div>
            <label htmlFor="courseTitle">Course Title <sup>*</sup></label>
            <input type="text"
            id='courseTitle'
            placeholder='enter course title'
            {...register("courseTitle", {required:true})}
            className='w-full'
            />
            {
              errors.courseTitle && (
                <span>Course Title is Required **</span>
              )
            }
          </div>
          <div>
            <label htmlFor="courseDescription">Course Short Description</label>
            <textarea name=""
             id="courseDescription" cols="30" 
             rows="4"
             placeholder='enter description'
             {...register("courseDescription",{required:true})}
             className='w-full min-h-[140px]'
             ></textarea>
             {
              errors.courseDescription && (
                <span>Course description is required</span>
              )
             }
          </div>

          <div className='relative'>
            <label htmlFor="coursePrice">coursePrice</label>
            <input name=""
             id="coursePrice" cols="30" 
             rows="4"
             placeholder='enter course price'
             {...register("coursePrice",{required:true,valueAsNumber:true})}
             className='w-full '
             ></input>
             <HiOutlineCurrencyRupee className='absolute top-[-1] text-richblack-600'/>
             {
              errors.coursePrice && (
                <span>Course price is required</span>
              )
             }
          </div>

          <div>
            <label htmlFor="courseCategory">Course Category <sup>*</sup></label>
            <select id="courseCategory"
            defaultValue=""
            {...register ("courseCategory",{required:true})}>
              <option value="" disabled>Choose a category</option>
              {
                !loading && courseCategories.map((category,index)=>{
                  <option key={index} value={category?._id}>
                    {category?.name}
                  </option>
                })
              }
            </select>
            {
              errors.courseCategory(
                <span>course category is required</span>
              )
            }
          </div>
        </form>
      </h1>
    </div>
  )
}

export default CourseInfoForm