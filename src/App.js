import './App.css';
import './style.css';
import Form from "./Form";
import MainInfo from "./MainInfo";
import WeekTable from "./WeekTable";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="bodydesign">
        <Form />

        <MainInfo temperature={10} city="Tokyo" humidity={60} windspeed={2} />

        <WeekTable />
      </div>
    </div>
  );
}

export default App;
