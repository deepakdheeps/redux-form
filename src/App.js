import React from "react";
import "./App.css";
import Form from "./form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./page";
//import { Context } from "./form";

function App() {
  return (
    <div className="App">
      <center>
        {/* <Context.Provider> */}
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Form />} />
            <Route path="/values" element={<Page />} />
          </Routes>
        </BrowserRouter>
        {/* </Context.Provider> */}
      </center>
    </div>
  );
}

export default App;
