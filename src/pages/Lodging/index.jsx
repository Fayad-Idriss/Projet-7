import React from "react"
import Footer from "../../components/Footer.jsx"
import { useParams } from "react-router-dom"
import Error from "../Error/index"
import Banner from "../../components/Banner"
import Info from "../../components/InfoBar.jsx"
import {dataLodgings}  from "../../datas/data"
import "./index.css"

export default function PageLogement(){
    let {id} = useParams()
    const logement = dataLodgings.getOne(id)
    console.log(logement)

    if (!logement ){
        return <Error />
    }else{   

        return(

    
            <div>
             
                <Banner />
                 <div>
                    <div className="corp">

                       <img src={logement.pictures} alt='' />
                       <h1 className="corp-title"> {logement.title} </h1>
                       <h5 className="corp-ville"> {logement.location} </h5>
                    </div>
             
                    <div className="localisation">
                       <div className="localisation-1">Cuisine</div>
                       <div className="localisation-2">Frigo</div>
                    </div>

                    <div>
                       <Info 
                
                       />
                       <Info 
                
                       />
                    </div>

            </div>
                <Footer />
            </div>
        )
        
    } 
   
 
}

