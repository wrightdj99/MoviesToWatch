import Header from "./components/global/Header"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/routedComponents/Home";
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
        </Routes>
      </Router>
    </>
  );
}

export default App
