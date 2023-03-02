import '../styles/Banner.css'
import vectorK from '../assets/VectorK.png'
import vectorJ from '../assets/VectorJ.png'
import vectorS from '../assets/VectorS.png'
import vectorA from '../assets/VectorA.png'

import {Link} from "react-router-dom"

function Banner() {
    return (
        <header>
           <div className='nav-image'>
                <p>
                <img src={vectorK} alt='La maison jungle' className='lmj-logo' />
                <img src={vectorJ} alt='La maison jungle' className='lmj-logo' />
                <img src={vectorS} alt='La maison jungle' className='lmj-logo' />
                <img src={vectorA} alt='La maison jungle' className='lmj-logo' />
                </p>
            </div>
            <div className='nav' >
                <Link to="/"  className='accueil'>
                    Accueil
                </Link>
                <Link to="/A_Propos"  className='propos'>
                    A Propos
                </Link>
            </div>
        </header>
    )
}

export default Banner