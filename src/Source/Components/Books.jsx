import React from "react";
import {booksData} from "../data/books"

const Books=()=>{
    const firstSixImages = booksData.slice(0,6)
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

export default Books;