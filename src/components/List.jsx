import { useEffect, useState } from 'react'
import { dataLodgings } from '../datas/data'
import { Link } from 'react-router-dom'
import '../styles/List.css'

export default function List(){
	const [logs, setLogs] = useState([])
	useEffect(() => {
		setLogs(dataLodgings.getAll())
	},[])
	return(

		<div className="list">
			{logs.map((hote) => (
				<Link to={`./logement/${hote.id}`} className='list-hote'>
					<div key={hote.id} className='list-item'>					
						<div >
						   <img src={hote.cover} alt='{hote.title}' className='hote-img'/>
						   <h2 className="list-titre" >{hote.title}</h2>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

