import Header from "./components/global/Header"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/routedComponents/Home";
import AddMovie from "./components/routedComponents/AddMovie";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <Home/>
            </>
          }/>
          <Route path="/add" element={
            <>
              <Header/>
              <AddMovie/>
            </>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App
