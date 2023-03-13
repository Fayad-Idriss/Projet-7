import React from "react"
import Slideshow from "../../components/SlideShow.jsx"
import Rating from "../../components/stars.jsx"
import Footer from "../../components/Footer.jsx"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse.jsx"
import {dataLodgings}  from "../../datas/data"
import "./index.css"

export default function PageLogement(){
    let {id} = useParams()
    const logement = dataLodgings.getOne(id)
    const logementRating = logement.rating


   const Navigate = useNavigate();
    
    if(logement === undefined){
         Navigate('/') 
    }else{ 

        return(
    
            <div>             
                <Banner />             
                 <div>
                    <Slideshow />
                    <div className="page-corp">
                       <div className="corp">                         
                          <h1 className="corp-title"> {logement.title} </h1>
                          <h5 className="corp-ville"> {logement.location} </h5>

                          <div className="housing">
                               <div className="localisation-1">
                                  {/* On récupère les éléments tag et leur index via la 
                                  méthode "map" afin de les affficher sur la page */}
                                  {logement?.tags.map((tag, index) => {
                                      return(
                                          <div className="housing-location-tags-tag" key={id + tag + index}>
                                              {tag}
                                          </div>
                                    )
                                   })}
                               </div>           
                          </div>
                        </div>

                          <div className="housing-infos">
                           <div className="housing-infos-host">
                               <p>{logement?.host.name}</p>
                               <img className='housing-infos-host-img' src={logement?.host.picture} alt="Hôte du logement" />
                           </div>
                           <div className="housing-infos-rating">
                               {/* On intègre le composant "Rating" auquel on passe les props
                               "ratingArray" et "maxRate" afin d'afficher la note du logement */}
                               
                                <Rating 
                                    ratingArray={logementRating} 
                                    maxRate={"5"} 
                                />
                         
                           </div>
                       </div>
                    </div>
                    
                 
                   <div className="housing-collapses">
                      
                    <div className="housing-collapse-description">
                        <Collapse 
                          title={'Description'}
                          description={logement.description}

                        />
                    </div>
                    <div className="housing-collapse-fittings">
                        
                        <Collapse

                          title={'Équipements'}
                          description={logement.equipments.map((equipment, index)=>(<div key={index}>{equipment}</div>))}
                        />
                    </div>
                    </div>

            </div>
                <Footer />
            </div>
        )
    }    
}


