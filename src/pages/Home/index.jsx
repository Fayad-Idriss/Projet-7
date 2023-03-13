import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ImageP from '../../components/ImageP'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import '../Home/index.css'
import { dataLodgings } from '../../datas/data'

export default function Home() {
  const [logs, setLogs] = useState([])
  useEffect(() => {
    setLogs(dataLodgings.getAll())
  }, [])

  return (
    <div>
       <Banner />
       <ImageP />
          <div className='card'>
            {
              logs.map((hote) => (
                <Card key={hote.id} hote={hote} />
              ))
            }
          </div>
       
       <Footer />

    </div>
  )
}


