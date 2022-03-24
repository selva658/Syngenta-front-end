import { Form } from "./form"
import { Route, Routes } from "react-router-dom"
import {Details } from "./details"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/details" element={<Details/>}></Route>
      </Routes>
   </div>
 )
}

export default App