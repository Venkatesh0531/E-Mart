import React from "react";
import { tvData } from "../data/tv";
import NavBar from "../Components/NavBar";

const TvPage=()=>{
    return(
        <>
        <NavBar/>
            <div className="proSection">
                {tvData.map((item)=>{
                    return(
                        <div>
                            <div className="proImg">
                                <img src={item.image} alt="" />
                            </div>
                            <div style={{paddingLeft:"80px"}}>
                                <b>{item.company}</b><br/>{item.model}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TvPage;