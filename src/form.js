import { CountrySelect } from "./country.tsx";
import { StateComplete } from "./state.tsx";
import { DistrictComplete } from "./district.tsx";
import BusinessIcon from "@material-ui/icons/Business";
import { CityComplete } from "./orgcity.tsx";
import { Logo } from "./image";
import React from "react";
import { useRef, useState } from "react";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import "./App.css";
import { Link } from "react-router-dom";
import { addToCart } from "./features/userSlice";
import { useDispatch } from "react-redux";

const isEmpty = (value) => value.trim() === "";
const isDigit = (value) => value.trim().length == 5;

//export const Context = React.createContext();
function Form() {
  //for button disables purpose//
  const [dist, setDist] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [able, setAble] = useState(true);
  const [enteredName, setEnteredName] = useState("");
  const [image, setImage] = useState(
    "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX10993210.jpg"
  );

  const [formInputvalidity, setFormInputValidity] = useState({
    name: true,
    code: true,
    accred: true,
    under: true,
    aline: true,
    zip: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    accred: "",
    under: "",
    aline: "",
    zip: "",
  });

  const unameInputRef = useRef();
  const ucodeInputRef = useRef();
  const accredInputRef = useRef();
  const underInputref = useRef();
  const alineInputRef = useRef();
  const zipInputRef = useRef();

  ///for redux storing
  const dispatch = useDispatch();

  const actionhandler = (e) => {
    dispatch(
      addToCart({
        name: unameInputRef.current.value,
        code: ucodeInputRef.current.value,
        accred: accredInputRef.current.value,
        under: underInputref.current.value,
        aline: alineInputRef.current.value,
        zip: zipInputRef.current.value,
        code: zipInputRef.current.value,
        image: image,
        dist: dist,
        city: city,
        state: state,
        country: country,
      })
    );
  };

  const changeHandler = (e) => {
    e.preventDefault();

    setEnteredName = unameInputRef.current.value;
    const enteredCode = ucodeInputRef.current.value;
    const enteredAccred = accredInputRef.current.value;
    const enteredUnder = underInputref.current.value;
    const enteredAline = alineInputRef.current.value;
    const enteredZip = zipInputRef.current.value;
    //for Input validation//
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCodeIsValid = !isEmpty(enteredCode);
    const enteredAccredIsValid = !isEmpty(enteredAccred);
    const enteredUnderIsValid = !isEmpty(enteredUnder);
    const enteredAlineIsValid = !isEmpty(enteredAline);
    const enteredZipIsValid = isDigit(enteredZip);
    //for Form validation//
    const formIsValid =
      enteredNameIsValid &&
      enteredCodeIsValid &&
      enteredAccredIsValid &&
      enteredUnderIsValid &&
      enteredAlineIsValid &&
      enteredZipIsValid;

    setFormInputValidity({
      name: enteredNameIsValid,
      code: enteredCodeIsValid,
      accred: enteredAccredIsValid,
      under: enteredUnderIsValid,
      aline: enteredAlineIsValid,
      zip: enteredZipIsValid,
    });

    setFormData({
      name: enteredName,
      code: enteredCode,
      accred: enteredAccred,
      under: enteredUnder,
      aline: enteredAline,
      zip: enteredZip,
    });
  };
  return (
    // <Context.Provider
    //   value={{
    //     name: formData.name,
    //     code: formData.code,
    //     accred: formData.accred,
    //     under: formData.under,
    //     aline: formData.aline,
    //     zip: formData.zip,
    //     image: image,
    //     dist: dist,
    //     city: city,
    //     state: state,
    //     country: country,
    //   }}
    // >
    //   {active === "first" && setFormInputValidity ? (
    //     <>
    <div className="form">
      <h6>
        <AssignmentTurnedInIcon /> digi Scheduler
      </h6>
      <form onSubmit={(e) => changeHandler(e)}>
        <div className="flex">
          <h3 className="h3">Add New University / Group of Institution</h3>

          <Link to="/values">
            <button
              type="button "
              className="digi-button"
              onClick={(e) => actionhandler(e)}
            >
              submit
            </button>
          </Link>
        </div>
        <Logo setImage={setImage} image={image}></Logo>

        <div className="digi-left">
          <label>University Name</label>
          <br />
          <input
            type="text"
            placeholder="   Type Your University Name"
            ref={unameInputRef}
          />
          {!formInputvalidity.name && (
            <p className="digi-alert">*please enter valid name</p>
          )}
          <br />
          <label>University code</label>
          <br />

          <input
            type="text"
            placeholder="   Type Your University code"
            ref={ucodeInputRef}
          />
          {!formInputvalidity.code && (
            <p className="digi-alert">*please enter valid code</p>
          )}
          <br />
          <label>Accreditation</label>
          <br />
          <input
            type="text"
            placeholder="   Eg : NAAC . A++"
            ref={accredInputRef}
          />
          {!formInputvalidity.accred && (
            <p className="digi-alert">*please enter valid accreditation</p>
          )}
          <br />
          <label>No College Under University</label>
          <br />
          <input type="text" placeholder="   D5" ref={underInputref} />
          {!formInputvalidity.under && (
            <p className="digi-alert">*please give valid data</p>
          )}
          <br />
          <div className="div">
            <BusinessIcon />
            <h3 style={{ marginLeft: "30px" }}>Address Details</h3>
          </div>
          <label>Address Line 1</label>
          <br />
          <input
            type="text"
            placeholder="   Type Your Complete Address"
            ref={alineInputRef}
          ></input>
          {!formInputvalidity.aline && (
            <p className="digi-alert">*please enter valid address</p>
          )}
        </div>

        <div className="digi-flex">
          <div>
            <label>Country</label>
            <br />

            <CountrySelect onChange={(newValue) => setCountry(newValue)} />
          </div>
          <div className="digi-padd">
            <label>State/Region</label>
            <br />
            <StateComplete onChange={(newValue) => setState(newValue)} />
          </div>
        </div>

        <div className="digi-flex">
          <div>
            <label>City</label>
            <br />
            <CityComplete onChange={(newValue) => setCity(newValue)} />
          </div>
          <div className="digi-padding">
            <label>District</label>
            <br />
            <DistrictComplete onChange={(newValue) => setDist(newValue)} />
          </div>
        </div>
        <div className="digi-zip">
          <label>Zipcode</label>
          <br />
          <input type="number" placeholder="" ref={zipInputRef}></input>
          {!formInputvalidity.zip && (
            <p className="digi-alert">*please enter valid zipcode</p>
          )}
        </div>
      </form>
      <p className="digi-footer">
        @2020, Digival Solutions Pvt Ltd. All Rights Reserved.
      </p>
    </div>
    //     </>
    //   ) : (
    //     ""
    //   )}
    //   {/* {active === "second" && <Page />} */}
    // </Context.Provider>
  );
}

export default Form;
