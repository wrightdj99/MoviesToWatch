import Header from "./components/global/Header"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/routedComponents/Home";
import AddMovie from "./components/routedComponents/AddMovie";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import EditMovie from "./components/routedComponents/EditMovie";
const App = () => {

  const[toast, setToast] = useState<{ open: boolean; message: string; severity: "success" | "error"}>({
    open: false,
    message: "",
    severity: "success",
  });

  const showToast = (message: string, severity: "success" | "error" = "success") => {
    setToast({open: true, message, severity});
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <Home showToast={showToast}/>
            </>
          }/>
          <Route path="/add" element={
            <>
              <Header/>
              <AddMovie showToast={showToast}/>
            </>
          }/>
          <Route path="/edit" element={
            <>
              <Header/>
              <EditMovie showToast={showToast}/>
            </>
          }/>
        </Routes>
      </Router>
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({...toast, open: false})}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={toast.severity} onClose={() => setToast({ ...toast, open: false})}>
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App
