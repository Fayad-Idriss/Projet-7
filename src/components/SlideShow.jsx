import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import * as dataL from '../datas/dataL.json'
import flecheH from '../assets/flecheH.png';
import fleche from '../assets/fleche.png';
import '../styles/SlideShow.css';


export default function Slideshow() {
    // On récupère l'id du logement dans l'URL
    const params = useParams()
    const id = params.id

    // On utilise la méthode find afin de récupérer la/les photo(s) correspondante(s) au  
    // logement séléctionné, grace à l'id de celui-ci dans le tableau Apartments (fichier json)
    const allApartsPics = dataL.default.find(element => element.id === id).pictures
    const picNumber = allApartsPics.length
    // On appelle le Hook "useState" permettant l'utilisation d'un état local à l'intérieure
    // de la variable "onScreenPic" que l'on initialise à "0" et que l'on modifiera à l'aide 
    // de la fonction "movePic" 
    const [onScreenPic, movePic] = useState(0)

    // On déclare une constante permettant d'afficher la photo précédente
    // On utilise un ternaire pour décrémenter sur la photo affichée, en  
    // prenant en compte de revenir à la dernière lorsque l'on est sur la 1ere
    const previousPic = () => {
        movePic(onScreenPic === 0 ? picNumber - 1 : onScreenPic - 1)
    }

    // Sur cette contante on incrémente sur la photo affichée en prenant en
    // en compte que "picNumber" est un objet sans index contrairement à notre 
    // tableau "onScreenPic", on lui retire 1 afin que cela puisse correspondre
    const nextPic = () => {
        movePic(onScreenPic === picNumber - 1 ? 0 : onScreenPic + 1)
    }

    // On utilise une condition pour définir un affichage sans "flèches" ni "bulletpoints" quand il n'a
    // qu'un seule photo, ou un affichage avec ces éléments lorsqu'il y en a plusieurs à faire défiler
    if(picNumber === 1) {
        return (
           
            <div className='slideshow'>
            {/* On utilise la méthode "map" pour récupérer les photos des logements et leur index
            On utilise ensuite un ternaire rendant actif ou non l'affichage de la photo 
            Enfin on déclare une condition pour afficher une photo en fonction de son index */}
            {allApartsPics.map((pics, index) => {
                return(
                    <div key={id + pics + index} className={index === onScreenPic ? 'active' : 'inactive'}>
                        {index === onScreenPic && (
                            <img className='slideshow-pic' src={pics} alt="Photos de l'apartement" />
                        )}
                    </div>
                )
            })}    
            </div>
         
        )
    } else {
        return (
            <div className='slideshow'>
                {/* On insère les flèches et on y inclu l'évenement "onClick" auquel on passe nos constantes */}
                <img className='leftVector' src={flecheH} alt='logo précédent' onClick={previousPic}/>
                <img className='rightVector' src={fleche} alt='logo suivant' onClick={nextPic}/>
                {/* On insère également les bulletpoints */}
                <p>{onScreenPic + 1}/{picNumber}</p>

                {allApartsPics.map((pics, index) => {
                    return(
                        <div key={id + pics + index} className={index === onScreenPic ? 'active' : 'inactive'}>
                        {index === onScreenPic && (
                            <img className='slideshow-pic' src={pics} alt="Photos de l'apartement" />
                        )}
                    </div>
                    )
                })}
            </div>
        )
    }
}