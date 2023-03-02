import Banner from "../../components/Banner"
import Info from "../../components/InfoBar"
import kalen from "../../assets/kalen.png"
import Footer from "../../components/Footer"
import * as collapse from "../../datas/collapse.json"
import "./style.css"


const allDatas = collapse.default


function Apropos(){
    return(
        <div>
           <Banner />
           <div className="kalen">
              <img src={kalen} alt='kalen' className="kalen-img"/>
           </div>
           {allDatas.map(({ title, id, text }) => (
                <Info 
                    key={title + id}
                    title={title}
                    id={id}
                    text={text}
                />          
            ))}  
            <Footer />
           
        </div>
    )
}



export default Apropos