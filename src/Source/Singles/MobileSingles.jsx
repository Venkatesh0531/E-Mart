import React from "react";
import {mobileData} from "../data/mobiles"
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";

const MobileSingles=()=>{
const {id} = useParams()
const product  = mobileData.find((item)=>item.id===id)
    return(
        <>
        <NavBar/>
        <div className="single-desc">
            <div className="item-desc">
                <div className="item1">
                    <img src={product.image} alt="" />  
                </div>
                <div className="item">
                    <h2 className="data">{product.company}</h2>
                    <h3 className="data">{product.model}</h3>
                    <h4 className="data">{product.price}</h4>
                    <p className="data">{product.description}</p>
                    <button className="utham">Add to Cart</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default MobileSingles;