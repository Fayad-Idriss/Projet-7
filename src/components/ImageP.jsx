import '../styles/ImageP.css'
import Background from '../assets/Background.png'

function ImageP(){
    return(
        <div className="img">
            <div className='test'>
               <img src={Background} alt='La maison jungle' className='lmj-image' />
               <p className='text'>Chez vous, partout et ailleurs</p>
            </div>
           
        </div>
    )
}

export default ImageP