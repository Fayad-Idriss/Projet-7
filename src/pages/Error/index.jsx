import Banner from "../../components/Banner"
import "./style.css"
import error from "../../assets/error.png"
import {Link} from "react-router-dom"




function PageError(){
  return(
    <div>
      <Banner />
      <div className="error">
        <img src={error} alt='erreur404' className="error404"/>
      </div>
      <div className="oups">
        <h1 className="oups-h1">Oups! La page que vous demandez n'existe pas</h1>
      </div>
      <div classname="return">
        <Link to="/" className="b">Retourner sur la page d'acceuil</Link>
      </div>
    </div>
  )
}

export default PageError