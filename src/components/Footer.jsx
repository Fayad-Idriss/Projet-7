import vectorKB from '../assets/VectorKB.png'
import vectorYB from '../assets/VectorYB.png'
import vectorSB from '../assets/VectorSB.png'
import vectorAB from '../assets/VectorAB.png'
import TitreEnd from '../assets/TitreEnd.png'

import '../styles/Footer.css'

function Footer(){
    return(
        <footer>
            <div className='kasa-footer'>
            <img src={vectorKB} alt='La maison jungle' className='lmj-logo-footer' />
                <img src={vectorYB} alt='La maison jungle' className='logo-footer' />
                <img src={vectorSB} alt='La maison jungle' className='logo-footer' />
                <img src={vectorAB} alt='La maison jungle' className='logo-footer' />
            </div>
            <div className='text-img'>
            <img src={TitreEnd} alt='La maison jungle' className='footer-text' />
               
            </div>
        </footer>
    )

} 


export default Footer