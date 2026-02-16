import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Testing from "./Components/Testing";
import FirstApp from "./Components/FirstApp";
import Register from "./Components/MUI/Register";
import Arrowfunction from "./Components/ES7/Arrowfunction";
import Basictable from "./Components/MUI/Basictable";
import ArrayMethod from "./Components/ES7/ArrayMethod";
import SpreadOperator from "./Components/ES7/SpreadOperator";

function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path='/first' element={<FirstApp/>} />
                <Route path='/testing' element={<Testing/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/arrowfunction' element={<Arrowfunction/>} />
                <Route path='/basictable' element={<Basictable/>} />
                <Route path='/arraymethod' element={<ArrayMethod/>} />
                <Route path='/spreadoperator' element={<SpreadOperator/>} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
