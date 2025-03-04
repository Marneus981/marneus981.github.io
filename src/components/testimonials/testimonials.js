import React from 'react'
import './testimonials.css'
import next_icon from '../../assets/placeholder/next_icon.png'
import back_icon from '../../assets/placeholder/back_icon.png'
import user1 from '../../assets/placeholder/user1.png'
import user2 from '../../assets/placeholder/user2.png'
const Testimonials = () => {

        const slider = React.useRef();
        let tx = 0;

    const slideBackward = () => {
        if (tx > -50) {
            tx -= 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideForward = () => {
        if (tx < 0) {
            tx += 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={back_icon} alt="" className='back_btn' onClick={slideForward}/>
        <img src={next_icon} alt="" className='next_btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref= {slider}>
                <li>
                    <div className='slide'>

                        <div className='user_info'>
                            <img src={user1} alt="" />
                            <div>
                                <h3>U of T babey</h3>
                                <span>Mythical Land of Toronto Canada</span>

                            </div>
                        </div>
                        <p>Pain, joy, discovery. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fugiat incidunt itaque ea fugit corporis corrupti porro mollitia autem sed animi 
                        adipisci ut nesciunt ratione quisquam architecto, quas excepturi, assumenda aut?
                        </p>
                    </div>
                </li>

                <li>
                    <div className='slide'>

                        <div className='user_info'>
                            <img src={user2} alt="" />
                            <div>
                                <h3>U of T babey (Minor)</h3>
                                <span>Mythical Land of Toronto Canada</span>

                            </div>
                        </div>
                        <p>Pain, joy, discovery. AI, ML. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Fugiat incidunt itaque ea fugit corporis corrupti porro mollitia autem sed animi 
                        adipisci ut nesciunt ratione quisquam architecto, quas excepturi, assumenda aut?
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}


export default Testimonials
