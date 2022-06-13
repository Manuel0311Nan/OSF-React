import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import routes from "./config/routes";
import { AuthProvider } from "./context";
import "./App.css";
import AuthGuard from "./components/AuthGuard";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard";
import React from "react";

function App() {
  return (
    <AuthProvider>
      <Router>
      <Header/>
        <Routes>
        <Route path='*' element={<Navigate to="/" />} />
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
{/* <Route path="/dashboard" element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            } /> */}
            <Route
              path="/dashboard"
              element={
                <React.Suspense fallback={<>Loading...</>}>
                  <AuthGuard>
                    <Dashboard />
                  </AuthGuard>
                </React.Suspense>
              }
            />

        </Routes>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
