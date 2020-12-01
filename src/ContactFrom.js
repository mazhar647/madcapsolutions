import React, { useState } from "react";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [data, setData] = useState({
    fullName:"",
    exampleInputEmail1: " ",
    exampleInputPassword1: " ",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    // e.preventDefault();
    alert(`Submited form, ${data.exampleInputEmail1}`);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>{" "}
      </div>{" "}
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div className="form-group">
                <label id="fullName"> Full Name </label>{" "}
                <input
                  type="fullName"
                  className="form-control"
                  id="fullName"
                  //   value={data.exampleInputEmail1}
                  onChange={InputEvent}
                />{" "}
              </div>{" "}
              <div className="form-group">
                <label id="exampleInputEmail1"> Email address </label>{" "}
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  //   value={data.exampleInputEmail1}
                  onChange={InputEvent}
                />{" "}
              </div>{" "}
              <div className="form-group">
                <label id="phoneNumber"> Contact Number </label>{" "}
                <input
                  type="number"
                  className="form-control"
                  id="phoneNumber"
                  //   value={data.exampleInputPassword1}
                  onChange={InputEvent}
                />{" "}
              </div>{" "}
              <button type="submit" className="btn btn-primary">
                Submit{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default ContactForm;
