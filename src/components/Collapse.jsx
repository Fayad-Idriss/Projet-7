import '../styles/Collapse.css'
import fleche from '../assets/fleche.png'
import flecheH from '../assets/flecheH.png'
import { useState } from 'react'



function Collapse (props){
    
    const [isOpen, isCLose] = useState(false)
    function toggle(){
        isCLose(!isOpen)
    }
    return (
        <div className='div'>
            <div className='div-bar' onClick={toggle}>
            <div className='div-info'>
                <p className='div-info-title'>
                   {props.title}
                </p>
               {isOpen ? <img src={flecheH} alt='fleche' className="fleche"/> : <img src={fleche} alt='fleche' className="fleche"/> } 
            </div>
            { isOpen ? <div className='info-description'> {props.description}  </div> : "" } 
            </div>
        </div>
    )
}



export default Collapse






