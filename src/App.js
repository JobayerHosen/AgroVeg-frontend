// import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/Profile/Profile";
import Shop from "./components/Shop/Shop";
import Signup from "./components/Signup/Signup";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <AdminRoute path="/dashboard">
              <Dashboard></Dashboard>
            </AdminRoute>
            <Route path="*">
              <h1>Page Not Found</h1>
            </Route>
          </Switch>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
