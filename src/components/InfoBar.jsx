import '../styles/InfoBar.css'
import fleche from '../assets/fleche.png'
import flecheH from '../assets/flecheH.png'
import { useState } from 'react'



function Info (props){
    
    const [isOpen, isCLose] = useState(false)
    function toggle(){
        isCLose(!isOpen)
    }
    return (
        <div className='div-bar'>
            <div className='info-bar' onClick={toggle}>
            <div className='bar'>
                <p className='bar-fiable'>
                   {props.title}
                </p>
               {isOpen ? <img src={flecheH} alt='fleche' className="bar-fleche"/> : <img src={fleche} alt='fleche' className="bar-fleche"/> } 
            </div>
            { isOpen ? <div className='info-text'> {props.description}  </div> : "" } 
            </div>
        </div>
    )
}



export default Info






