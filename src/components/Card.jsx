import { Link } from 'react-router-dom'
import '../styles/Card.css'

export default function Card({hote}){

	return(
				<Link to={`./logement/${hote.id}`} className='card-hote'>
					<div key={hote.id} className='card-item'>					
						<div >
						   <img src={hote.cover} alt='{hote.title}' className='card-img'/>
						   <h2 className="card-title" >{hote.title}</h2>
						</div>
					</div>
				</Link>		
	)
}

