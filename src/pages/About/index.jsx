import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"
import kalen from "../../assets/kalen.png"
import Footer from "../../components/Footer"
import * as collapse from "../../datas/collapse.json"
import "./style.css"



const allDatas = collapse.default


function Apropos(){
    return(
        <div>
           <Banner />
           <div className="about">
              <div className="about-div">
                  <img src={kalen} alt='kalen' className="about-div-img"/>
              </div>
           </div>
           {allDatas.map((element) => (
                <Collapse 
                    key={element.id}
                    title={element.title}
                    description={element.description}
                />          
            ))}  
            <Footer />
           
        </div>
    )
}



export default Apropos