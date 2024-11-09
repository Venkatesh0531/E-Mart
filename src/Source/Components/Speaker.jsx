import React from "react";
import {speakerData} from "../data/speaker"

const Speaker=()=>{
    const firstSixImages = speakerData.slice(0,6)
    return(
        <>
        <div className="section">

            {firstSixImages.map((item)=>{
                return(
                    <div>
                        <img className="image" src={item.image} alt="" />
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Speaker;