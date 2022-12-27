import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import Contact from "./components/Contact";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer/UseReducer";

// ---------- create context -------------
export const UserContext = createContext();
const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />

        <Route exact path="/contact" element={<Contact />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/logout" element={<Logout />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <Header />
        <Routing />
      </UserContext.Provider>
    </div>
  );
}

export default App;
