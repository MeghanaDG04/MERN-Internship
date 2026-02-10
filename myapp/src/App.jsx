import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Testing from "./Components/Testing";
import FirstApp from "./Components/FirstApp";
import Register from "./Components/MUI/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path='/first' element={<FirstApp/>} />
                <Route path='/testing' element={<Testing/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
