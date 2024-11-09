import React from "react";
import {furnitureData} from "../data/furniture"

const Furniture=()=>{
    const firstSixImages = furnitureData.slice(0,6)
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

export default Furniture;