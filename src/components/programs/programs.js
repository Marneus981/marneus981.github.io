import React from 'react'
import './programs.css'
// Change into projects?
import program1 from '../../assets/placeholder/program1.png'
import program2 from '../../assets/placeholder/program2.png'
import program3 from '../../assets/placeholder/program3.png'
import program_icon1 from '../../assets/placeholder/program_icon1.png'
import program_icon2 from '../../assets/placeholder/program_icon2.png'
import program_icon3 from '../../assets/placeholder/program_icon3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program1} alt="" />
            <div className='caption'>
                <img src={program_icon1} alt="" />
                <p>Look at this dude1</p>
            </div>
        </div>
        <div className='program'>
            <img src={program2} alt="" />
            <div className='caption'>
                <img src={program_icon2} alt="" />
                <p>Look at this dude2</p>
            </div>
        </div>
        <div className='program'>
            <img src={program3} alt="" />
            <div className='caption'>
                <img src={program_icon3} alt="" />
                <p>Look at this dude3</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
