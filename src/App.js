import React from "react";
import Navbar from "./components/Navbar";
import ApplicationForm from "./components/ApplicationForm";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
     <div className="bg-gray-200 sticky top-0" id='homeId'>
     <Navbar/>
    </div>
    <div id='formId'>
     <ApplicationForm/>
    </div>
    <div id='aboutId'>
     <AboutUs/>
    </div>
    </>
   
  );
}

export default App;
