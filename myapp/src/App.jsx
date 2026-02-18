import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Testing from "./Components/Testing";
import FirstApp from "./Components/FirstApp";
import Register from "./Components/MUI/Register";
import Arrowfunction from "./Components/ES7/Arrowfunction";
import Basictable from "./Components/MUI/Basictable";
import ArrayMethod from "./Components/ES7/ArrayMethod";
import SpreadOperator from "./Components/ES7/SpreadOperator";
import Cards from "./Components/MUI/Cards";
import MuiAppBar from "./Components/MUI/MuiAppBar";
import Destructuring from "./Components/ES7/Destructuring";
import Importmodule from "./Components/ES7/Importmodule";
import TernaryOperator from "./Components/ES7/TernaryOperator";
import Props from "./Components/ES7/Props";
import HookUsestate from "./Components/Hook/HookUsestate";

function App() {
  return (
    <div>
      <BrowserRouter>
      <MuiAppBar/>
            <Routes>
                <Route path='/first' element={<FirstApp/>} />
                <Route path='/testing' element={<Testing/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/arrowfunction' element={<Arrowfunction/>} />
                <Route path='/basictable' element={<Basictable/>} />
                <Route path='/arraymethod' element={<ArrayMethod/>} />
                <Route path='/spreadoperator' element={<SpreadOperator/>} />
                <Route path='/cards' element={<Cards/>} />
                <Route path='/destructuring' element={<Destructuring/>} />
                <Route path='/importmodule' element={<Importmodule/>} />
                <Route path='/ternaryoperator' element={<TernaryOperator/>} />
                <Route path='/props' element={<Props name="Meghana"/>} />
                <Route path='/hookusestate' element={<HookUsestate/>} />

            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
