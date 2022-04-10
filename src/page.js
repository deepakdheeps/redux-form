import React from "react";
import "./index.css";
//import { Context } from "./form";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

export const Page = () => {
  const user = useSelector(selectUser);
  console.log("state value", user);
  //const val = useContext(Context);
  return (
    <center>
      <div className="digi-white">
        {user.map((person) => (
          <>
            <div className="img-holder">
              <img src={person.image} alt="" id="img" className="img" />
            </div>
            <p> University Name : {person.name} </p>
            <p> University Code : {person.code} </p>
            <p> Accreditation : {person.accred} </p>
            <p>Under University : {person.under} </p>
            <p> Address : {person.aline} </p>
            <p>Country : {person.country} </p>
            <p>State : {person.state} </p>
            <p>City : {person.city} </p>
            <p>District Name : {person.dist} </p>
            <p> Zip Code : {person.zip} </p>
          </>
        ))}
      </div>
    </center>
  );
};
