import React from "react";
import './posterImg.scss'
import posterImg from '../../assets/poster/gadgetPoster.webp'
const PosterImg = ()=> {
    return(
        <>
        <div className="poster-img-main-div">
            <img src={posterImg} alt="" />
        </div>
        </>
    )
}


export default PosterImg