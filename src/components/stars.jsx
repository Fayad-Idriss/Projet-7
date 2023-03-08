import React from 'react';
import { useParams } from "react-router-dom";
import starG from "../assets/starG.png";
import starR from "../assets/starR.png";
import "../styles/stars.css";

// On passe les props "ratingArray" et "maxRate" à notre composant
// puis on récupère l'id du logement dans l'URL
export default function Rating({ ratingArray, maxRate }) {
    const params = useParams()
    const id = params.id

    // On définit un tableau vide qui contiendra les étoiles de notation
    // ainsi que leur coloration en fonction d'un booléen
    let ratings = []
    let coloredStar = true

    // On boucle de l'indice 0 à "maxRate" correspondant 
    // au nombre d'étoiles maximum défini dans notre prop
    // On utilise des conditions pour afficher le nombre
    // d'étoiles oranges et grises en fonction de la note
    for (let i = 0; i < `${maxRate}`; i++) {
        if (i === parseInt(ratingArray)) {
            coloredStar = false
        }
        if (coloredStar === true) {
            ratings.push(<img key={i + id} className="stars" src={starR} alt={`${ratingArray}/${maxRate}`} />)
        } else {
            ratings.push(<img key={i + id} className="stars" src={starG} alt={`${ratingArray}/${maxRate}`} />)
        }
    }
    return ratings
};