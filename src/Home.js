import React from "react";
import webComp from "../src/images/Company.jpg";
import Common from "./common";

function Home() {
    console.log("i in home mode");
    return (
        <>
            <Common
                name= <div>
          Grow you business with <strong> MadCap Solution's, </strong> it is
                one of the Leading Website provider's in India
        </div>
        imgsrc = { webComp }
    visit = "/Products"
    btname = "Check Products"
        />
    </>
  );
}

export default Home;
