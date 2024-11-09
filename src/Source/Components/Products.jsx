import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computers";
import Men from "./Men"
import Books from "./Books"
import Ac from "./Ac"
import Fridge from "./Fridge";
import Furniture from "./Furniture";
import Kitchen from "./Kitchen";
import Speaker from "./Speaker"
import Tv from "./TV"
import Watch from "./Watch"
import Women from "./Women"

const Products=()=>{
    return(
        <div className="main">
            <h2 style={{padding:"10px 10px"}}>Mobiles</h2>
            <Mobiles/>
            <h2>Computers</h2>
            <Computers/>
            <h2>Men</h2>
            <Men/>
            <h2>Woman</h2>
            <Women/>
            <h2>Books</h2>
            <Books/>
            <h2>Ac</h2>
            <Ac/>
            <h2>Fridge</h2>
            <Fridge/>
            <h2>Furnitures</h2>
            <Furniture/>
            <h2>Kitchen</h2>
            <Kitchen/>
            <h2>TV</h2>
            <Tv/>
            <h2>Watch</h2>
            <Watch/>
            <h2>Speaker</h2>
            <Speaker/>
        </div>
    )
}

export default Products;