import React from 'react'
import RenderSteps from './RenderSteps'

const AddCourse = () => {
  return (
    <div className='text-white'>
        <div>
            <h1>Add courses</h1>
            <div>
                <RenderSteps/>
            </div>
        </div>
        <div>
            <p>Code Upload Tips</p>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
            </ul>
        </div>
    </div>
  )
}

export default AddCourse