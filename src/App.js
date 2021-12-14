// import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageUsers from "./components/ManageUsers/ManageUsers";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup/Signup";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            {/* <Route path="/explore">
              <Explore></Explore>
            </Route> */}
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <AdminRoute path="/users">
              <ManageUsers></ManageUsers>
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
