import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routes from "./config/routes";
import { AuthProvider } from "./context";
import "./App.scss";
import AuthGuard from "./components/auth/AuthGuard";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./context/Themcontext";
import SplashScreen from "./components/SplashScreen/SplashScreen";

function App() {
  const [splashScreen,setSplashScreen] = useState(true);
  useEffect(()=>{
    setTimeout(()=> setSplashScreen(false), 2000)
  })
  return (
    <AuthProvider>
      <Router>
        {/* {splashScreen ? (<SplashScreen />) : <> */}
          <ThemeProvider>
          <Header />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
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
          <Footer />
        </ThemeProvider>
      {/* </> } */}
        
      </Router>
    </AuthProvider>
  );
}

export default App;
