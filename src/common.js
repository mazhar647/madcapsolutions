import React from "react";

const Common = (props) => {
    return ( <
        >
        <
        section id = "header"
        className = "d-flex align-items-center" >
        <
        div className = "constainer-fluid" >
        <
        div className = "row" >
        <
        div className = "col-10 mx-auto" >
        <
        div className = "row" >
        <
        div className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1" >
        <
        h1 > { props.name } < /h1>{" "} <
        h2 className = "my-3" >
        We are the team of talented developer making websites { " " } <
        /h2>{" "} <
        div className = "mt-3" >
        <
        a href = { props.visit }
        className = "btn-secondary btn-get-started" >
        { props.btname } { " " } <
        /a>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "col-lg-6 order-1 order-lg-2 header-img" >
        <
        img src = { props.imgsrc }
        className = "img-fluid animated"
        alt = "company img" /
        >
        <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /section>{" "} <
        />
    );
};

export default Common;