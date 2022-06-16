import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import routes from "./config/routes";
import { AuthProvider } from "./context";
import "./App.css";
import AuthGuard from "./components/auth/AuthGuard";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard";
import React from "react";
import { ThemeProvider } from "./context/Themcontext";
// import AuthRoute from "./components/auth/Authroute";
// import { signIn } from "./components/auth/auth";
function App() {
  // const [user, setUser] = useState(null);
  // const authenticated = user !== null;

  // const login = ({ email, password }) => setUser(signIn({ email, password }));
  // const logout = () => setUser(null);

  return (
    <AuthProvider>
      <Router>
        <ThemeProvider>
          <Header />

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
          <Footer />
          </ThemeProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
