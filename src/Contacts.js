import React from "react";
import web from "../src/images/contact.jpg";
import Common from "./common";

const Contacts = () => {
  return (
    <div>
      <Common
        name=<div>
          Contact <strong> MadCap Solution ' s </strong> and avail the extra
          benifits
        </div>
        imgsrc={web}
        visit="/ContactForm"
        btname="Contact Now"
      />
    </div>
  );
};

export default Contacts;
