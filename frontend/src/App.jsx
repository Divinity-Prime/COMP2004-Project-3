import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";
import CreateUserPage from "./Components/CreateUserPage";
import NotFoundPage from "./Components/NotFoundPage";
import LoginForm from "./Components/LoginForm";
import PrivatePage from "./Components/PrivatePage";
import PrivateRoute from "./Components/PrivateRoute";
import NotAuthorized from "./Components/NotAuthorized";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Routes>
            <Route element={<PrivateRoute />} />
          </Routes>

          <Route path="/not-authorized" element={<NotAuthorized />} />

          {/* <Route path="/" element={<h1>Login Page</h1>} /> */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          <Route path="/private" element={<PrivatePage />} />

          <Route path="/main" element={<GroceriesAppContainer />} />
          {/* <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/edit-product/:id" element={<EditProductPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
