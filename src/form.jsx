import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DetailContext } from "./context/detailcontext";
import "./App.css";

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const [err, seterr] = useState(false);
  const [mailerr, setmailerr] = useState(false);
  const { details, update, settingmail } = useContext(DetailContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (
      data.firstName == "" ||
      data.lastName == "" ||
      data.phone == "" ||
      data.Address == "" ||
      data.city == "" ||
      data.country == ""
    ) {
      seterr(true);
    } else {
      seterr(false);
      update(data);
      navigate("/details");
    }
  };

  const mailHandle = (e) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.eva.pingutil.com/email?email=${e.target.value}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        let r = JSON.parse(result);
        if (r.status == "failure") {
          setmailerr(true);
        }
        if (r.status == "success") {
          setmailerr(false);
          settingmail(r.data.email_address);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="App">
      <h2>Registration From</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input placeholder="First Name" {...register("firstName")} />
        </div>

        <div>
          <label htmlFor="Last Name">Last Name</label>
          <input placeholder="Last Name" {...register("lastName")} />
        </div>

        <div>
          <label htmlFor="Phone">Phone</label>
          <input placeholder="Mobile No" {...register("phone")} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            placeholder="test@gmail.com"
            type="email"
            onChange={mailHandle}
          />
          {mailerr ? <p>Please enter a vaild email address</p> : null}
        </div>

        <div>
          <label htmlFor="lastName">Address</label>
          <input placeholder="Address" {...register("Address")} />
        </div>

        <div>
          <label htmlFor="lastName">city</label>
          <input placeholder="City" {...register("city")} />
        </div>

        <div>
          <label htmlFor="lastName">Country</label>
          <input placeholder="Country" {...register("country")} />
        </div>
        <input type="submit" />
      </form>
      {err ? <p>please fill all the columns</p> : null}
    </div>
  );
};
