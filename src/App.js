import "./App.css";
import { Navbar, Footer } from "./components";
import {
  Home,
  Profile,
  Item,
  Create,
  Login,
  Register,
  Explorer,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute"
function App() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path=":item/:id"
          element={
            <PrivateRoute>
              <Item />
            </PrivateRoute>
          }
        />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <Create />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:userAddress"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/explorer"
          element={
            <PrivateRoute>
              <Explorer />
            </PrivateRoute>
          }
        />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
