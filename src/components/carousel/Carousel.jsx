import { carouselData } from "./carouselData"
import { useState } from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright} from "react-icons/io"
import './carousel.css'
const Carousel = ()=>{
    const [imgId, setImgId] = useState(0)

    const rightBtnClick = () => {
        setImgId((prev)=>{
            if(prev === carouselData.length-1 ){
                return 0
            }
            return prev + 1
        })
    }

    const leftBtnClick = () => {
        setImgId((prev)=>{
            if(prev === 0 ){
                return carouselData.length-1
            }
            return prev - 1
        })
    }
    


    
    return(
<div className="carousel-div" >
    
<IoIosArrowDropleft className="img-slider-btn" onClick={leftBtnClick} style={{position:"absolute",zIndex:"1", height:"50px", width:"50px", marginLeft:"20px", left:"0" }}/>
    { carouselData.map((item)=>{
            return <img className="slider-img" style={{translate:`${-100*imgId}%`}}  src={item.img} key={item.id} alt="opps!!!" />
        }
    )
    }
    <IoIosArrowDropright className="img-slider-btn" onClick={rightBtnClick} style={{position:"absolute", height:"50px", width:"50px", right:"0", marginRight:"20px"}}/>
</div>

    )
}

export default Carousel