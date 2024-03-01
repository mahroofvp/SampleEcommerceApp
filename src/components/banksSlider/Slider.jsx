import { sliderData } from "./sliderData"
import './slider.css'

const Slider = () => {
    return(
        <div className="slider-main-div">
            <div className="slider-container-div">

           {sliderData.map((item)=>(
               <div key={item.id} className="slider-img-div">
             <img style={{height:"20px", width:"50px"}} src={item.img} alt="" />
             </div>
           ))}
            {sliderData.map((item)=>(
             <div key={item.id} className="slider-img-div">
             <img style={{height:"20px", width:"50px"}} src={item.img} alt="" />
             </div>
           ))}
           </div>
        </div>
    )
}

export default Slider