import "./styles.css";
import { Route, Routes } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Employeepage from "./components/Employeepage";
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState();
  const playShow = (data) => {
    setShow(data)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage playShow={playShow} />} />
        <Route path="/:name" element={<Employeepage show={show} />} />
      </Routes>
    </div>
  );
}
