import { useEffect, useState } from 'react'
import { dataLodgings } from '../datas/data'
import { Link } from 'react-router-dom'
import '../styles/Card.css'

export default function Card(){
	const [logs, setLogs] = useState([])
	useEffect(() => {
		setLogs(dataLodgings.getAll())
	},[])
	return(

		<div className="card">
			{logs.map((hote) => (
				<Link to={`./logement/${hote.id}`} className='card-hote'>
					<div key={hote.id} className='card-item'>					
						<div >
						   <img src={hote.cover} alt='{hote.title}' className='card-img'/>
						   <h2 className="card-title" >{hote.title}</h2>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

