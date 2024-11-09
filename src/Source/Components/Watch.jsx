import React from "react";
import {watchData} from "../data/watch"

const Watch=()=>{
    const firstSixImages = watchData.slice(0,6)
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

export default Watch;