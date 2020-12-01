import React from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Cardstyle = (props) => {
    return ( <
        >
        <
        div class = "row" >
        <
        div className = "col-sm-10" >
        <
        div className = "card text-center mb-3 card-width" >
        <
        img src = { props.imgsrc }
        className = "card-img-top img-height"
        alt = { props.imgsrc }
        />{" "} <
        div className = "card-body" >
        <
        h5 className = "card-title" > { props.title } < /h5>{" "} <
        p > Price: { props.price } < /p>{" "} <
        NavLink to = "ContactForm"
        className = "btn btn-primary" >
        Contact Now to Order { " " } <
        /NavLink>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        />
    );
};

export default Cardstyle;