import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cardstyle from "./Cardstyle";
import Sdata from "./sdata";

const Products = () => {
    return ( <
        >
        <
        div className = "my-5" >
        <
        h1 className = "tab-center" > < /h1>{" "} < /
        div > { " " } <
        div className = "container-fluid mb-5" >
        <
        div className = "row" >
        <
        div className = "col-10 mx-auto" >
        <
        div className = "row gy-4" > { " " } {
            Sdata.map((val, ind) => {
                return <Cardstyle key = { ind }
                imgsrc = { val.imgsrc }
                title = { val.title }
                price = { val.price }
                />;
            })
        } { " " } { /* <Cardstyle /> */ } { " " } <
        /div>{" "} < /
        div > { " " } <
        /div>{" "} < /
        div > { " " } <
        />
    );
};

export default Products;