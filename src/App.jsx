import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Suspense,lazy } from "react";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

//used supsense API for lazy loading and designated a fallback to "loading..."
// for when the page is Loading

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback={"loading ..."}>
          <Routes>
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/" Component={Landing} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

//we cannot use 'useNavigate' hook in any place except inside
// {BrowserRouter} and thats how we solve the page reload
function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;
